const Crypto = {
    async generateVMK() {
        return window.crypto.subtle.generateKey(
            { name: "AES-GCM", length: 256 },
            true,
            ["encrypt", "decrypt"]
        );
    },

    async encryptVMK(vmkKey, derivedKey) {
        const raw = await window.crypto.subtle.exportKey("raw", vmkKey);
        const iv = window.crypto.getRandomValues(new Uint8Array(12));
        const ciphertext = await window.crypto.subtle.encrypt(
            { name: "AES-GCM", iv: iv },
            derivedKey,
            raw
        );
        return {
            ciphertext: this.bufferToBase64(ciphertext),
            iv: this.bufferToBase64(iv)
        };
    },

    async decryptVMK(encryptedVmkObj, derivedKey) {
        const ciphertext = this.base64ToBuffer(encryptedVmkObj.ciphertext);
        const iv = this.base64ToBuffer(encryptedVmkObj.iv);
        const decryptedRaw = await window.crypto.subtle.decrypt(
            { name: "AES-GCM", iv: iv },
            derivedKey,
            ciphertext
        );
        // Importar como NO extraíble (extractable: false) para blindar la clave en RAM
        return window.crypto.subtle.importKey(
            "raw",
            decryptedRaw,
            { name: "AES-GCM", length: 256 },
            false,
            ["encrypt", "decrypt"]
        );
    },

    async deriveKey(password, saltBuffer) {
        const enc = new TextEncoder();
        const keyMaterial = await window.crypto.subtle.importKey(
            "raw",
            enc.encode(password),
            { name: "PBKDF2" },
            false,
            ["deriveBits", "deriveKey"]
        );
        
        return window.crypto.subtle.deriveKey(
            {
                name: "PBKDF2",
                salt: saltBuffer,
                iterations: 210000,
                hash: "SHA-256"
            },
            keyMaterial,
            { name: "AES-GCM", length: 256 },
            false,
            ["encrypt", "decrypt"]
        );
    },

    async encrypt(dataObj, key) {
        const iv = window.crypto.getRandomValues(new Uint8Array(12));
        const enc = new TextEncoder();
        const dataStr = JSON.stringify(dataObj);
        
        const ciphertext = await window.crypto.subtle.encrypt(
            {
                name: "AES-GCM",
                iv: iv
            },
            key,
            enc.encode(dataStr)
        );
        
        return {
            ciphertext: this.bufferToBase64(ciphertext),
            iv: this.bufferToBase64(iv)
        };
    },

    async decrypt(encryptedStr, ivStr, key) {
        const ciphertext = this.base64ToBuffer(encryptedStr);
        const iv = this.base64ToBuffer(ivStr);
        
        const decryptedContent = await window.crypto.subtle.decrypt(
            {
                name: "AES-GCM",
                iv: iv
            },
            key,
            ciphertext
        );
        
        const dec = new TextDecoder();
        return JSON.parse(dec.decode(decryptedContent));
    },

    bufferToBase64(buffer) {
        const bytes = new Uint8Array(buffer);
        let binary = '';
        const chunkSize = 0x8000; // 32KB chunks to prevent stack overflow
        for (let i = 0; i < bytes.length; i += chunkSize) {
            binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize));
        }
        return window.btoa(binary);
    },

    base64ToBuffer(base64) {
        const binary_string = window.atob(base64);
        const len = binary_string.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
    },

        zeroize(target) {
        if (!target) return;
        try {
            if (target instanceof ArrayBuffer) {
                new Uint8Array(target).fill(0);
            } else if (ArrayBuffer.isView(target)) {
                new Uint8Array(target.buffer, target.byteOffset, target.byteLength).fill(0);
            } else if (Array.isArray(target)) {
                target.fill(0);
            }
        } catch (e) {
            console.warn("Zeroization warning:", e);
        }
    },

    async hashFile(file) {
        const arrayBuffer = await file.arrayBuffer();
        const hashBuffer = await window.crypto.subtle.digest('SHA-256', arrayBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }
};

Object.freeze(Crypto);
