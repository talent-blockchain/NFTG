import { useCallback } from 'react'

<<<<<<< HEAD
import useSushi from './useSushi'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../sushi/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const sushi = useSushi()
=======
import useNFTG from './useNFTG'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../nftg/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const NFTG = useNFTG()
>>>>>>> master

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
<<<<<<< HEAD
        getMasterChefContract(sushi),
=======
        getMasterChefContract(NFTG),
>>>>>>> master
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
<<<<<<< HEAD
    [account, pid, sushi],
=======
    [account, pid, NFTG],
>>>>>>> master
  )

  return { onStake: handleStake }
}

export default useStake
