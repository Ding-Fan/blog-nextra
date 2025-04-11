interface Window {
  ethereum: any
}

interface IBasicModal {
  isOpen: boolean
  setIsOpen?: (isOpen: boolean) => void
  confirmCallback: any
  closeCallback: any
}

interface IInfo {
  speed: string
  blockHeight: BigNumber
  // totalTxn: BigNumber
  // totalTxnDelta: BigNumber
  blockWeight: BigNumber
  // cumulativeWeight: BigNumber
  // cumulativeWeightDelta: BigNumber
  blockHeightDelta: BigNumber
  proofTarget: BigNumber
  proofTargetDelta: BigNumber
  coinbaseTarget: BigNumber
  coinbaseTargetDelta: BigNumber
  credit: {
    minedCredit: BigNumber
    totalCredit: BigNumber
  }
  creditPercent: number
}

type TheSelectProps = {
  value?: string | number
  onChange: (data?: any) => any
  dataList: any[]
  theKey?: string
  loopKey?: (data?: any) => string
  className?: string
  labelElement?: (selected: any) => ReactNode
  itemElement?: (item: any, isSelected: boolean) => JSX.Element
  actionElement?: ReactNode
  placeholder?: ReactNode
  disabled?: boolean
}

interface ICalculateResult {
  averageSolutionTime: string
  averageDailyReward: string
  cdf: {
    lowerTime: string
    upperTime: string
  }
}

type ITransaction = {
  // transactionHash: Address // transaction_id
  // timestamp: number // timestamp
  // blockReward: string // value_balance
  // coinbase: boolean // is_canonical
  // innerCircuitID: string // inner_circuit_id
  // ledgerRoot: string // previous_ledger_root
  // transitionID: string // transition_id
  // valueBalance: string // value_balance
  // proof: string // proof

  height: number
  blockId: number
  timestamp: number
  totalFee: number
  type: string
  data: {
    transactionId: Address
    globalStateRoot: string
    transactionType: string
    inclusionProof: string
    transitionId: Address
    programId: string
    functionName: string
  }
  functionCallInput: IFunctionCallInput[]
  functionCallOutput: IFunctionCallOutput[]
}

interface IFunctionCallInput {
  type: string
  serialNumber: string
  transitionId: number
  tag: string
  data: {
    ciphertext?: string
    ciphertextHash?: string
  }
}
interface IFunctionCallOutput {
  type: string
  transitionId: number
  data: {
    checksum: string
    commitment: string
    recordCiphertext: string
  }
}

type ITransactionV = ITransaction & {
  transactionId: Address
  transactionIdV: string // transaction_id shortened
  time: string
}

type IBlock = {
  height: number
  epoch: number
  epochBase: number
  epochNum: number
  timestamp: number // timestamp
  timestampMS?: string
  proofTarget: number
  coinbaseTarget: number
  coinbaseReward: number
  coinbaseSolutions: number

  // blockHeight: string // height
  // difficulty: number // difficulty_target
  // miner: Address // owner
  // previousBlock: string // nonce
  // previousStateRoot: string // previous_ledger_root
  // blockID: string
}

interface IBlockDetail extends IBlock {
  hash: Address // block_hash
  transactionId: Address // transaction_id
  network: string // 3
  coinbase: {
    puzzle: any
    solutions: ISolution[]
    solutionsTotal: number
    solutionsCount: number
  }
}

type IBlockV = IBlock & {
  time: string
}

type ILeaderBoard = {
  rank: number
  address: Address
  totalIncentiveReward: string
  totalMainnetReward: string
  estimatedSpeed: string
}

interface ILeaderBoardDetail extends ILeaderBoard {
  totalCoinbaseReward: string
  totalSolutionCount: string
  totalTargetFound: string
  estimatedSpeed: string
  hash: Address // block_hash
  transactions: Address // transaction_id
  network: string // 3
  // coinbase: {
  //   puzzle: any
  //   solutions: ISolution[]
  //   solutionsTotal: number
  // }
  data: IAcceptedSolution[]
}

type ILeaderBoardV = ILeaderBoard & {
  rankV: number // rank add one
  // time: string
}

interface ISolution {
  address: Address
  nonce: number
  commitment: Address
  target: string
  reward: string
}

interface ISolutionV extends ISolution {}

interface IAcceptedSolution {
  height: number
  epoch: number
  epochBase: number
  epochNum: number
  timestamp: number // timestamp
  nonce: number
  // address: Address
  // commitment: Address
  target: string
  targetSum: string
  reward: string
}

interface IAcceptedSolutionV extends IAcceptedSolution {}

type InputProps = {
  value: string | number
  onUserInput: (input: string) => void
  placeholder?: string
  className?: string
  type?: 'text' | 'number'
  onBlur?: () => void
  enforcer?: any
}

interface IProgram {
  programId: string
  transactionId: string
  block: number
  timestamp: string
  fee: number
  calls: number
}

interface IProgramV extends IProgram {
  timestamp: number
}

interface IProgramDetail {}

interface Link {
  url: string;
  note?: string;
  image?: any;
  tags?: string[];
  weight?: number;
}
