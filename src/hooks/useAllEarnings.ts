import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

<<<<<<< HEAD
import { getEarned, getMasterChefContract, getFarms } from '../sushi/utils'
import useSushi from './useSushi'
=======
import { getEarned, getMasterChefContract, getFarms } from '../nftg/utils'
import useNFTG from './useNFTG'
>>>>>>> master
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
<<<<<<< HEAD
  const sushi = useSushi()
  const farms = getFarms(sushi)
  const masterChefContract = getMasterChefContract(sushi)
=======
  const NFTG = useNFTG()
  const farms = getFarms(NFTG)
  const masterChefContract = getMasterChefContract(NFTG)
>>>>>>> master
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
<<<<<<< HEAD
  }, [account, masterChefContract, sushi])

  useEffect(() => {
    if (account && masterChefContract && sushi) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, sushi])
=======
  }, [account, masterChefContract, NFTG])

  useEffect(() => {
    if (account && masterChefContract && NFTG) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, NFTG])
>>>>>>> master

  return balances
}

export default useAllEarnings
