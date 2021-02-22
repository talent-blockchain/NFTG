import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
<<<<<<< HEAD
import useSushi from './useSushi'
=======
import useNFTG from './useNFTG'
>>>>>>> master
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'

import { getAllowance } from '../utils/erc20'
<<<<<<< HEAD
import { getMasterChefContract } from '../sushi/utils'
=======
import { getMasterChefContract } from '../nftg/utils'
>>>>>>> master

const useAllowance = (lpContract: Contract) => {
  const [allowance, setAllowance] = useState(new BigNumber(0))
  const { account }: { account: string; ethereum: provider } = useWallet()
<<<<<<< HEAD
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi)
=======
  const NFTG = useNFTG()
  const masterChefContract = getMasterChefContract(NFTG)
>>>>>>> master

  const fetchAllowance = useCallback(async () => {
    const allowance = await getAllowance(
      lpContract,
      masterChefContract,
      account,
    )
    setAllowance(new BigNumber(allowance))
  }, [account, masterChefContract, lpContract])

  useEffect(() => {
    if (account && masterChefContract && lpContract) {
      fetchAllowance()
    }
    let refreshInterval = setInterval(fetchAllowance, 10000)
    return () => clearInterval(refreshInterval)
  }, [account, masterChefContract, lpContract])

  return allowance
}

export default useAllowance
