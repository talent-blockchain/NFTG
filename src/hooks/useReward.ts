import { useCallback } from 'react'

<<<<<<< HEAD
import useSushi from './useSushi'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../sushi/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi)
=======
import useNFTG from './useNFTG'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../nftg/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const NFTG = useNFTG()
  const masterChefContract = getMasterChefContract(NFTG)
>>>>>>> master

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
<<<<<<< HEAD
  }, [account, pid, sushi])
=======
  }, [account, pid, NFTG])
>>>>>>> master

  return { onReward: handleReward }
}

export default useReward
