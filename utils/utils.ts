// import { BigNumberish } from 'ethers'
// import { Address } from 'wagmi'

// export const globalValue: { [key: string]: any } = {}

// export namespace Utils {
//   export const convertBTCToUSD = (btc: number | string) => {
//     const temp = Number(btc)

//     // default placeholder
//     if (isNaN(temp) || !globalValue.USDPerBTC) return '-'

//     return '$' + (globalValue.USDPerBTC * temp).toFixed(2)
//   }
//   export const convertETHToUSD = (eth: number | string) => {
//     const temp = Number(eth)

//     // default placeholder
//     if (isNaN(temp) || !globalValue.USDPerETH) return '-'

//     return '$' + (globalValue.USDPerETH * temp).toFixed(2)
//   }

//   // https://stackoverflow.com/a/43467144/6236633
//   export function isValidHttpUrl(string: string) {
//     let url

//     try {
//       url = new URL(string)
//     } catch (_) {
//       return false
//     }

//     return url.protocol === 'http:' || url.protocol === 'https:'
//   }

//   export const goTo = (url: string) => {
//     window.open(url, '_blank')
//   }

//   export const objectValueToBigNumberish = (theObject: any, except?: string[]) => {
//     let result: any = {}

//     Object.entries(theObject).forEach(([key, value]) => {
//       result[key] = BigNumberish.from(value)
//     })

//     return result
//   }

//   export const areYouOK = (data: any) => {
//     return data?.data && data.code === 200
//   }

//   export const shortenAddress = (address: Address) => {
//     let result = `${address.slice(0, 6)}...${address.slice(-4)}`
//     return result
//   }

//   export const getPathFromUrl = (url: string): string => {
//     return url.split(/[?#]/)[0]
//   }
// }

import { FixedNumber, type BigNumberish } from "ethers";
import _ from "lodash";
import dayjs from "dayjs-setup";
import { Address } from "viem";

export const globalValue: { [key: string]: any } = {
  digitsPadding: 0,
  fixedFormat: "fixed200x22",
  chainList: [],
  chainData: {},
  theChain: {},
  theToken: {},
  // get currentChain() {
  //   // if theChain is empty
  //   if (!this.theChain?.name) {
  //     // set the first one in chainList to currentChain(theChain)
  //     this.currentChain = this.chainList[0]
  //   }
  //   return this.theChain
  // },
  // set currentChain(value) {
  //   this.theChain = value
  // },
  get currentToken() {
    if (!this.theToken?.name) {
      this.currentToken = this.theChain.tokenList[0];
    }
    return this.theToken;
  },
  set currentToken(value) {
    this.theToken = value;
  },
};

export namespace Utils {
  export const convertBTCToUSD = (btc: number | string) => {
    const temp = Number(btc);

    // default placeholder
    if (isNaN(temp) || !globalValue.USDPerBTC) return "-";

    return "$" + (globalValue.USDPerBTC * temp).toFixed(2);
  };
  export const convertETHToUSD = (eth: number | string) => {
    const temp = Number(eth);

    // default placeholder
    if (isNaN(temp) || !globalValue.USDPerETH) return "-";

    return "$" + (globalValue.USDPerETH * temp).toFixed(2);
  };

  // https://stackoverflow.com/a/43467144/6236633
  export function isValidHttpUrl(string: string) {
    let url;

    try {
      url = new URL(string);
    } catch (error) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  }

  export const goTo = (url: string) => {
    window.open(url, "_blank");
  };

  // const camelCasedResponse = convertKeysToCamelCase(response)
  // console.log('camel case', camelCasedResponse)

  // The resulting object will have the following keys and values:
  // userName: 'john_doe', userEmail: 'john_doe@gmail.com', userAddress: { streetName: 'main st', zipCode: 12345 }

  export const objectValueToBigNumberish = (
    theObject: any,
    except?: string[]
  ): any => {
    let result = _(theObject)
      .mapValues((value) => {
        let theValue = value;

        if (_.isPlainObject(value)) {
          theValue = objectValueToBigNumberish(value);
        } else if (!_.isNaN(_.toNumber(value))) {
          // console.log('lodash to number', _.toNumber(value))

          theValue = BigInt(value);
        }

        return theValue;
      })
      .value();

    // Object.entries(theObject).forEach(([key, value]) => {
    //   result[key] = BigNumberish.from(value)
    // })

    return result;
  };

  export const timestampFormatter = (timestamp: number) => {
    let result = dayjs.unix(timestamp).format("YYYY-MM-DD HH:mm:ss");
    return result;
  };

  // https://github.com/Uniswap/interface/blob/c5b67ac60b6182e6780707c5c36c41166e95c6cd/src/components/NumericalInput/index.tsx#L43
  export const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`); // match escaped "." characters via in a non-capturing group

  // https://github.com/Uniswap/interface/blob/1a7b86d155ab026eddfe2e12cd7031304c0ebe8e/src/utils/index.ts#L45
  export function escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
  }

  export const envSwitch = (options: {
    production: any;
    development: any;
    test: any;
  }) => {
    let result = options.production;

    switch (process.env.NODE_ENV) {
      case "production":
        result = options.production;
        break;
      case "test":
        result = options.test;
        break;
      case "development":
        result = options.development;
        break;
      default:
        break;
    }

    return result;
  };

  export const fixedNumberFrom = (data: number | string | BigNumberish) => {
    let result = FixedNumber.fromValue(data || 0, globalValue.fixedFormat);
    // console.log('result', result)

    return result;
  };
  export const cutDigitsPadding = (
    data: number | string | BigNumberish,
    digits?: number
  ): FixedNumber => {
    return fixedNumberFrom(data).divUnsafe(
      fixedNumberFrom(
        Math.pow(10, digits && digits > 0 ? digits : globalValue.digitsPadding)
      )
    );
  };
  export const addDigitsPadding = (
    data: number | string | BigNumberish,
    digits?: number
  ): FixedNumber => {
    let result = fixedNumberFrom(data).mulUnsafe(
      fixedNumberFrom(
        Math.pow(10, digits && digits > 0 ? digits : globalValue.digitsPadding)
      )
    );
    // console.log('add result', result);
    return result;
  };
  export const toFixed = (data: string, precision: number) => {
    let result = "0";

    // // example 5.
    // if (data.endsWith('.')) {
    //   result = cutFloat(data)
    // } else {
    //   result = data
    // }

    // result = Number(result).toFixed(precision)

    let temp = Utils.cutFloat(
      fixedNumberFrom(data)
        .mulUnsafe(fixedNumberFrom(Math.pow(10, precision)))
        .toString()
    );
    // console.log('show temp', temp)
    result = fixedNumberFrom(temp)
      .divUnsafe(fixedNumberFrom(Math.pow(10, precision)))
      .toString();

    return result;
  };
  export const cutFloat = (data: string) => {
    return data.split(".")[0];
  };
  export const fixedToString = (data: FixedNumber): string => {
    return cutFloat(data.toString());
  };
  export const getArrayFromLocalStorage = (key: string = "") => {
    return JSON.parse(localStorage.getItem(key) || "[]") || [];
  };

  interface IBank {
    tag: string;
    isPrivate: boolean;
    encryptKey: string;
    details: string;
  }

  type BankWithId = IBank & { localId?: string; id: BigNumberish };
  type MaybeBank = BankWithId | null;

  export const formatBank = (data: MaybeBank): BankWithId => {
    let result: MaybeBank = {
      id: 0n,
      details: "",
      encryptKey: "",
      isPrivate: false,
      tag: "",
    };

    if (data) {
      result = { ...result, ...data };
    }

    if (result.hasOwnProperty("localId")) {
      delete result.localId;
    }

    return result;
  };

  // Assume this is the response object from your backend API
  // const response = {
  //   user_name: 'john_doe',
  //   user_email: 'john_doe@gmail.com',
  //   user_address: {
  //     street_name: 'main st',
  //     zip_code: 12345,
  //   },
  // }

  // Recursively convert the keys of the response object to camel case
  export const convertKeysToCamelCase = (obj: any): any => {
    let result = _(obj)
      .mapKeys((value, key: string) => _.camelCase(key))
      .mapValues((value) =>
        _.isPlainObject(value) ? convertKeysToCamelCase(value) : value
      )
      .value();

    return result;
  };

  export const areYouOK = (data: any) => {
    return data?.data && data.code === 200;
  };

  export const getPathFromUrl = (url: string): string => {
    return url.split(/[?#]/)[0];
  };

  export const objectValueToString = (
    theObject: any,
    except?: string[]
  ): any => {
    let result = _(theObject)
      .mapValues((value) => {
        let theValue = value;

        if (_.isPlainObject(value)) {
          theValue = objectValueToString(value);
        } else {
          theValue = _.toString(value);
        }

        return theValue;
      })
      .value();

    return result;
  };

  export const objectValueToFixedNumber = (
    theObject: any,
    except?: string[]
  ): any => {
    let result = _(theObject)
      .mapValues((value) => {
        let theValue = value;

        if (_.isPlainObject(value)) {
          theValue = objectValueToFixedNumber(value);
        } else if (!_.isNaN(_.toNumber(value))) {
          theValue = FixedNumber.fromValue(value);
        }

        return theValue;
      })
      .value();

    return result;
  };

  export const shortenAddress = (address: Address) => {
    let result = `${address.slice(0, 8)}...${address.slice(-8)}`;
    return result;
  };

  export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
}
