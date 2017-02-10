/* This is an autogenerated file. DO NOT EDIT MANUALLY */

exports.ControlledAbi = [{"constant":false,"inputs":[{"name":"_newController","type":"address"}],"name":"changeController","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"controller","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"}];
exports.ControlledByteCode = "0x6060604052341561000c57fe5b5b60008054600160a060020a03191633600160a060020a03161790555b5b60ef806100386000396000f300606060405263ffffffff60e060020a6000350416633cebb8238114602a578063f77c4791146045575bfe5b3415603157fe5b6043600160a060020a0360043516606e565b005b3415604c57fe5b605260b4565b60408051600160a060020a039092168252519081900360200190f35b60005433600160a060020a039081169116146087576000565b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b600054600160a060020a0316815600a165627a7a7230582095e4f7bbdc707904edc68ca39aebb7b73926bb5f77ccef29ddab98fe2d64bafb0029";
exports.MiniMeTokenAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"creationBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newController","type":"address"}],"name":"changeController","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_blockNumber","type":"uint256"}],"name":"balanceOfAt","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_cloneTokenName","type":"string"},{"name":"_cloneDecimalUnits","type":"uint8"},{"name":"_cloneTokenSymbol","type":"string"},{"name":"_snapshotBlock","type":"uint256"},{"name":"_transfersEnabled","type":"bool"}],"name":"createCloneToken","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"parentToken","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_amount","type":"uint256"}],"name":"generateTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_blockNumber","type":"uint256"}],"name":"totalSupplyAt","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"transfersEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"parentSnapShotBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_amount","type":"uint256"}],"name":"destroyTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenFactory","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_transfersEnabled","type":"bool"}],"name":"enableTransfers","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"controller","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"_tokenFactory","type":"address"},{"name":"_parentToken","type":"address"},{"name":"_parentSnapShotBlock","type":"uint256"},{"name":"_tokenName","type":"string"},{"name":"_decimalUnits","type":"uint8"},{"name":"_tokenSymbol","type":"string"},{"name":"_transfersEnabled","type":"bool"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_cloneToken","type":"address"},{"indexed":false,"name":"_snapshotBlock","type":"uint256"}],"name":"NewCloneToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Approval","type":"event"}];
exports.MiniMeTokenByteCode = "0x60a0604052600760608190527f4d4d545f302e3100000000000000000000000000000000000000000000000000608090815262000040916004919062000133565b5034156200004a57fe5b60405162001b8a38038062001b8a83398101604090815281516020830151918301516060840151608085015160a086015160c0870151949693949284019391929101905b5b60008054600160a060020a03191633600160a060020a03161790555b600b805461010060a860020a031916610100600160a060020a038a16021790558351620000e090600190602087019062000133565b506002805460ff191660ff851617905581516200010590600390602085019062000133565b5060058054600160a060020a031916600160a060020a038816179055436007555b50505050505050620001dd565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200017657805160ff1916838001178555620001a6565b82800160010185558215620001a6579182015b82811115620001a657825182559160200191906001019062000189565b5b50620001b5929150620001b9565b5090565b620001da91905b80821115620001b55760008155600101620001c0565b5090565b90565b61199d80620001ed6000396000f300606060405236156101225763ffffffff60e060020a60003504166306fdde0381146101df578063095ea7b31461026f57806317634514146102a257806318160ddd146102c457806323b872dd146102e6578063313ce5671461031f5780633cebb823146103455780634ee2cd7e1461036357806354fd4d50146103945780636638c0871461042457806370a08231146104e457806380a5400114610512578063827f32c01461053e57806395d89b4114610571578063981b24d014610601578063a9059cbb14610626578063bef97c8714610659578063c5bcc4f11461067d578063cae9ca511461069f578063d3ce77fe14610716578063dd62ed3e14610749578063e77772fe1461077d578063f41e60c5146107a9578063f77c4791146107c0575b6101dd5b60005461013b90600160a060020a03166107ec565b156101d557600080546040805160209081019390935280517ff48c3054000000000000000000000000000000000000000000000000000000008152600160a060020a0333811660048301529151919092169263f48c30549234926024808301939282900301818588803b15156101ad57fe5b61235a5a03f115156101bb57fe5b505060405151151591506101d0905057610000565b6101da565b610000565b5b565b005b34156101e757fe5b6101ef610819565b604080516020808252835181830152835191928392908301918501908083838215610235575b80518252602083111561023557601f199092019160209182019101610215565b505050905090810190601f1680156102615780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561027757fe5b61028e600160a060020a03600435166024356108a6565b604080519115158252519081900360200190f35b34156102aa57fe5b6102b2610a14565b60408051918252519081900360200190f35b34156102cc57fe5b6102b2610a1a565b60408051918252519081900360200190f35b34156102ee57fe5b61028e600160a060020a0360043581169060243516604435610a2b565b604080519115158252519081900360200190f35b341561032757fe5b61032f610acd565b6040805160ff9092168252519081900360200190f35b341561034d57fe5b6101dd600160a060020a0360043516610ad6565b005b341561036b57fe5b6102b2600160a060020a0360043516602435610b1e565b60408051918252519081900360200190f35b341561039c57fe5b6101ef610c7b565b604080516020808252835181830152835191928392908301918501908083838215610235575b80518252602083111561023557601f199092019160209182019101610215565b505050905090810190601f1680156102615780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561042c57fe5b6104c8600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284375050604080516020601f818a01358b0180359182018390048302840183018552818452989a60ff8b35169a909994019750919550918201935091508190840183828082843750949650508435946020013515159350610d0992505050565b60408051600160a060020a039092168252519081900360200190f35b34156104ec57fe5b6102b2600160a060020a0360043516610f69565b60408051918252519081900360200190f35b341561051a57fe5b6104c8610f7d565b60408051600160a060020a039092168252519081900360200190f35b341561054657fe5b61028e600160a060020a0360043516602435610f8c565b604080519115158252519081900360200190f35b341561057957fe5b6101ef611045565b604080516020808252835181830152835191928392908301918501908083838215610235575b80518252602083111561023557601f199092019160209182019101610215565b505050905090810190601f1680156102615780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561060957fe5b6102b26004356110d3565b60408051918252519081900360200190f35b341561062e57fe5b61028e600160a060020a03600435166024356111e3565b604080519115158252519081900360200190f35b341561066157fe5b61028e61120b565b604080519115158252519081900360200190f35b341561068557fe5b6102b2611214565b60408051918252519081900360200190f35b34156106a757fe5b604080516020600460443581810135601f810184900484028501840190955284845261028e948235600160a060020a031694602480359560649492939190920191819084018382808284375094965061121a95505050505050565b604080519115158252519081900360200190f35b341561071e57fe5b61028e600160a060020a03600435166024356113cb565b604080519115158252519081900360200190f35b341561075157fe5b6102b2600160a060020a036004358116906024351661149d565b60408051918252519081900360200190f35b341561078557fe5b6104c86114ca565b60408051600160a060020a039092168252519081900360200190f35b34156107b157fe5b6101dd60043515156114de565b005b34156107c857fe5b6104c861150c565b60408051600160a060020a039092168252519081900360200190f35b600080600160a060020a03831615156108085760009150610813565b823b90506000811191505b50919050565b60018054604080516020600284861615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561089e5780601f106108735761010080835404028352916020019161089e565b820191906000526020600020905b81548152906001019060200180831161088157829003601f168201915b505050505081565b600b5460009060ff1615156108ba57610000565b81158015906108ed5750600160a060020a0333811660009081526009602090815260408083209387168352929052205415155b156108f757610000565b60005461090c90600160a060020a03166107ec565b156109ac576000805460408051602090810184905281517fda682aeb000000000000000000000000000000000000000000000000000000008152600160a060020a0333811660048301528881166024830152604482018890529251929093169363da682aeb9360648082019492918390030190829087803b151561098c57fe5b60325a03f1151561099957fe5b505060405151151590506109ac57610000565b5b600160a060020a03338116600081815260096020908152604080832094881680845294825291829020869055815186815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a35060015b92915050565b60075481565b6000610a25436110d3565b90505b90565b6000805433600160a060020a03908116911614610ab857600b5460ff161515610a5357610000565b600160a060020a038085166000908152600960209081526040808320339094168352929052205482901015610a8a57506000610ac6565b600160a060020a03808516600090815260096020908152604080832033909416835292905220805483900390555b610ac384848461151b565b90505b9392505050565b60025460ff1681565b60005433600160a060020a03908116911614610af157610000565b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b6000600754821015610b3257506000610a0e565b600160a060020a0383166000908152600860205260409020541580610b925750600160a060020a038316600090815260086020526040812080548492908110610b7757fe5b906000526020600020900160005b50546001608060020a0316115b15610c4a57600554600160a060020a031615610c3d57600554600654604080516000602091820181905282517f4ee2cd7e000000000000000000000000000000000000000000000000000000008152600160a060020a038981166004830152602482019590955292519390941693634ee2cd7e936044808501949192918390030190829087803b1515610c2157fe5b60325a03f11515610c2e57fe5b5050604051519150610a0e9050565b506000610a0e565b610a0e565b600160a060020a0383166000908152600860205260409020610c6c90836116e1565b9050610a0e565b5b5b92915050565b6004805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561089e5780601f106108735761010080835404028352916020019161089e565b820191906000526020600020905b81548152906001019060200180831161088157829003601f168201915b505050505081565b6000600043841115610d19574393505b600b60019054906101000a9004600160a060020a0316600160a060020a0316635b7b72c130868a8a8a896000604051602001526040518763ffffffff1660e060020a0281526004018087600160a060020a0316600160a060020a03168152602001868152602001806020018560ff1660ff1681526020018060200184151515158152602001838103835287818151815260200191508051906020019080838360008314610de1575b805182526020831115610de157601f199092019160209182019101610dc1565b505050905090810190601f168015610e0d5780820380516001836020036101000a031916815260200191505b5083810382528551815285516020918201918701908083838215610e4c575b805182526020831115610e4c57601f199092019160209182019101610e2c565b505050905090810190601f168015610e785780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b1515610e9957fe5b60325a03f11515610ea657fe5b50506040805180517f3cebb823000000000000000000000000000000000000000000000000000000008252600160a060020a03338116600484015292519094509184169250633cebb82391602480830192600092919082900301818387803b1515610f0d57fe5b60325a03f11515610f1a57fe5b5050604080518681529051600160a060020a03841692507f086c875b377f900b07ce03575813022f05dd10ed7640b5282cf6d3c3fc352ade9181900360200190a28091505b5095945050505050565b6000610f758243610b1e565b90505b919050565b600554600160a060020a031681565b600080548190819033600160a060020a03908116911614610fac57610000565b610fb7600a436116e1565b9150610fc6600a85840161183d565b610fcf85610f69565b600160a060020a0386166000908152600860205260409020909150610ff69085830161183d565b604080518581529051600160a060020a038716916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3600192505b5b505092915050565b6003805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561089e5780601f106108735761010080835404028352916020019161089e565b820191906000526020600020905b81548152906001019060200180831161088157829003601f168201915b505050505081565b60006007548210156110e757506000610f78565b600a54158061111d575081600a600081548110151561110257fe5b906000526020600020900160005b50546001608060020a0316115b156111ca57600554600160a060020a0316156111bd57600554600654604080516000602091820181905282517f981b24d000000000000000000000000000000000000000000000000000000000815260048101949094529151600160a060020a039094169363981b24d093602480820194918390030190829087803b15156111a157fe5b60325a03f115156111ae57fe5b5050604051519150610f789050565b506000610f78565b610f78565b6111d5600a836116e1565b9050610f78565b5b5b919050565b600b5460009060ff1615156111f757610000565b61120233848461151b565b90505b92915050565b600b5460ff1681565b60065481565b600160a060020a03338116600081815260096020908152604080832094881680845294825280832087905580518781529051929493927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a383600160a060020a031660405180807f72656365697665417070726f76616c28616464726573732c75696e743235362c81526020017f616464726573732c627974657329000000000000000000000000000000000000815250602e019050604051809103902060e060020a9004338530866040518563ffffffff1660e060020a0281526004018085600160a060020a0316600160a060020a0316815260200184815260200183600160a060020a0316600160a060020a0316815260200182805190602001908083836000831461136c575b80518252602083111561136c57601f19909201916020918201910161134c565b505050905090810190601f1680156113985780820380516001836020036101000a031916815260200191505b509450505050506000604051808303816000876161da5a03f19250505015156113c057610000565b5060015b9392505050565b600080548190819033600160a060020a039081169116146113eb57610000565b6113f6600a436116e1565b91508382101561140557610000565b611412600a85840361183d565b61141b85610f69565b90508381101561142a57610000565b600160a060020a038516600090815260086020526040902061144e9085830361183d565b604080518581529051600091600160a060020a038816917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3600192505b5b505092915050565b600160a060020a038083166000908152600960209081526040808320938516835292905220545b92915050565b600b546101009004600160a060020a031681565b60005433600160a060020a039081169116146114f957610000565b600b805460ff19168215151790555b5b50565b600054600160a060020a031681565b6000808083151561152f57600192506116d8565b600160a060020a0385161580611556575030600160a060020a031685600160a060020a0316145b1561156057610000565b61156a8643610b1e565b91508382101561157d57600092506116d8565b60005461159290600160a060020a03166107ec565b15611632576000805460408051602090810184905281517f4a393149000000000000000000000000000000000000000000000000000000008152600160a060020a038b811660048301528a81166024830152604482018a905292519290931693634a3931499360648082019492918390030190829087803b151561161257fe5b60325a03f1151561161f57fe5b5050604051511515905061163257610000565b5b600160a060020a03861660009081526008602052604090206116579085840361183d565b6116618543610b1e565b600160a060020a03861660009081526008602052604090209091506116889085830161183d565b84600160a060020a031686600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a3600192505b50509392505050565b60006000600060008580549050600014156116ff5760009350611834565b85548690600019810190811061171157fe5b906000526020600020900160005b50546001608060020a031685106117695785548690600019810190811061174257fe5b906000526020600020900160005b5054608060020a90046001608060020a03169350611834565b85600081548110151561177857fe5b906000526020600020900160005b50546001608060020a03168510156117a15760009350611834565b8554600093506000190191505b828211156118035760026001838501015b0490508486828154811015156117d157fe5b906000526020600020900160005b50546001608060020a0316116117f7578092506117fe565b6001810391505b6117ae565b858381548110151561181157fe5b906000526020600020900160005b5054608060020a90046001608060020a031693505b50505092915050565b81546000908190158061187a5750835443908590600019810190811061185f57fe5b906000526020600020900160005b50546001608060020a0316105b156118e357835484906118908260018301611926565b8154811061189a57fe5b906000526020600020900160005b5080546001608060020a03858116608060020a024382166fffffffffffffffffffffffffffffffff199093169290921716178155915061191f565b8354849060001981019081106118f557fe5b906000526020600020900160005b5080546001608060020a03808616608060020a02911617815590505b5b50505050565b81548183558181151161194a5760008381526020902061194a918101908301611950565b5b505050565b610a2891905b8082111561196a5760008155600101611956565b5090565b905600a165627a7a72305820340689077a7e30109b03a9423dcd4ba243259f9efb4ff90e21b33e14001fd9320029";
exports.MiniMeTokenFactoryAbi = [{"constant":false,"inputs":[{"name":"_parentToken","type":"address"},{"name":"_snapshotBlock","type":"uint256"},{"name":"_tokenName","type":"string"},{"name":"_decimalUnits","type":"uint8"},{"name":"_tokenSymbol","type":"string"},{"name":"_transfersEnabled","type":"bool"}],"name":"createCloneToken","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"}];
exports.MiniMeTokenFactoryByteCode = "0x6060604052341561000c57fe5b5b611e6e8061001c6000396000f300606060405263ffffffff60e060020a6000350416635b7b72c18114610021575bfe5b341561002957fe5b604080516020600460443581810135601f81018490048402850184019095528484526100cd948235600160a060020a031694602480359560649492939190920191819084018382808284375050604080516020601f818a01358b0180359182018390048302840183018552818452989a60ff8b35169a9099940197509195509182019350915081908401838280828437509496505050509135151591506100e99050565b60408051600160a060020a039092168252519081900360200190f35b60006000308888888888886100fc6102a8565b600160a060020a03808916825287166020808301919091526040820187905260ff8516608083015282151560c083015260e0606083018181528751918401919091528651909160a0840191610100850191890190808383821561017a575b80518252602083111561017a57601f19909201916020918201910161015a565b505050905090810190601f1680156101a65780820380516001836020036101000a031916815260200191505b50838103825285518152855160209182019187019080838382156101e5575b8051825260208311156101e557601f1990920191602091820191016101c5565b505050905090810190601f1680156102115780820380516001836020036101000a031916815260200191505b509950505050505050505050604051809103906000f080151561023057fe5b905080600160a060020a0316633cebb823336040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050600060405180830381600087803b151561028957fe5b60325a03f1151561029657fe5b5050508091505b509695505050505050565b604051611b8a806102b983390190560060a0604052600760608190527f4d4d545f302e3100000000000000000000000000000000000000000000000000608090815262000040916004919062000133565b5034156200004a57fe5b60405162001b8a38038062001b8a83398101604090815281516020830151918301516060840151608085015160a086015160c0870151949693949284019391929101905b5b60008054600160a060020a03191633600160a060020a03161790555b600b805461010060a860020a031916610100600160a060020a038a16021790558351620000e090600190602087019062000133565b506002805460ff191660ff851617905581516200010590600390602085019062000133565b5060058054600160a060020a031916600160a060020a038816179055436007555b50505050505050620001dd565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200017657805160ff1916838001178555620001a6565b82800160010185558215620001a6579182015b82811115620001a657825182559160200191906001019062000189565b5b50620001b5929150620001b9565b5090565b620001da91905b80821115620001b55760008155600101620001c0565b5090565b90565b61199d80620001ed6000396000f300606060405236156101225763ffffffff60e060020a60003504166306fdde0381146101df578063095ea7b31461026f57806317634514146102a257806318160ddd146102c457806323b872dd146102e6578063313ce5671461031f5780633cebb823146103455780634ee2cd7e1461036357806354fd4d50146103945780636638c0871461042457806370a08231146104e457806380a5400114610512578063827f32c01461053e57806395d89b4114610571578063981b24d014610601578063a9059cbb14610626578063bef97c8714610659578063c5bcc4f11461067d578063cae9ca511461069f578063d3ce77fe14610716578063dd62ed3e14610749578063e77772fe1461077d578063f41e60c5146107a9578063f77c4791146107c0575b6101dd5b60005461013b90600160a060020a03166107ec565b156101d557600080546040805160209081019390935280517ff48c3054000000000000000000000000000000000000000000000000000000008152600160a060020a0333811660048301529151919092169263f48c30549234926024808301939282900301818588803b15156101ad57fe5b61235a5a03f115156101bb57fe5b505060405151151591506101d0905057610000565b6101da565b610000565b5b565b005b34156101e757fe5b6101ef610819565b604080516020808252835181830152835191928392908301918501908083838215610235575b80518252602083111561023557601f199092019160209182019101610215565b505050905090810190601f1680156102615780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561027757fe5b61028e600160a060020a03600435166024356108a6565b604080519115158252519081900360200190f35b34156102aa57fe5b6102b2610a14565b60408051918252519081900360200190f35b34156102cc57fe5b6102b2610a1a565b60408051918252519081900360200190f35b34156102ee57fe5b61028e600160a060020a0360043581169060243516604435610a2b565b604080519115158252519081900360200190f35b341561032757fe5b61032f610acd565b6040805160ff9092168252519081900360200190f35b341561034d57fe5b6101dd600160a060020a0360043516610ad6565b005b341561036b57fe5b6102b2600160a060020a0360043516602435610b1e565b60408051918252519081900360200190f35b341561039c57fe5b6101ef610c7b565b604080516020808252835181830152835191928392908301918501908083838215610235575b80518252602083111561023557601f199092019160209182019101610215565b505050905090810190601f1680156102615780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561042c57fe5b6104c8600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284375050604080516020601f818a01358b0180359182018390048302840183018552818452989a60ff8b35169a909994019750919550918201935091508190840183828082843750949650508435946020013515159350610d0992505050565b60408051600160a060020a039092168252519081900360200190f35b34156104ec57fe5b6102b2600160a060020a0360043516610f69565b60408051918252519081900360200190f35b341561051a57fe5b6104c8610f7d565b60408051600160a060020a039092168252519081900360200190f35b341561054657fe5b61028e600160a060020a0360043516602435610f8c565b604080519115158252519081900360200190f35b341561057957fe5b6101ef611045565b604080516020808252835181830152835191928392908301918501908083838215610235575b80518252602083111561023557601f199092019160209182019101610215565b505050905090810190601f1680156102615780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561060957fe5b6102b26004356110d3565b60408051918252519081900360200190f35b341561062e57fe5b61028e600160a060020a03600435166024356111e3565b604080519115158252519081900360200190f35b341561066157fe5b61028e61120b565b604080519115158252519081900360200190f35b341561068557fe5b6102b2611214565b60408051918252519081900360200190f35b34156106a757fe5b604080516020600460443581810135601f810184900484028501840190955284845261028e948235600160a060020a031694602480359560649492939190920191819084018382808284375094965061121a95505050505050565b604080519115158252519081900360200190f35b341561071e57fe5b61028e600160a060020a03600435166024356113cb565b604080519115158252519081900360200190f35b341561075157fe5b6102b2600160a060020a036004358116906024351661149d565b60408051918252519081900360200190f35b341561078557fe5b6104c86114ca565b60408051600160a060020a039092168252519081900360200190f35b34156107b157fe5b6101dd60043515156114de565b005b34156107c857fe5b6104c861150c565b60408051600160a060020a039092168252519081900360200190f35b600080600160a060020a03831615156108085760009150610813565b823b90506000811191505b50919050565b60018054604080516020600284861615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561089e5780601f106108735761010080835404028352916020019161089e565b820191906000526020600020905b81548152906001019060200180831161088157829003601f168201915b505050505081565b600b5460009060ff1615156108ba57610000565b81158015906108ed5750600160a060020a0333811660009081526009602090815260408083209387168352929052205415155b156108f757610000565b60005461090c90600160a060020a03166107ec565b156109ac576000805460408051602090810184905281517fda682aeb000000000000000000000000000000000000000000000000000000008152600160a060020a0333811660048301528881166024830152604482018890529251929093169363da682aeb9360648082019492918390030190829087803b151561098c57fe5b60325a03f1151561099957fe5b505060405151151590506109ac57610000565b5b600160a060020a03338116600081815260096020908152604080832094881680845294825291829020869055815186815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a35060015b92915050565b60075481565b6000610a25436110d3565b90505b90565b6000805433600160a060020a03908116911614610ab857600b5460ff161515610a5357610000565b600160a060020a038085166000908152600960209081526040808320339094168352929052205482901015610a8a57506000610ac6565b600160a060020a03808516600090815260096020908152604080832033909416835292905220805483900390555b610ac384848461151b565b90505b9392505050565b60025460ff1681565b60005433600160a060020a03908116911614610af157610000565b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b6000600754821015610b3257506000610a0e565b600160a060020a0383166000908152600860205260409020541580610b925750600160a060020a038316600090815260086020526040812080548492908110610b7757fe5b906000526020600020900160005b50546001608060020a0316115b15610c4a57600554600160a060020a031615610c3d57600554600654604080516000602091820181905282517f4ee2cd7e000000000000000000000000000000000000000000000000000000008152600160a060020a038981166004830152602482019590955292519390941693634ee2cd7e936044808501949192918390030190829087803b1515610c2157fe5b60325a03f11515610c2e57fe5b5050604051519150610a0e9050565b506000610a0e565b610a0e565b600160a060020a0383166000908152600860205260409020610c6c90836116e1565b9050610a0e565b5b5b92915050565b6004805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561089e5780601f106108735761010080835404028352916020019161089e565b820191906000526020600020905b81548152906001019060200180831161088157829003601f168201915b505050505081565b6000600043841115610d19574393505b600b60019054906101000a9004600160a060020a0316600160a060020a0316635b7b72c130868a8a8a896000604051602001526040518763ffffffff1660e060020a0281526004018087600160a060020a0316600160a060020a03168152602001868152602001806020018560ff1660ff1681526020018060200184151515158152602001838103835287818151815260200191508051906020019080838360008314610de1575b805182526020831115610de157601f199092019160209182019101610dc1565b505050905090810190601f168015610e0d5780820380516001836020036101000a031916815260200191505b5083810382528551815285516020918201918701908083838215610e4c575b805182526020831115610e4c57601f199092019160209182019101610e2c565b505050905090810190601f168015610e785780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b1515610e9957fe5b60325a03f11515610ea657fe5b50506040805180517f3cebb823000000000000000000000000000000000000000000000000000000008252600160a060020a03338116600484015292519094509184169250633cebb82391602480830192600092919082900301818387803b1515610f0d57fe5b60325a03f11515610f1a57fe5b5050604080518681529051600160a060020a03841692507f086c875b377f900b07ce03575813022f05dd10ed7640b5282cf6d3c3fc352ade9181900360200190a28091505b5095945050505050565b6000610f758243610b1e565b90505b919050565b600554600160a060020a031681565b600080548190819033600160a060020a03908116911614610fac57610000565b610fb7600a436116e1565b9150610fc6600a85840161183d565b610fcf85610f69565b600160a060020a0386166000908152600860205260409020909150610ff69085830161183d565b604080518581529051600160a060020a038716916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3600192505b5b505092915050565b6003805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561089e5780601f106108735761010080835404028352916020019161089e565b820191906000526020600020905b81548152906001019060200180831161088157829003601f168201915b505050505081565b60006007548210156110e757506000610f78565b600a54158061111d575081600a600081548110151561110257fe5b906000526020600020900160005b50546001608060020a0316115b156111ca57600554600160a060020a0316156111bd57600554600654604080516000602091820181905282517f981b24d000000000000000000000000000000000000000000000000000000000815260048101949094529151600160a060020a039094169363981b24d093602480820194918390030190829087803b15156111a157fe5b60325a03f115156111ae57fe5b5050604051519150610f789050565b506000610f78565b610f78565b6111d5600a836116e1565b9050610f78565b5b5b919050565b600b5460009060ff1615156111f757610000565b61120233848461151b565b90505b92915050565b600b5460ff1681565b60065481565b600160a060020a03338116600081815260096020908152604080832094881680845294825280832087905580518781529051929493927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a383600160a060020a031660405180807f72656365697665417070726f76616c28616464726573732c75696e743235362c81526020017f616464726573732c627974657329000000000000000000000000000000000000815250602e019050604051809103902060e060020a9004338530866040518563ffffffff1660e060020a0281526004018085600160a060020a0316600160a060020a0316815260200184815260200183600160a060020a0316600160a060020a0316815260200182805190602001908083836000831461136c575b80518252602083111561136c57601f19909201916020918201910161134c565b505050905090810190601f1680156113985780820380516001836020036101000a031916815260200191505b509450505050506000604051808303816000876161da5a03f19250505015156113c057610000565b5060015b9392505050565b600080548190819033600160a060020a039081169116146113eb57610000565b6113f6600a436116e1565b91508382101561140557610000565b611412600a85840361183d565b61141b85610f69565b90508381101561142a57610000565b600160a060020a038516600090815260086020526040902061144e9085830361183d565b604080518581529051600091600160a060020a038816917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3600192505b5b505092915050565b600160a060020a038083166000908152600960209081526040808320938516835292905220545b92915050565b600b546101009004600160a060020a031681565b60005433600160a060020a039081169116146114f957610000565b600b805460ff19168215151790555b5b50565b600054600160a060020a031681565b6000808083151561152f57600192506116d8565b600160a060020a0385161580611556575030600160a060020a031685600160a060020a0316145b1561156057610000565b61156a8643610b1e565b91508382101561157d57600092506116d8565b60005461159290600160a060020a03166107ec565b15611632576000805460408051602090810184905281517f4a393149000000000000000000000000000000000000000000000000000000008152600160a060020a038b811660048301528a81166024830152604482018a905292519290931693634a3931499360648082019492918390030190829087803b151561161257fe5b60325a03f1151561161f57fe5b5050604051511515905061163257610000565b5b600160a060020a03861660009081526008602052604090206116579085840361183d565b6116618543610b1e565b600160a060020a03861660009081526008602052604090209091506116889085830161183d565b84600160a060020a031686600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a3600192505b50509392505050565b60006000600060008580549050600014156116ff5760009350611834565b85548690600019810190811061171157fe5b906000526020600020900160005b50546001608060020a031685106117695785548690600019810190811061174257fe5b906000526020600020900160005b5054608060020a90046001608060020a03169350611834565b85600081548110151561177857fe5b906000526020600020900160005b50546001608060020a03168510156117a15760009350611834565b8554600093506000190191505b828211156118035760026001838501015b0490508486828154811015156117d157fe5b906000526020600020900160005b50546001608060020a0316116117f7578092506117fe565b6001810391505b6117ae565b858381548110151561181157fe5b906000526020600020900160005b5054608060020a90046001608060020a031693505b50505092915050565b81546000908190158061187a5750835443908590600019810190811061185f57fe5b906000526020600020900160005b50546001608060020a0316105b156118e357835484906118908260018301611926565b8154811061189a57fe5b906000526020600020900160005b5080546001608060020a03858116608060020a024382166fffffffffffffffffffffffffffffffff199093169290921716178155915061191f565b8354849060001981019081106118f557fe5b906000526020600020900160005b5080546001608060020a03808616608060020a02911617815590505b5b50505050565b81548183558181151161194a5760008381526020902061194a918101908301611950565b5b505050565b610a2891905b8082111561196a5760008155600101611956565b5090565b905600a165627a7a72305820340689077a7e30109b03a9423dcd4ba243259f9efb4ff90e21b33e14001fd9320029a165627a7a72305820b6a81ad685107ca93b8ecb86f8819d0a9e53f4c6cba85280ffa02616aab20a3a0029";
exports.TokenControllerAbi = [{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"onTransfer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"onApprove","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"proxyPayment","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"}];
exports.TokenControllerByteCode = "0x";
