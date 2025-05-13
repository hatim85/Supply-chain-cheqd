# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

hatim@Hatims-MacBook-Air backend % npm run dev

> backend@1.0.0 dev
> nodemon server.js

[nodemon] 3.1.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
Backend running on port 5000
Starting DID creation for identifier: manuf
Creating key: {
  url: 'https://studio-api.cheqd.net/key/create',
  payload: { type: 'Ed25519' },
  headers: { 'x-api-key': 'REDACTED', 'Content-Type': 'application/json' }
}
Key creation response: {
  kid: '386c10aa786c8f87cb4c6a5ed005b065ec2c178b78d7f67d27579f1274f935a6',
  kms: 'postgres',
  type: 'Ed25519',
  publicKeyHex: '386c10aa786c8f87cb4c6a5ed005b065ec2c178b78d7f67d27579f1274f935a6',
  meta: { algorithms: [ 'EdDSA', 'Ed25519' ] },
  publicKeyAlias: null,
  createdAt: '2025-05-11T17:45:18.846Z',
  updatedAt: '2025-05-11T17:45:18.853Z',
  customer: {
    customerId: '70a6877f-8fc6-4bb8-9df1-3e994e55fd09',
    name: 'Hatim Unwala',
    email: 'hatimunwala5@gmail.com',
    description: null,
    createdAt: '2025-05-06T10:29:10.560Z',
    updatedAt: '2025-05-06T10:29:10.920Z',
    paymentProviderId: 'cus_SGFEqSKIn7OwyP'
  }
}
Public key hex: 386c10aa786c8f87cb4c6a5ed005b065ec2c178b78d7f67d27579f1274f935a6
Creating DID: {
  url: 'https://studio-api.cheqd.net/did/create',
  payload: '{\n' +
    '  "didDocument": {\n' +
    '    "id": "did:cheqd:testnet:ee83ce4c-f1f6-4add-8334-c1a9794fc2a7",\n' +
    '    "controller": [\n' +
    '      "did:cheqd:testnet:ee83ce4c-f1f6-4add-8334-c1a9794fc2a7"\n' +
    '    ],\n' +
    '    "verificationMethod": [\n' +
    '      {\n' +
    '        "id": "did:cheqd:testnet:ee83ce4c-f1f6-4add-8334-c1a9794fc2a7#key-1",\n' +
    '        "type": "JsonWebKey2020",\n' +
    '        "controller": "did:cheqd:testnet:ee83ce4c-f1f6-4add-8334-c1a9794fc2a7",\n' +
    '        "publicKeyJwk": {\n' +
    '          "crv": "Ed25519",\n' +
    '          "kty": "OKP",\n' +
    '          "x": "OGwQqnhsj4fLTGpe0AWwZewsF4t41_Z9J1efEnT5NaY"\n' +
    '        }\n' +
    '      }\n' +
    '    ],\n' +
    '    "authentication": [\n' +
    '      "did:cheqd:testnet:ee83ce4c-f1f6-4add-8334-c1a9794fc2a7#key-1"\n' +
    '    ]\n' +
    '  },\n' +
    '  "network": "testnet",\n' +
    '  "identifierFormatType": "uuid",\n' +
    '  "options": {\n' +
    '    "key": "386c10aa786c8f87cb4c6a5ed005b065ec2c178b78d7f67d27579f1274f935a6",\n' +
    '    "verificationMethodType": "JsonWebKey2020"\n' +
    '  }\n' +
    '}',
  headers: { 'x-api-key': 'REDACTED', 'Content-Type': 'application/json' }
}
DID creation response: {
  did: 'did:cheqd:testnet:ee83ce4c-f1f6-4add-8334-c1a9794fc2a7',
  keys: [
    {
      kid: '386c10aa786c8f87cb4c6a5ed005b065ec2c178b78d7f67d27579f1274f935a6',
      kms: 'postgres',
      type: 'Ed25519',
      publicKeyHex: '386c10aa786c8f87cb4c6a5ed005b065ec2c178b78d7f67d27579f1274f935a6',
      meta: [Object],
      controller: 'did:cheqd:testnet:ee83ce4c-f1f6-4add-8334-c1a9794fc2a7'
    }
  ],
  services: [],
  provider: 'did:cheqd:testnet',
  controllerKeyRefs: [
    '386c10aa786c8f87cb4c6a5ed005b065ec2c178b78d7f67d27579f1274f935a6'
  ],
  controllerKeys: [
    {
      kid: '386c10aa786c8f87cb4c6a5ed005b065ec2c178b78d7f67d27579f1274f935a6',
      kms: 'postgres',
      type: 'Ed25519',
      publicKeyHex: '386c10aa786c8f87cb4c6a5ed005b065ec2c178b78d7f67d27579f1274f935a6',
      meta: [Object],
      controller: 'did:cheqd:testnet:ee83ce4c-f1f6-4add-8334-c1a9794fc2a7'
    }
  ],
  controllerKeyId: '386c10aa786c8f87cb4c6a5ed005b065ec2c178b78d7f67d27579f1274f935a6'
}
Starting DID creation for identifier: dist
Creating key: {
  url: 'https://studio-api.cheqd.net/key/create',
  payload: { type: 'Ed25519' },
  headers: { 'x-api-key': 'REDACTED', 'Content-Type': 'application/json' }
}
Key creation response: {
  kid: '4600d630b68d98d245fd0403238856cce0969525291b07cd066221e3d015faec',
  kms: 'postgres',
  type: 'Ed25519',
  publicKeyHex: '4600d630b68d98d245fd0403238856cce0969525291b07cd066221e3d015faec',
  meta: { algorithms: [ 'EdDSA', 'Ed25519' ] },
  publicKeyAlias: null,
  createdAt: '2025-05-11T18:15:09.840Z',
  updatedAt: '2025-05-11T18:15:09.846Z',
  customer: {
    customerId: '70a6877f-8fc6-4bb8-9df1-3e994e55fd09',
    name: 'Hatim Unwala',
    email: 'hatimunwala5@gmail.com',
    description: null,
    createdAt: '2025-05-06T10:29:10.560Z',
    updatedAt: '2025-05-06T10:29:10.920Z',
    paymentProviderId: 'cus_SGFEqSKIn7OwyP'
  }
}
Public key hex: 4600d630b68d98d245fd0403238856cce0969525291b07cd066221e3d015faec
Creating DID: {
  url: 'https://studio-api.cheqd.net/did/create',
  payload: '{\n' +
    '  "didDocument": {\n' +
    '    "id": "did:cheqd:testnet:c9c9eeb3-efa4-4514-814d-86b0325a5419",\n' +
    '    "controller": [\n' +
    '      "did:cheqd:testnet:c9c9eeb3-efa4-4514-814d-86b0325a5419"\n' +
    '    ],\n' +
    '    "verificationMethod": [\n' +
    '      {\n' +
    '        "id": "did:cheqd:testnet:c9c9eeb3-efa4-4514-814d-86b0325a5419#key-1",\n' +
    '        "type": "JsonWebKey2020",\n' +
    '        "controller": "did:cheqd:testnet:c9c9eeb3-efa4-4514-814d-86b0325a5419",\n' +
    '        "publicKeyJwk": {\n' +
    '          "crv": "Ed25519",\n' +
    '          "kty": "OKP",\n' +
    '          "x": "RgDWMLaNmNJF_QQDI4hWzOCWlSUpGwfNBmIh49AV-uw"\n' +
    '        }\n' +
    '      }\n' +
    '    ],\n' +
    '    "authentication": [\n' +
    '      "did:cheqd:testnet:c9c9eeb3-efa4-4514-814d-86b0325a5419#key-1"\n' +
    '    ]\n' +
    '  },\n' +
    '  "network": "testnet",\n' +
    '  "identifierFormatType": "uuid",\n' +
    '  "options": {\n' +
    '    "key": "4600d630b68d98d245fd0403238856cce0969525291b07cd066221e3d015faec",\n' +
    '    "verificationMethodType": "JsonWebKey2020"\n' +
    '  }\n' +
    '}',
  headers: { 'x-api-key': 'REDACTED', 'Content-Type': 'application/json' }
}
DID creation response: {
  did: 'did:cheqd:testnet:c9c9eeb3-efa4-4514-814d-86b0325a5419',
  keys: [
    {
      kid: '4600d630b68d98d245fd0403238856cce0969525291b07cd066221e3d015faec',
      kms: 'postgres',
      type: 'Ed25519',
      publicKeyHex: '4600d630b68d98d245fd0403238856cce0969525291b07cd066221e3d015faec',
      meta: [Object],
      controller: 'did:cheqd:testnet:c9c9eeb3-efa4-4514-814d-86b0325a5419'
    }
  ],
  services: [],
  provider: 'did:cheqd:testnet',
  controllerKeyRefs: [
    '4600d630b68d98d245fd0403238856cce0969525291b07cd066221e3d015faec'
  ],
  controllerKeys: [
    {
      kid: '4600d630b68d98d245fd0403238856cce0969525291b07cd066221e3d015faec',
      kms: 'postgres',
      type: 'Ed25519',
      publicKeyHex: '4600d630b68d98d245fd0403238856cce0969525291b07cd066221e3d015faec',
      meta: [Object],
      controller: 'did:cheqd:testnet:c9c9eeb3-efa4-4514-814d-86b0325a5419'
    }
  ],
  controllerKeyId: '4600d630b68d98d245fd0403238856cce0969525291b07cd066221e3d015faec'
}
