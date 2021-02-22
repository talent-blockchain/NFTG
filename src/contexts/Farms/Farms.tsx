import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
<<<<<<< HEAD
import useSushi from '../../hooks/useSushi'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../sushi/utils'
import { getFarms } from '../../sushi/utils'
=======
import useNFTG from '../../hooks/useNFTG'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../nftg/utils'
import { getFarms } from '../../nftg/utils'
>>>>>>> master

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

<<<<<<< HEAD
  const sushi = useSushi()
  const { account } = useWallet()

  const farms = getFarms(sushi)
=======
  const NFTG = useNFTG()
  const { account } = useWallet()

  const farms = getFarms(NFTG)
>>>>>>> master

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
