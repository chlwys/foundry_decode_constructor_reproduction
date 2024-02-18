/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Indexer, IndexerInterface } from "../Indexer";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Component[]",
        name: "_components",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "_trackValueForComponent",
        type: "bool[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getEntities",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
    ],
    name: "getEntitiesWithValue",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "has",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002d8938038062002d898339810160408190526200003491620002dd565b815162000049906003906020850190620000b5565b5080516200005f9060049060208401906200011f565b506040516200006e90620001c6565b604051809103906000f0801580156200008b573d6000803e3d6000fd5b50600080546001600160a01b0319166001600160a01b039290921691909117905550620003bb9050565b8280548282559060005260206000209081019282156200010d579160200282015b828111156200010d57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620000d6565b506200011b929150620001d4565b5090565b82805482825590600052602060002090601f016020900481019282156200010d5791602002820160005b838211156200018857835183826101000a81548160ff021916908315150217905550926020019260010160208160000104928301926001030262000149565b8015620001b75782816101000a81549060ff021916905560010160208160000104928301926001030262000188565b50506200011b929150620001d4565b61084c806200253d83390190565b5b808211156200011b5760008155600101620001d5565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156200022c576200022c620001eb565b604052919050565b60006001600160401b03821115620002505762000250620001eb565b5060051b60200190565b600082601f8301126200026c57600080fd5b81516020620002856200027f8362000234565b62000201565b82815260059290921b84018101918181019086841115620002a557600080fd5b8286015b84811015620002d25780518015158114620002c45760008081fd5b8352918301918301620002a9565b509695505050505050565b60008060408385031215620002f157600080fd5b82516001600160401b03808211156200030957600080fd5b818501915085601f8301126200031e57600080fd5b81516020620003316200027f8362000234565b82815260059290921b840181019181810190898411156200035157600080fd5b948201945b83861015620003885785516001600160a01b0381168114620003785760008081fd5b8252948201949082019062000356565b91880151919650909350505080821115620003a257600080fd5b50620003b1858286016200025a565b9150509250929050565b61217280620003cb6000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c80634cc82215116100505780634cc82215146100c9578063b361be46146100dc578063cccf7a8e146100ef57600080fd5b806301ffc9a7146100775780630216b8381461009f57806331b933b9146100b4575b600080fd5b61008a6100853660046110df565b610102565b60405190151581526020015b60405180910390f35b6100b26100ad366004611242565b61019b565b005b6100bc6108de565b6040516100969190611289565b6100b26100d73660046112cd565b610998565b6100bc6100ea3660046112e6565b610bdc565b61008a6100fd3660046112cd565b610d14565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000148061019557507fffffffff0000000000000000000000000000000000000000000000000000000082167f4ede9a2d00000000000000000000000000000000000000000000000000000000145b92915050565b600354339060009067ffffffffffffffff8111156101bb576101bb611128565b6040519080825280602002602001820160405280156101ee57816020015b60608152602001906001900390816101d95790505b50905060008060005b600354811015610269578473ffffffffffffffffffffffffffffffffffffffff166003828154811061022b5761022b611323565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff160361025757600191505b8061026181611352565b9150506101f7565b50806102d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4d6573736167652053656e646572206973206e6f7420696e646578656421000060448201526064015b60405180910390fd5b600086815260026020526040902080546102ef906113b1565b90506000036105015760005b6003548110156104ee578473ffffffffffffffffffffffffffffffffffffffff166003828154811061032f5761032f611323565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff161461042c576003818154811061036957610369611323565b6000918252602090912001546040517fb8bc073d0000000000000000000000000000000000000000000000000000000081526004810189905273ffffffffffffffffffffffffffffffffffffffff9091169063b8bc073d90602401600060405180830381865afa1580156103e1573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610427919081019061146d565b61042e565b855b84828151811061044057610440611323565b602002602001018190525083818151811061045d5761045d611323565b6020026020010151516000036104765750505050505050565b6004818154811061048957610489611323565b90600052602060002090602091828204019190069054906101000a900460ff166104dc5760408051600081526020810190915284518590839081106104d0576104d0611323565b60200260200101819052505b806104e681611352565b9150506102fb565b506104f98684610da8565b505050505050565b60005b600354811015610575578473ffffffffffffffffffffffffffffffffffffffff166003828154811061053857610538611323565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1603610563578092505b8061056d81611352565b915050610504565b506000868152600260205260409020805461058f906113b1565b80601f01602080910402602001604051908101604052809291908181526020018280546105bb906113b1565b80156106085780601f106105dd57610100808354040283529160200191610608565b820191906000526020600020905b8154815290600101906020018083116105eb57829003601f168201915b505050505080602001905181019061062091906114c6565b92508483838151811061063557610635611323565b60200260200101819052506001600260008881526020019081526020016000206040516106629190611577565b908152604051908190036020018120547f4cc8221500000000000000000000000000000000000000000000000000000000825273ffffffffffffffffffffffffffffffffffffffff1690634cc82215906106c490899060040190815260200190565b600060405180830381600087803b1580156106de57600080fd5b505af11580156106f2573d6000803e3d6000fd5b50505050600083604051602001610709919061160b565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152600089815260026020522090915061074f8282611707565b50600073ffffffffffffffffffffffffffffffffffffffff166001826040516107789190611821565b9081526040519081900360200190205473ffffffffffffffffffffffffffffffffffffffff1603610831576040516107af9061107c565b604051809103906000f0801580156107cb573d6000803e3d6000fd5b506001826040516107dc9190611821565b908152604051908190036020019020805473ffffffffffffffffffffffffffffffffffffffff929092167fffffffffffffffffffffffff00000000000000000000000000000000000000009092169190911790555b6001816040516108419190611821565b908152604051908190036020018120547f1003e2d200000000000000000000000000000000000000000000000000000000825273ffffffffffffffffffffffffffffffffffffffff1690631003e2d2906108a3908a9060040190815260200190565b600060405180830381600087803b1580156108bd57600080fd5b505af11580156108d1573d6000803e3d6000fd5b5050505050505050505050565b60008054604080517f410d59cc000000000000000000000000000000000000000000000000000000008152905160609373ffffffffffffffffffffffffffffffffffffffff9093169263410d59cc92600480820193918290030181865afa15801561094d573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610993919081019061183d565b905090565b336000805b600354811015610a0f578273ffffffffffffffffffffffffffffffffffffffff16600382815481106109d1576109d1611323565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16036109fd57600191505b80610a0781611352565b91505061099d565b5080610a77576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4d6573736167652053656e646572206973206e6f7420696e646578656421000060448201526064016102cd565b610a8083610d14565b610a8957505050565b600083815260026020526040908190209051600191610aa791611577565b908152604051908190036020018120547f4cc8221500000000000000000000000000000000000000000000000000000000825273ffffffffffffffffffffffffffffffffffffffff1690634cc8221590610b0990869060040190815260200190565b600060405180830381600087803b158015610b2357600080fd5b505af1158015610b37573d6000803e3d6000fd5b50506000546040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810187905273ffffffffffffffffffffffffffffffffffffffff9091169250634cc822159150602401600060405180830381600087803b158015610ba757600080fd5b505af1158015610bbb573d6000803e3d6000fd5b5050506000848152600260205260408120610bd7925090611089565b505050565b6060600073ffffffffffffffffffffffffffffffffffffffff16600183604051610c069190611821565b9081526040519081900360200190205473ffffffffffffffffffffffffffffffffffffffff1603610c4557505060408051600081526020810190915290565b600182604051610c559190611821565b90815260408051918290036020018220547f410d59cc000000000000000000000000000000000000000000000000000000008352905173ffffffffffffffffffffffffffffffffffffffff9091169163410d59cc9160048083019260009291908290030181865afa158015610cce573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610195919081019061183d565b600080546040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff9091169063cccf7a8e90602401602060405180830381865afa158015610d84573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019591906118ce565b600354815114610e14576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f4e6565642076616c75657320666f7220616c6c20636f6d706f6e656e74732e0060448201526064016102cd565b6000546040517f1003e2d20000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff90911690631003e2d290602401600060405180830381600087803b158015610e8057600080fd5b505af1158015610e94573d6000803e3d6000fd5b50505050600081604051602001610eab919061160b565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526000858152600260205220909150610ef18282611707565b50600073ffffffffffffffffffffffffffffffffffffffff16600182604051610f1a9190611821565b9081526040519081900360200190205473ffffffffffffffffffffffffffffffffffffffff1603610fd357604051610f519061107c565b604051809103906000f080158015610f6d573d6000803e3d6000fd5b50600182604051610f7e9190611821565b908152604051908190036020019020805473ffffffffffffffffffffffffffffffffffffffff929092167fffffffffffffffffffffffff00000000000000000000000000000000000000009092169190911790555b600181604051610fe39190611821565b908152604051908190036020018120547f1003e2d200000000000000000000000000000000000000000000000000000000825273ffffffffffffffffffffffffffffffffffffffff1690631003e2d29061104590869060040190815260200190565b600060405180830381600087803b15801561105f57600080fd5b505af1158015611073573d6000803e3d6000fd5b50505050505050565b61084c806118f183390190565b508054611095906113b1565b6000825580601f106110a5575050565b601f0160209004906000526020600020908101906110c391906110c6565b50565b5b808211156110db57600081556001016110c7565b5090565b6000602082840312156110f157600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461112157600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561119e5761119e611128565b604052919050565b600067ffffffffffffffff8211156111c0576111c0611128565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126111fd57600080fd5b813561121061120b826111a6565b611157565b81815284602083860101111561122557600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561125557600080fd5b82359150602083013567ffffffffffffffff81111561127357600080fd5b61127f858286016111ec565b9150509250929050565b6020808252825182820181905260009190848201906040850190845b818110156112c1578351835292840192918401916001016112a5565b50909695505050505050565b6000602082840312156112df57600080fd5b5035919050565b6000602082840312156112f857600080fd5b813567ffffffffffffffff81111561130f57600080fd5b61131b848285016111ec565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036113aa577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b600181811c908216806113c557607f821691505b6020821081036113fe577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60005b8381101561141f578181015183820152602001611407565b50506000910152565b600082601f83011261143957600080fd5b815161144761120b826111a6565b81815284602083860101111561145c57600080fd5b61131b826020830160208701611404565b60006020828403121561147f57600080fd5b815167ffffffffffffffff81111561149657600080fd5b61131b84828501611428565b600067ffffffffffffffff8211156114bc576114bc611128565b5060051b60200190565b600060208083850312156114d957600080fd5b825167ffffffffffffffff808211156114f157600080fd5b818501915085601f83011261150557600080fd5b815161151361120b826114a2565b81815260059190911b8301840190848101908883111561153257600080fd5b8585015b8381101561156a5780518581111561154e5760008081fd5b61155c8b89838a0101611428565b845250918601918601611536565b5098975050505050505050565b6000808354611585816113b1565b6001828116801561159d57600181146115d0576115ff565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00841687528215158302870194506115ff565b8760005260208060002060005b858110156115f65781548a8201529084019082016115dd565b50505082870194505b50929695505050505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156116b4577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc088860301845281518051808752611677818989018a8501611404565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01695909501860194509285019290850190600101611632565b5092979650505050505050565b601f821115610bd757600081815260208120601f850160051c810160208610156116e85750805b601f850160051c820191505b818110156104f9578281556001016116f4565b815167ffffffffffffffff81111561172157611721611128565b6117358161172f84546113b1565b846116c1565b602080601f83116001811461178857600084156117525750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b1785556104f9565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156117d5578886015182559484019460019091019084016117b6565b508582101561181157878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b60008251611833818460208701611404565b9190910192915050565b6000602080838503121561185057600080fd5b825167ffffffffffffffff81111561186757600080fd5b8301601f8101851361187857600080fd5b805161188661120b826114a2565b81815260059190911b820183019083810190878311156118a557600080fd5b928401925b828410156118c3578351825292840192908401906118aa565b979650505050505050565b6000602082840312156118e057600080fd5b8151801515811461112157600080fdfe608060405234801561001057600080fd5b5061001a3361001f565b6100b4565b600061003361009060201b6105431760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b610789806100c36000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638e7cb6e11161005b5780638e7cb6e114610100578063949d225d1461012a578063cccf7a8e1461013b578063f2fde38b1461015e57600080fd5b80631003e2d21461008d578063410d59cc146100a25780634cc82215146100c05780638da5cb5b146100d3575b600080fd5b6100a061009b36600461061b565b610171565b005b6100aa610233565b6040516100b79190610634565b60405180910390f35b6100a06100ce36600461061b565b61028b565b6100db6103ef565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b7565b61011361010e36600461061b565b610434565b6040805192151583526020830191909152016100b7565b6000546040519081526020016100b7565b61014e61014936600461061b565b610467565b60405190151581526020016100b7565b6100a061016c366004610678565b6104ca565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101e1576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101ea81610467565b61023057600080548282526001602081905260408320829055810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563018190555b50565b6060600080548060200260200160405190810160405280929190818152602001828054801561028157602002820191906000526020600020905b81548152602001906001019080831161026d575b5050505050905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146102fb576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030481610467565b156102305760008054610319906001906106b5565b81548110610329576103296106f5565b9060005260206000200154600060016000848152602001908152602001600020548154811061035a5761035a6106f5565b60009182526020808320909101929092558281526001918290526040812054815490929190819084908110610391576103916106f5565b9060005260206000200154815260200190815260200160002081905550600160008281526020019081526020016000206000905560008054806103d6576103d6610724565b6001900381819060005260206000200160009055905550565b600061042f7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b60008061044083610467565b61044f57506000928392509050565b50506000908152600160208190526040909120549091565b60008054810361047957506000919050565b60008281526001602052604081205490036104b55781600080815481106104a2576104a26106f5565b9060005260206000200154149050919050565b50600090815260016020526040902054151590565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461053a576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61023081610567565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610230928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60006020828403121561062d57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b8181101561066c57835183529284019291840191600101610650565b50909695505050505050565b60006020828403121561068a57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146106ae57600080fd5b9392505050565b818103818111156106ef577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220d6f9bda0205042eae610ab5eac40827f1fe89c4ff2dbe022122c1bf8d993a02164736f6c63430008110033a2646970667358221220e08209fdb09d54b67ebb5b139ccdcd8d1b585c927401e93220850b881a7dd41164736f6c63430008110033608060405234801561001057600080fd5b5061001a3361001f565b6100b4565b600061003361009060201b6105431760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b610789806100c36000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638e7cb6e11161005b5780638e7cb6e114610100578063949d225d1461012a578063cccf7a8e1461013b578063f2fde38b1461015e57600080fd5b80631003e2d21461008d578063410d59cc146100a25780634cc82215146100c05780638da5cb5b146100d3575b600080fd5b6100a061009b36600461061b565b610171565b005b6100aa610233565b6040516100b79190610634565b60405180910390f35b6100a06100ce36600461061b565b61028b565b6100db6103ef565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b7565b61011361010e36600461061b565b610434565b6040805192151583526020830191909152016100b7565b6000546040519081526020016100b7565b61014e61014936600461061b565b610467565b60405190151581526020016100b7565b6100a061016c366004610678565b6104ca565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101e1576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101ea81610467565b61023057600080548282526001602081905260408320829055810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563018190555b50565b6060600080548060200260200160405190810160405280929190818152602001828054801561028157602002820191906000526020600020905b81548152602001906001019080831161026d575b5050505050905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146102fb576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030481610467565b156102305760008054610319906001906106b5565b81548110610329576103296106f5565b9060005260206000200154600060016000848152602001908152602001600020548154811061035a5761035a6106f5565b60009182526020808320909101929092558281526001918290526040812054815490929190819084908110610391576103916106f5565b9060005260206000200154815260200190815260200160002081905550600160008281526020019081526020016000206000905560008054806103d6576103d6610724565b6001900381819060005260206000200160009055905550565b600061042f7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b60008061044083610467565b61044f57506000928392509050565b50506000908152600160208190526040909120549091565b60008054810361047957506000919050565b60008281526001602052604081205490036104b55781600080815481106104a2576104a26106f5565b9060005260206000200154149050919050565b50600090815260016020526040902054151590565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461053a576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61023081610567565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610230928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60006020828403121561062d57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b8181101561066c57835183529284019291840191600101610650565b50909695505050505050565b60006020828403121561068a57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146106ae57600080fd5b9392505050565b818103818111156106ef577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220d6f9bda0205042eae610ab5eac40827f1fe89c4ff2dbe022122c1bf8d993a02164736f6c63430008110033";

type IndexerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IndexerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Indexer__factory extends ContractFactory {
  constructor(...args: IndexerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Indexer";
  }

  deploy(
    _components: string[],
    _trackValueForComponent: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Indexer> {
    return super.deploy(
      _components,
      _trackValueForComponent,
      overrides || {}
    ) as Promise<Indexer>;
  }
  getDeployTransaction(
    _components: string[],
    _trackValueForComponent: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _components,
      _trackValueForComponent,
      overrides || {}
    );
  }
  attach(address: string): Indexer {
    return super.attach(address) as Indexer;
  }
  connect(signer: Signer): Indexer__factory {
    return super.connect(signer) as Indexer__factory;
  }
  static readonly contractName: "Indexer";
  public readonly contractName: "Indexer";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IndexerInterface {
    return new utils.Interface(_abi) as IndexerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Indexer {
    return new Contract(address, _abi, signerOrProvider) as Indexer;
  }
}