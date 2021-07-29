import React from 'react'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'

export const injectedConnector = new InjectedConnector({
    supportedChainIds: [
        1, // Mainet
        3, // Ropsten
        4, // Rinkeby
        5, // Goerli
        42, // Kovan
    ],
})

export function getLibrary(provider: any): Web3Provider {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
}

export const Wallet = () => {
    const { active, chainId, account, connector, activate, error } = useWeb3React()
    console.log(chainId, account);

    const onClick = async () => {
        connector && activate(connector, undefined, true)
    }

    return (
        <div>
            <div>ChainId: {chainId}</div>
            <div>Account: {account}</div>
            {active ? (
                <span role='img'>✅ </span>
            ) : (
                <button type="button" onClick={onClick}>
                    Connect
                </button>
            )}
        </div>
    )
}
