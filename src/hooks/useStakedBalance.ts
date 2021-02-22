import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

<<<<<<< HEAD
import { getStaked, getMasterChefContract } from '../sushi/utils'
import useSushi from './useSushi'
=======
import { getStaked, getMasterChefContract } from '../nftg/utils'
import useNFTG from './useNFTG'
>>>>>>> master
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
<<<<<<< HEAD
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi)
=======
  const NFTG = useNFTG()
  const masterChefContract = getMasterChefContract(NFTG)
>>>>>>> master
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
<<<<<<< HEAD
  }, [account, pid, sushi])

  useEffect(() => {
    if (account && sushi) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, sushi])
=======
  }, [account, pid, NFTG])

  useEffect(() => {
    if (account && NFTG) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, NFTG])
>>>>>>> master

  return balance
}

export default useStakedBalance
