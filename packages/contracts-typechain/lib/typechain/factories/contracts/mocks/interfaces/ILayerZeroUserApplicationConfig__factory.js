"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ILayerZeroUserApplicationConfig__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint16",
                name: "_srcChainId",
                type: "uint16",
            },
            {
                internalType: "bytes",
                name: "_srcAddress",
                type: "bytes",
            },
        ],
        name: "forceResumeReceive",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint16",
                name: "_version",
                type: "uint16",
            },
            {
                internalType: "uint16",
                name: "_chainId",
                type: "uint16",
            },
            {
                internalType: "uint256",
                name: "_configType",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_config",
                type: "bytes",
            },
        ],
        name: "setConfig",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint16",
                name: "_version",
                type: "uint16",
            },
        ],
        name: "setReceiveVersion",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint16",
                name: "_version",
                type: "uint16",
            },
        ],
        name: "setSendVersion",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class ILayerZeroUserApplicationConfig__factory {
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.ILayerZeroUserApplicationConfig__factory = ILayerZeroUserApplicationConfig__factory;
ILayerZeroUserApplicationConfig__factory.abi = _abi;
//# sourceMappingURL=ILayerZeroUserApplicationConfig__factory.js.map