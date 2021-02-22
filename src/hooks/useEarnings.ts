import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

<<<<<<< HEAD
import { getEarned, getMasterChefContract } from '../sushi/utils'
import useSushi from './useSushi'
=======
import { getEarned, getMasterChefContract } from '../nftg/utils'
import useNFTG from './useNFTG'
>>>>>>> master
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
<<<<<<< HEAD
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi)
=======
  const NFTG = useNFTG()
  const masterChefContract = getMasterChefContract(NFTG)
>>>>>>> master
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
<<<<<<< HEAD
  }, [account, masterChefContract, sushi])

  useEffect(() => {
    if (account && masterChefContract && sushi) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, sushi])
=======
  }, [account, masterChefContract, NFTG])

  useEffect(() => {
    if (account && masterChefContract && NFTG) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, NFTG])
>>>>>>> master

  return balance
}

export default useEarnings
