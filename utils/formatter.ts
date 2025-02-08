import _ from 'lodash'
import { Utils } from './utils'

export namespace Formatter {
  export const formatTransaction = (item: any): ITransaction | undefined => {
    let result

    if (item) {
      result = {
        ...Utils.convertKeysToCamelCase(item),
        height: _.toNumber(item.data?.block_height) || item.block_height,
        timestamp: _.toNumber(item.data?.timestamp || item.timestamp),
        totalFee: item.fee,
        functionCallInput: item.function_call_input?.map((inputItem: any) => {
          return {
            ...Utils.convertKeysToCamelCase(inputItem),
            serialNumber: inputItem.data.serial_number,
            tag: inputItem.data.tag,
          }
        }),
        functionCallOutput: item.function_call_output?.map(
          Utils.convertKeysToCamelCase
        ),
      } as ITransaction
    }

    return result
  }

  export const formatBlock = (item: any): IBlockDetail | undefined => {
    let result

    if (item) {
      result = {
        ...Utils.convertKeysToCamelCase(item),
        timestamp: _.toNumber(item.timestamp),
        timestampMS: `${item.timestamp}000`, // seconds to milliseconds, dayjs only take number timestamp
        hash: item.block_hash,
        transactions: item.transactions_id,
      } as IBlockDetail
    }

    return result
  }

  export const formatLeaderBoard = (
    item: any
  ): ILeaderBoardDetail | undefined => {
    let result

    if (item) {
      result = {
        ...Utils.convertKeysToCamelCase(item),
        address: item.info?.address || item.address,
        totalIncentiveReward: item.count?.reward_sum || item.total_incentive,
        totalMainnetReward: item.count?.mainnet_reward || item.mainnet_reward,
        totalCoinbaseReward: item.count?.total_coinbase_reward,
        totalTargetFound: item.count?.solution_sum,
        totalSolutionCount: item.count?.solution_count,
        estimatedSpeed: item.info?.speed || item.speed,
        data: item.data?.map((item: any) => {
          return {
            ...Utils.convertKeysToCamelCase(item),
            timestamp: _.toNumber(item.timestamp),
          }
        }),
      } as ILeaderBoardDetail
    }

    return result
  }

  export const formatProgram = (item: any): IProgramDetail | undefined => {
    let result

    if (item) {
      result = {
        ...Utils.convertKeysToCamelCase(item),
        timestamp: _.toNumber(item.timestamp),
        timestampMS: `${item.timestamp}000`, // seconds to milliseconds, dayjs only take number timestamp
        block: _.toNumber(item.height),
        // * change this
        programId: item.id,
      } as IProgramDetail
    }

    return result
  }

  export const formatCalculateResult = (item: any): ICalculateResult => {
    let result
    if (item) {
      result = Utils.convertKeysToCamelCase(item)
    }

    return result
  }
}
