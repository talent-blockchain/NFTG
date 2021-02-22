import { useCallback } from 'react'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'
<<<<<<< HEAD
import { redeem } from '../sushi/utils'
=======
import { redeem } from '../nftg/utils'
>>>>>>> master

const useRedeem = (masterChefContract: Contract) => {
  const { account } = useWallet()

  const handleRedeem = useCallback(async () => {
    const txHash = await redeem(masterChefContract, account)
    console.log(txHash)
    return txHash
  }, [account, masterChefContract])

  return { onRedeem: handleRedeem }
}

export default useRedeem
