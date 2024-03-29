/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface IndexerInterface extends utils.Interface {
  contractName: "Indexer";
  functions: {
    "getEntities()": FunctionFragment;
    "getEntitiesWithValue(bytes)": FunctionFragment;
    "has(uint256)": FunctionFragment;
    "remove(uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "update(uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getEntities",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEntitiesWithValue",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "has", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "remove",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "update",
    values: [BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getEntities",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEntitiesWithValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "has", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;

  events: {};
}

export interface Indexer extends BaseContract {
  contractName: "Indexer";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IndexerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getEntities(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getEntitiesWithValue(
      value: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    has(entity: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    remove(
      entity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    update(
      entity: BigNumberish,
      value: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getEntities(overrides?: CallOverrides): Promise<BigNumber[]>;

  getEntitiesWithValue(
    value: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  has(entity: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  remove(
    entity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  update(
    entity: BigNumberish,
    value: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getEntities(overrides?: CallOverrides): Promise<BigNumber[]>;

    getEntitiesWithValue(
      value: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    has(entity: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    remove(entity: BigNumberish, overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    update(
      entity: BigNumberish,
      value: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getEntities(overrides?: CallOverrides): Promise<BigNumber>;

    getEntitiesWithValue(
      value: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    has(entity: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    remove(
      entity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    update(
      entity: BigNumberish,
      value: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getEntities(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEntitiesWithValue(
      value: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    has(
      entity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    remove(
      entity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    update(
      entity: BigNumberish,
      value: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
