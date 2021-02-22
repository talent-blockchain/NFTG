import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'

import {
  getMasterChefContract,
  getWethContract,
  getFarms,
  getTotalLPWethValue,
<<<<<<< HEAD
} from '../sushi/utils'
import useSushi from './useSushi'
=======
} from '../nftg/utils'
import useNFTG from './useNFTG'
>>>>>>> master
import useBlock from './useBlock'

export interface StakedValue {
  tokenAmount: BigNumber
  wethAmount: BigNumber
  totalWethValue: BigNumber
  tokenPriceInWeth: BigNumber
  poolWeight: BigNumber
}

const useAllStakedValue = () => {
  const [balances, setBalance] = useState([] as Array<StakedValue>)
  const { account }: { account: string; ethereum: provider } = useWallet()
<<<<<<< HEAD
  const sushi = useSushi()
  const farms = getFarms(sushi)
  const masterChefContract = getMasterChefContract(sushi)
  const wethContact = getWethContract(sushi)
=======
  const NFTG = useNFTG()
  const farms = getFarms(NFTG)
  const masterChefContract = getMasterChefContract(NFTG)
  const wethContact = getWethContract(NFTG)
>>>>>>> master
  const block = useBlock()

  const fetchAllStakedValue = useCallback(async () => {
    const balances: Array<StakedValue> = await Promise.all(
      farms.map(
        ({
          pid,
          lpContract,
          tokenContract,
        }: {
          pid: number
          lpContract: Contract
          tokenContract: Contract
        }) =>
          getTotalLPWethValue(
            masterChefContract,
            wethContact,
            lpContract,
            tokenContract,
            pid,
          ),
      ),
    )

    setBalance(balances)
<<<<<<< HEAD
  }, [account, masterChefContract, sushi])

  useEffect(() => {
    if (account && masterChefContract && sushi) {
      fetchAllStakedValue()
    }
  }, [account, block, masterChefContract, setBalance, sushi])
=======
  }, [account, masterChefContract, NFTG])

  useEffect(() => {
    if (account && masterChefContract && NFTG) {
      fetchAllStakedValue()
    }
  }, [account, block, masterChefContract, setBalance, NFTG])
>>>>>>> master

  return balances
}

export default useAllStakedValue
