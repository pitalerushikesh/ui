export function setupWeb3({ customProvider, reloadOnAccountsChange, enforceReadOnly, enforceReload, infura }: {
    customProvider: any;
    reloadOnAccountsChange?: boolean | undefined;
    enforceReadOnly?: boolean | undefined;
    enforceReload?: boolean | undefined;
    infura?: boolean | undefined;
}): Promise<{
    provider: any;
    signer: any;
} | undefined>;
export function getWeb3(): Promise<any>;
export function getWeb3Read(): Promise<any>;
export function isReadOnly(): boolean;
export function getNetworkProviderUrl(id: any): "https://mainnet.infura.io/v3/90f210707d3c450f847659dc9a3436ea" | "https://ropsten.infura.io/v3/90f210707d3c450f847659dc9a3436ea" | "https://rinkeby.infura.io/v3/90f210707d3c450f847659dc9a3436ea" | "https://goerli.infura.io/v3/90f210707d3c450f847659dc9a3436ea" | "https://rpc.xinfin.yodaplus.net" | "https://rpc-apothem.xinfin.yodaplus.net" | "http://127.0.0.1:8545";
export function getProvider(): Promise<any>;
export function getSigner(): Promise<any>;
export function getAccount(): Promise<any>;
export function getAccounts(): Promise<any>;
export function getNetworkId(): Promise<any>;
export function getNetwork(): Promise<any>;
export function getBlock(number?: string): Promise<{
    number: any;
    timestamp: any;
}>;
//# sourceMappingURL=web3.d.ts.map