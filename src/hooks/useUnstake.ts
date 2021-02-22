import { useCallback } from 'react'

<<<<<<< HEAD
import useSushi from './useSushi'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../sushi/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi)
=======
import useNFTG from './useNFTG'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../nftg/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const NFTG = useNFTG()
  const masterChefContract = getMasterChefContract(NFTG)
>>>>>>> master

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
<<<<<<< HEAD
    [account, pid, sushi],
=======
    [account, pid, NFTG],
>>>>>>> master
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
