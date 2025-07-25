
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model higo
 * 
 */
export type higo = $Result.DefaultSelection<Prisma.$higoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Higos
 * const higos = await prisma.higo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Higos
   * const higos = await prisma.higo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.higo`: Exposes CRUD operations for the **higo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Higos
    * const higos = await prisma.higo.findMany()
    * ```
    */
  get higo(): Prisma.higoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    higo: 'higo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "higo"
      txIsolationLevel: never
    }
    model: {
      higo: {
        payload: Prisma.$higoPayload<ExtArgs>
        fields: Prisma.higoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.higoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$higoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.higoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$higoPayload>
          }
          findFirst: {
            args: Prisma.higoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$higoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.higoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$higoPayload>
          }
          findMany: {
            args: Prisma.higoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$higoPayload>[]
          }
          create: {
            args: Prisma.higoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$higoPayload>
          }
          createMany: {
            args: Prisma.higoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.higoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$higoPayload>
          }
          update: {
            args: Prisma.higoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$higoPayload>
          }
          deleteMany: {
            args: Prisma.higoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.higoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.higoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$higoPayload>
          }
          aggregate: {
            args: Prisma.HigoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHigo>
          }
          groupBy: {
            args: Prisma.higoGroupByArgs<ExtArgs>
            result: $Utils.Optional<HigoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.higoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.higoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.higoCountArgs<ExtArgs>
            result: $Utils.Optional<HigoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    higo?: higoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model higo
   */

  export type AggregateHigo = {
    _count: HigoCountAggregateOutputType | null
    _avg: HigoAvgAggregateOutputType | null
    _sum: HigoSumAggregateOutputType | null
    _min: HigoMinAggregateOutputType | null
    _max: HigoMaxAggregateOutputType | null
  }

  export type HigoAvgAggregateOutputType = {
    Age: number | null
    Number: number | null
  }

  export type HigoSumAggregateOutputType = {
    Age: number | null
    Number: number | null
  }

  export type HigoMinAggregateOutputType = {
    id: string | null
    Age: number | null
    Brand_Device: string | null
    Date: string | null
    Digital_Interest: string | null
    Email: string | null
    Location_Type: string | null
    Login_Hour: string | null
    Name: string | null
    Name_of_Location: string | null
    No_Telp: string | null
    Number: number | null
    gender: string | null
  }

  export type HigoMaxAggregateOutputType = {
    id: string | null
    Age: number | null
    Brand_Device: string | null
    Date: string | null
    Digital_Interest: string | null
    Email: string | null
    Location_Type: string | null
    Login_Hour: string | null
    Name: string | null
    Name_of_Location: string | null
    No_Telp: string | null
    Number: number | null
    gender: string | null
  }

  export type HigoCountAggregateOutputType = {
    id: number
    Age: number
    Brand_Device: number
    Date: number
    Digital_Interest: number
    Email: number
    Location_Type: number
    Login_Hour: number
    Name: number
    Name_of_Location: number
    No_Telp: number
    Number: number
    gender: number
    _all: number
  }


  export type HigoAvgAggregateInputType = {
    Age?: true
    Number?: true
  }

  export type HigoSumAggregateInputType = {
    Age?: true
    Number?: true
  }

  export type HigoMinAggregateInputType = {
    id?: true
    Age?: true
    Brand_Device?: true
    Date?: true
    Digital_Interest?: true
    Email?: true
    Location_Type?: true
    Login_Hour?: true
    Name?: true
    Name_of_Location?: true
    No_Telp?: true
    Number?: true
    gender?: true
  }

  export type HigoMaxAggregateInputType = {
    id?: true
    Age?: true
    Brand_Device?: true
    Date?: true
    Digital_Interest?: true
    Email?: true
    Location_Type?: true
    Login_Hour?: true
    Name?: true
    Name_of_Location?: true
    No_Telp?: true
    Number?: true
    gender?: true
  }

  export type HigoCountAggregateInputType = {
    id?: true
    Age?: true
    Brand_Device?: true
    Date?: true
    Digital_Interest?: true
    Email?: true
    Location_Type?: true
    Login_Hour?: true
    Name?: true
    Name_of_Location?: true
    No_Telp?: true
    Number?: true
    gender?: true
    _all?: true
  }

  export type HigoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which higo to aggregate.
     */
    where?: higoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of higos to fetch.
     */
    orderBy?: higoOrderByWithRelationInput | higoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: higoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` higos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` higos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned higos
    **/
    _count?: true | HigoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HigoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HigoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HigoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HigoMaxAggregateInputType
  }

  export type GetHigoAggregateType<T extends HigoAggregateArgs> = {
        [P in keyof T & keyof AggregateHigo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHigo[P]>
      : GetScalarType<T[P], AggregateHigo[P]>
  }




  export type higoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: higoWhereInput
    orderBy?: higoOrderByWithAggregationInput | higoOrderByWithAggregationInput[]
    by: HigoScalarFieldEnum[] | HigoScalarFieldEnum
    having?: higoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HigoCountAggregateInputType | true
    _avg?: HigoAvgAggregateInputType
    _sum?: HigoSumAggregateInputType
    _min?: HigoMinAggregateInputType
    _max?: HigoMaxAggregateInputType
  }

  export type HigoGroupByOutputType = {
    id: string
    Age: number
    Brand_Device: string
    Date: string
    Digital_Interest: string
    Email: string
    Location_Type: string
    Login_Hour: string
    Name: string
    Name_of_Location: string
    No_Telp: string
    Number: number
    gender: string
    _count: HigoCountAggregateOutputType | null
    _avg: HigoAvgAggregateOutputType | null
    _sum: HigoSumAggregateOutputType | null
    _min: HigoMinAggregateOutputType | null
    _max: HigoMaxAggregateOutputType | null
  }

  type GetHigoGroupByPayload<T extends higoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HigoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HigoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HigoGroupByOutputType[P]>
            : GetScalarType<T[P], HigoGroupByOutputType[P]>
        }
      >
    >


  export type higoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Age?: boolean
    Brand_Device?: boolean
    Date?: boolean
    Digital_Interest?: boolean
    Email?: boolean
    Location_Type?: boolean
    Login_Hour?: boolean
    Name?: boolean
    Name_of_Location?: boolean
    No_Telp?: boolean
    Number?: boolean
    gender?: boolean
  }, ExtArgs["result"]["higo"]>



  export type higoSelectScalar = {
    id?: boolean
    Age?: boolean
    Brand_Device?: boolean
    Date?: boolean
    Digital_Interest?: boolean
    Email?: boolean
    Location_Type?: boolean
    Login_Hour?: boolean
    Name?: boolean
    Name_of_Location?: boolean
    No_Telp?: boolean
    Number?: boolean
    gender?: boolean
  }

  export type higoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Age" | "Brand_Device" | "Date" | "Digital_Interest" | "Email" | "Location_Type" | "Login_Hour" | "Name" | "Name_of_Location" | "No_Telp" | "Number" | "gender", ExtArgs["result"]["higo"]>

  export type $higoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "higo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      Age: number
      Brand_Device: string
      Date: string
      Digital_Interest: string
      Email: string
      Location_Type: string
      Login_Hour: string
      Name: string
      Name_of_Location: string
      No_Telp: string
      Number: number
      gender: string
    }, ExtArgs["result"]["higo"]>
    composites: {}
  }

  type higoGetPayload<S extends boolean | null | undefined | higoDefaultArgs> = $Result.GetResult<Prisma.$higoPayload, S>

  type higoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<higoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HigoCountAggregateInputType | true
    }

  export interface higoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['higo'], meta: { name: 'higo' } }
    /**
     * Find zero or one Higo that matches the filter.
     * @param {higoFindUniqueArgs} args - Arguments to find a Higo
     * @example
     * // Get one Higo
     * const higo = await prisma.higo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends higoFindUniqueArgs>(args: SelectSubset<T, higoFindUniqueArgs<ExtArgs>>): Prisma__higoClient<$Result.GetResult<Prisma.$higoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Higo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {higoFindUniqueOrThrowArgs} args - Arguments to find a Higo
     * @example
     * // Get one Higo
     * const higo = await prisma.higo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends higoFindUniqueOrThrowArgs>(args: SelectSubset<T, higoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__higoClient<$Result.GetResult<Prisma.$higoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Higo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {higoFindFirstArgs} args - Arguments to find a Higo
     * @example
     * // Get one Higo
     * const higo = await prisma.higo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends higoFindFirstArgs>(args?: SelectSubset<T, higoFindFirstArgs<ExtArgs>>): Prisma__higoClient<$Result.GetResult<Prisma.$higoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Higo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {higoFindFirstOrThrowArgs} args - Arguments to find a Higo
     * @example
     * // Get one Higo
     * const higo = await prisma.higo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends higoFindFirstOrThrowArgs>(args?: SelectSubset<T, higoFindFirstOrThrowArgs<ExtArgs>>): Prisma__higoClient<$Result.GetResult<Prisma.$higoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Higos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {higoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Higos
     * const higos = await prisma.higo.findMany()
     * 
     * // Get first 10 Higos
     * const higos = await prisma.higo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const higoWithIdOnly = await prisma.higo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends higoFindManyArgs>(args?: SelectSubset<T, higoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$higoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Higo.
     * @param {higoCreateArgs} args - Arguments to create a Higo.
     * @example
     * // Create one Higo
     * const Higo = await prisma.higo.create({
     *   data: {
     *     // ... data to create a Higo
     *   }
     * })
     * 
     */
    create<T extends higoCreateArgs>(args: SelectSubset<T, higoCreateArgs<ExtArgs>>): Prisma__higoClient<$Result.GetResult<Prisma.$higoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Higos.
     * @param {higoCreateManyArgs} args - Arguments to create many Higos.
     * @example
     * // Create many Higos
     * const higo = await prisma.higo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends higoCreateManyArgs>(args?: SelectSubset<T, higoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Higo.
     * @param {higoDeleteArgs} args - Arguments to delete one Higo.
     * @example
     * // Delete one Higo
     * const Higo = await prisma.higo.delete({
     *   where: {
     *     // ... filter to delete one Higo
     *   }
     * })
     * 
     */
    delete<T extends higoDeleteArgs>(args: SelectSubset<T, higoDeleteArgs<ExtArgs>>): Prisma__higoClient<$Result.GetResult<Prisma.$higoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Higo.
     * @param {higoUpdateArgs} args - Arguments to update one Higo.
     * @example
     * // Update one Higo
     * const higo = await prisma.higo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends higoUpdateArgs>(args: SelectSubset<T, higoUpdateArgs<ExtArgs>>): Prisma__higoClient<$Result.GetResult<Prisma.$higoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Higos.
     * @param {higoDeleteManyArgs} args - Arguments to filter Higos to delete.
     * @example
     * // Delete a few Higos
     * const { count } = await prisma.higo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends higoDeleteManyArgs>(args?: SelectSubset<T, higoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Higos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {higoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Higos
     * const higo = await prisma.higo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends higoUpdateManyArgs>(args: SelectSubset<T, higoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Higo.
     * @param {higoUpsertArgs} args - Arguments to update or create a Higo.
     * @example
     * // Update or create a Higo
     * const higo = await prisma.higo.upsert({
     *   create: {
     *     // ... data to create a Higo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Higo we want to update
     *   }
     * })
     */
    upsert<T extends higoUpsertArgs>(args: SelectSubset<T, higoUpsertArgs<ExtArgs>>): Prisma__higoClient<$Result.GetResult<Prisma.$higoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Higos that matches the filter.
     * @param {higoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const higo = await prisma.higo.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: higoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Higo.
     * @param {higoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const higo = await prisma.higo.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: higoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Higos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {higoCountArgs} args - Arguments to filter Higos to count.
     * @example
     * // Count the number of Higos
     * const count = await prisma.higo.count({
     *   where: {
     *     // ... the filter for the Higos we want to count
     *   }
     * })
    **/
    count<T extends higoCountArgs>(
      args?: Subset<T, higoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HigoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Higo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HigoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HigoAggregateArgs>(args: Subset<T, HigoAggregateArgs>): Prisma.PrismaPromise<GetHigoAggregateType<T>>

    /**
     * Group by Higo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {higoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends higoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: higoGroupByArgs['orderBy'] }
        : { orderBy?: higoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, higoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHigoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the higo model
   */
  readonly fields: higoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for higo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__higoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the higo model
   */
  interface higoFieldRefs {
    readonly id: FieldRef<"higo", 'String'>
    readonly Age: FieldRef<"higo", 'Int'>
    readonly Brand_Device: FieldRef<"higo", 'String'>
    readonly Date: FieldRef<"higo", 'String'>
    readonly Digital_Interest: FieldRef<"higo", 'String'>
    readonly Email: FieldRef<"higo", 'String'>
    readonly Location_Type: FieldRef<"higo", 'String'>
    readonly Login_Hour: FieldRef<"higo", 'String'>
    readonly Name: FieldRef<"higo", 'String'>
    readonly Name_of_Location: FieldRef<"higo", 'String'>
    readonly No_Telp: FieldRef<"higo", 'String'>
    readonly Number: FieldRef<"higo", 'Int'>
    readonly gender: FieldRef<"higo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * higo findUnique
   */
  export type higoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the higo
     */
    select?: higoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the higo
     */
    omit?: higoOmit<ExtArgs> | null
    /**
     * Filter, which higo to fetch.
     */
    where: higoWhereUniqueInput
  }

  /**
   * higo findUniqueOrThrow
   */
  export type higoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the higo
     */
    select?: higoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the higo
     */
    omit?: higoOmit<ExtArgs> | null
    /**
     * Filter, which higo to fetch.
     */
    where: higoWhereUniqueInput
  }

  /**
   * higo findFirst
   */
  export type higoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the higo
     */
    select?: higoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the higo
     */
    omit?: higoOmit<ExtArgs> | null
    /**
     * Filter, which higo to fetch.
     */
    where?: higoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of higos to fetch.
     */
    orderBy?: higoOrderByWithRelationInput | higoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for higos.
     */
    cursor?: higoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` higos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` higos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of higos.
     */
    distinct?: HigoScalarFieldEnum | HigoScalarFieldEnum[]
  }

  /**
   * higo findFirstOrThrow
   */
  export type higoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the higo
     */
    select?: higoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the higo
     */
    omit?: higoOmit<ExtArgs> | null
    /**
     * Filter, which higo to fetch.
     */
    where?: higoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of higos to fetch.
     */
    orderBy?: higoOrderByWithRelationInput | higoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for higos.
     */
    cursor?: higoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` higos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` higos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of higos.
     */
    distinct?: HigoScalarFieldEnum | HigoScalarFieldEnum[]
  }

  /**
   * higo findMany
   */
  export type higoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the higo
     */
    select?: higoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the higo
     */
    omit?: higoOmit<ExtArgs> | null
    /**
     * Filter, which higos to fetch.
     */
    where?: higoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of higos to fetch.
     */
    orderBy?: higoOrderByWithRelationInput | higoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing higos.
     */
    cursor?: higoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` higos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` higos.
     */
    skip?: number
    distinct?: HigoScalarFieldEnum | HigoScalarFieldEnum[]
  }

  /**
   * higo create
   */
  export type higoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the higo
     */
    select?: higoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the higo
     */
    omit?: higoOmit<ExtArgs> | null
    /**
     * The data needed to create a higo.
     */
    data: XOR<higoCreateInput, higoUncheckedCreateInput>
  }

  /**
   * higo createMany
   */
  export type higoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many higos.
     */
    data: higoCreateManyInput | higoCreateManyInput[]
  }

  /**
   * higo update
   */
  export type higoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the higo
     */
    select?: higoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the higo
     */
    omit?: higoOmit<ExtArgs> | null
    /**
     * The data needed to update a higo.
     */
    data: XOR<higoUpdateInput, higoUncheckedUpdateInput>
    /**
     * Choose, which higo to update.
     */
    where: higoWhereUniqueInput
  }

  /**
   * higo updateMany
   */
  export type higoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update higos.
     */
    data: XOR<higoUpdateManyMutationInput, higoUncheckedUpdateManyInput>
    /**
     * Filter which higos to update
     */
    where?: higoWhereInput
    /**
     * Limit how many higos to update.
     */
    limit?: number
  }

  /**
   * higo upsert
   */
  export type higoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the higo
     */
    select?: higoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the higo
     */
    omit?: higoOmit<ExtArgs> | null
    /**
     * The filter to search for the higo to update in case it exists.
     */
    where: higoWhereUniqueInput
    /**
     * In case the higo found by the `where` argument doesn't exist, create a new higo with this data.
     */
    create: XOR<higoCreateInput, higoUncheckedCreateInput>
    /**
     * In case the higo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<higoUpdateInput, higoUncheckedUpdateInput>
  }

  /**
   * higo delete
   */
  export type higoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the higo
     */
    select?: higoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the higo
     */
    omit?: higoOmit<ExtArgs> | null
    /**
     * Filter which higo to delete.
     */
    where: higoWhereUniqueInput
  }

  /**
   * higo deleteMany
   */
  export type higoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which higos to delete
     */
    where?: higoWhereInput
    /**
     * Limit how many higos to delete.
     */
    limit?: number
  }

  /**
   * higo findRaw
   */
  export type higoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * higo aggregateRaw
   */
  export type higoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * higo without action
   */
  export type higoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the higo
     */
    select?: higoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the higo
     */
    omit?: higoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const HigoScalarFieldEnum: {
    id: 'id',
    Age: 'Age',
    Brand_Device: 'Brand_Device',
    Date: 'Date',
    Digital_Interest: 'Digital_Interest',
    Email: 'Email',
    Location_Type: 'Location_Type',
    Login_Hour: 'Login_Hour',
    Name: 'Name',
    Name_of_Location: 'Name_of_Location',
    No_Telp: 'No_Telp',
    Number: 'Number',
    gender: 'gender'
  };

  export type HigoScalarFieldEnum = (typeof HigoScalarFieldEnum)[keyof typeof HigoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type higoWhereInput = {
    AND?: higoWhereInput | higoWhereInput[]
    OR?: higoWhereInput[]
    NOT?: higoWhereInput | higoWhereInput[]
    id?: StringFilter<"higo"> | string
    Age?: IntFilter<"higo"> | number
    Brand_Device?: StringFilter<"higo"> | string
    Date?: StringFilter<"higo"> | string
    Digital_Interest?: StringFilter<"higo"> | string
    Email?: StringFilter<"higo"> | string
    Location_Type?: StringFilter<"higo"> | string
    Login_Hour?: StringFilter<"higo"> | string
    Name?: StringFilter<"higo"> | string
    Name_of_Location?: StringFilter<"higo"> | string
    No_Telp?: StringFilter<"higo"> | string
    Number?: IntFilter<"higo"> | number
    gender?: StringFilter<"higo"> | string
  }

  export type higoOrderByWithRelationInput = {
    id?: SortOrder
    Age?: SortOrder
    Brand_Device?: SortOrder
    Date?: SortOrder
    Digital_Interest?: SortOrder
    Email?: SortOrder
    Location_Type?: SortOrder
    Login_Hour?: SortOrder
    Name?: SortOrder
    Name_of_Location?: SortOrder
    No_Telp?: SortOrder
    Number?: SortOrder
    gender?: SortOrder
  }

  export type higoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: higoWhereInput | higoWhereInput[]
    OR?: higoWhereInput[]
    NOT?: higoWhereInput | higoWhereInput[]
    Age?: IntFilter<"higo"> | number
    Brand_Device?: StringFilter<"higo"> | string
    Date?: StringFilter<"higo"> | string
    Digital_Interest?: StringFilter<"higo"> | string
    Email?: StringFilter<"higo"> | string
    Location_Type?: StringFilter<"higo"> | string
    Login_Hour?: StringFilter<"higo"> | string
    Name?: StringFilter<"higo"> | string
    Name_of_Location?: StringFilter<"higo"> | string
    No_Telp?: StringFilter<"higo"> | string
    Number?: IntFilter<"higo"> | number
    gender?: StringFilter<"higo"> | string
  }, "id">

  export type higoOrderByWithAggregationInput = {
    id?: SortOrder
    Age?: SortOrder
    Brand_Device?: SortOrder
    Date?: SortOrder
    Digital_Interest?: SortOrder
    Email?: SortOrder
    Location_Type?: SortOrder
    Login_Hour?: SortOrder
    Name?: SortOrder
    Name_of_Location?: SortOrder
    No_Telp?: SortOrder
    Number?: SortOrder
    gender?: SortOrder
    _count?: higoCountOrderByAggregateInput
    _avg?: higoAvgOrderByAggregateInput
    _max?: higoMaxOrderByAggregateInput
    _min?: higoMinOrderByAggregateInput
    _sum?: higoSumOrderByAggregateInput
  }

  export type higoScalarWhereWithAggregatesInput = {
    AND?: higoScalarWhereWithAggregatesInput | higoScalarWhereWithAggregatesInput[]
    OR?: higoScalarWhereWithAggregatesInput[]
    NOT?: higoScalarWhereWithAggregatesInput | higoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"higo"> | string
    Age?: IntWithAggregatesFilter<"higo"> | number
    Brand_Device?: StringWithAggregatesFilter<"higo"> | string
    Date?: StringWithAggregatesFilter<"higo"> | string
    Digital_Interest?: StringWithAggregatesFilter<"higo"> | string
    Email?: StringWithAggregatesFilter<"higo"> | string
    Location_Type?: StringWithAggregatesFilter<"higo"> | string
    Login_Hour?: StringWithAggregatesFilter<"higo"> | string
    Name?: StringWithAggregatesFilter<"higo"> | string
    Name_of_Location?: StringWithAggregatesFilter<"higo"> | string
    No_Telp?: StringWithAggregatesFilter<"higo"> | string
    Number?: IntWithAggregatesFilter<"higo"> | number
    gender?: StringWithAggregatesFilter<"higo"> | string
  }

  export type higoCreateInput = {
    id?: string
    Age: number
    Brand_Device: string
    Date: string
    Digital_Interest: string
    Email: string
    Location_Type: string
    Login_Hour: string
    Name: string
    Name_of_Location: string
    No_Telp: string
    Number: number
    gender: string
  }

  export type higoUncheckedCreateInput = {
    id?: string
    Age: number
    Brand_Device: string
    Date: string
    Digital_Interest: string
    Email: string
    Location_Type: string
    Login_Hour: string
    Name: string
    Name_of_Location: string
    No_Telp: string
    Number: number
    gender: string
  }

  export type higoUpdateInput = {
    Age?: IntFieldUpdateOperationsInput | number
    Brand_Device?: StringFieldUpdateOperationsInput | string
    Date?: StringFieldUpdateOperationsInput | string
    Digital_Interest?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Location_Type?: StringFieldUpdateOperationsInput | string
    Login_Hour?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Name_of_Location?: StringFieldUpdateOperationsInput | string
    No_Telp?: StringFieldUpdateOperationsInput | string
    Number?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
  }

  export type higoUncheckedUpdateInput = {
    Age?: IntFieldUpdateOperationsInput | number
    Brand_Device?: StringFieldUpdateOperationsInput | string
    Date?: StringFieldUpdateOperationsInput | string
    Digital_Interest?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Location_Type?: StringFieldUpdateOperationsInput | string
    Login_Hour?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Name_of_Location?: StringFieldUpdateOperationsInput | string
    No_Telp?: StringFieldUpdateOperationsInput | string
    Number?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
  }

  export type higoCreateManyInput = {
    id?: string
    Age: number
    Brand_Device: string
    Date: string
    Digital_Interest: string
    Email: string
    Location_Type: string
    Login_Hour: string
    Name: string
    Name_of_Location: string
    No_Telp: string
    Number: number
    gender: string
  }

  export type higoUpdateManyMutationInput = {
    Age?: IntFieldUpdateOperationsInput | number
    Brand_Device?: StringFieldUpdateOperationsInput | string
    Date?: StringFieldUpdateOperationsInput | string
    Digital_Interest?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Location_Type?: StringFieldUpdateOperationsInput | string
    Login_Hour?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Name_of_Location?: StringFieldUpdateOperationsInput | string
    No_Telp?: StringFieldUpdateOperationsInput | string
    Number?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
  }

  export type higoUncheckedUpdateManyInput = {
    Age?: IntFieldUpdateOperationsInput | number
    Brand_Device?: StringFieldUpdateOperationsInput | string
    Date?: StringFieldUpdateOperationsInput | string
    Digital_Interest?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Location_Type?: StringFieldUpdateOperationsInput | string
    Login_Hour?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Name_of_Location?: StringFieldUpdateOperationsInput | string
    No_Telp?: StringFieldUpdateOperationsInput | string
    Number?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type higoCountOrderByAggregateInput = {
    id?: SortOrder
    Age?: SortOrder
    Brand_Device?: SortOrder
    Date?: SortOrder
    Digital_Interest?: SortOrder
    Email?: SortOrder
    Location_Type?: SortOrder
    Login_Hour?: SortOrder
    Name?: SortOrder
    Name_of_Location?: SortOrder
    No_Telp?: SortOrder
    Number?: SortOrder
    gender?: SortOrder
  }

  export type higoAvgOrderByAggregateInput = {
    Age?: SortOrder
    Number?: SortOrder
  }

  export type higoMaxOrderByAggregateInput = {
    id?: SortOrder
    Age?: SortOrder
    Brand_Device?: SortOrder
    Date?: SortOrder
    Digital_Interest?: SortOrder
    Email?: SortOrder
    Location_Type?: SortOrder
    Login_Hour?: SortOrder
    Name?: SortOrder
    Name_of_Location?: SortOrder
    No_Telp?: SortOrder
    Number?: SortOrder
    gender?: SortOrder
  }

  export type higoMinOrderByAggregateInput = {
    id?: SortOrder
    Age?: SortOrder
    Brand_Device?: SortOrder
    Date?: SortOrder
    Digital_Interest?: SortOrder
    Email?: SortOrder
    Location_Type?: SortOrder
    Login_Hour?: SortOrder
    Name?: SortOrder
    Name_of_Location?: SortOrder
    No_Telp?: SortOrder
    Number?: SortOrder
    gender?: SortOrder
  }

  export type higoSumOrderByAggregateInput = {
    Age?: SortOrder
    Number?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}