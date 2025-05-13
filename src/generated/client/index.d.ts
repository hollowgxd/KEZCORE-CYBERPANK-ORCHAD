
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
 * Model Chicken
 * 
 */
export type Chicken = $Result.DefaultSelection<Prisma.$ChickenPayload>
/**
 * Model Cage
 * 
 */
export type Cage = $Result.DefaultSelection<Prisma.$CagePayload>
/**
 * Model Worker
 * 
 */
export type Worker = $Result.DefaultSelection<Prisma.$WorkerPayload>
/**
 * Model WorkerCage
 * 
 */
export type WorkerCage = $Result.DefaultSelection<Prisma.$WorkerCagePayload>
/**
 * Model EggEntry
 * 
 */
export type EggEntry = $Result.DefaultSelection<Prisma.$EggEntryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EggType: {
  STANDARD: 'STANDARD',
  PREMIUM: 'PREMIUM',
  ORGANIC: 'ORGANIC'
};

export type EggType = (typeof EggType)[keyof typeof EggType]

}

export type EggType = $Enums.EggType

export const EggType: typeof $Enums.EggType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Chickens
 * const chickens = await prisma.chicken.findMany()
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
   * // Fetch zero or more Chickens
   * const chickens = await prisma.chicken.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.chicken`: Exposes CRUD operations for the **Chicken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chickens
    * const chickens = await prisma.chicken.findMany()
    * ```
    */
  get chicken(): Prisma.ChickenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cage`: Exposes CRUD operations for the **Cage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cages
    * const cages = await prisma.cage.findMany()
    * ```
    */
  get cage(): Prisma.CageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.worker`: Exposes CRUD operations for the **Worker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workers
    * const workers = await prisma.worker.findMany()
    * ```
    */
  get worker(): Prisma.WorkerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workerCage`: Exposes CRUD operations for the **WorkerCage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkerCages
    * const workerCages = await prisma.workerCage.findMany()
    * ```
    */
  get workerCage(): Prisma.WorkerCageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eggEntry`: Exposes CRUD operations for the **EggEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EggEntries
    * const eggEntries = await prisma.eggEntry.findMany()
    * ```
    */
  get eggEntry(): Prisma.EggEntryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Chicken: 'Chicken',
    Cage: 'Cage',
    Worker: 'Worker',
    WorkerCage: 'WorkerCage',
    EggEntry: 'EggEntry'
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
      modelProps: "chicken" | "cage" | "worker" | "workerCage" | "eggEntry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Chicken: {
        payload: Prisma.$ChickenPayload<ExtArgs>
        fields: Prisma.ChickenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChickenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChickenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChickenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChickenPayload>
          }
          findFirst: {
            args: Prisma.ChickenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChickenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChickenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChickenPayload>
          }
          findMany: {
            args: Prisma.ChickenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChickenPayload>[]
          }
          create: {
            args: Prisma.ChickenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChickenPayload>
          }
          createMany: {
            args: Prisma.ChickenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChickenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChickenPayload>[]
          }
          delete: {
            args: Prisma.ChickenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChickenPayload>
          }
          update: {
            args: Prisma.ChickenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChickenPayload>
          }
          deleteMany: {
            args: Prisma.ChickenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChickenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChickenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChickenPayload>[]
          }
          upsert: {
            args: Prisma.ChickenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChickenPayload>
          }
          aggregate: {
            args: Prisma.ChickenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChicken>
          }
          groupBy: {
            args: Prisma.ChickenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChickenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChickenCountArgs<ExtArgs>
            result: $Utils.Optional<ChickenCountAggregateOutputType> | number
          }
        }
      }
      Cage: {
        payload: Prisma.$CagePayload<ExtArgs>
        fields: Prisma.CageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CagePayload>
          }
          findFirst: {
            args: Prisma.CageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CagePayload>
          }
          findMany: {
            args: Prisma.CageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CagePayload>[]
          }
          create: {
            args: Prisma.CageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CagePayload>
          }
          createMany: {
            args: Prisma.CageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CagePayload>[]
          }
          delete: {
            args: Prisma.CageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CagePayload>
          }
          update: {
            args: Prisma.CageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CagePayload>
          }
          deleteMany: {
            args: Prisma.CageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CagePayload>[]
          }
          upsert: {
            args: Prisma.CageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CagePayload>
          }
          aggregate: {
            args: Prisma.CageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCage>
          }
          groupBy: {
            args: Prisma.CageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CageCountArgs<ExtArgs>
            result: $Utils.Optional<CageCountAggregateOutputType> | number
          }
        }
      }
      Worker: {
        payload: Prisma.$WorkerPayload<ExtArgs>
        fields: Prisma.WorkerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          findFirst: {
            args: Prisma.WorkerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          findMany: {
            args: Prisma.WorkerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>[]
          }
          create: {
            args: Prisma.WorkerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          createMany: {
            args: Prisma.WorkerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>[]
          }
          delete: {
            args: Prisma.WorkerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          update: {
            args: Prisma.WorkerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          deleteMany: {
            args: Prisma.WorkerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>[]
          }
          upsert: {
            args: Prisma.WorkerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerPayload>
          }
          aggregate: {
            args: Prisma.WorkerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorker>
          }
          groupBy: {
            args: Prisma.WorkerGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkerGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkerCountArgs<ExtArgs>
            result: $Utils.Optional<WorkerCountAggregateOutputType> | number
          }
        }
      }
      WorkerCage: {
        payload: Prisma.$WorkerCagePayload<ExtArgs>
        fields: Prisma.WorkerCageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkerCageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerCagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkerCageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerCagePayload>
          }
          findFirst: {
            args: Prisma.WorkerCageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerCagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkerCageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerCagePayload>
          }
          findMany: {
            args: Prisma.WorkerCageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerCagePayload>[]
          }
          create: {
            args: Prisma.WorkerCageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerCagePayload>
          }
          createMany: {
            args: Prisma.WorkerCageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkerCageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerCagePayload>[]
          }
          delete: {
            args: Prisma.WorkerCageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerCagePayload>
          }
          update: {
            args: Prisma.WorkerCageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerCagePayload>
          }
          deleteMany: {
            args: Prisma.WorkerCageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkerCageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkerCageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerCagePayload>[]
          }
          upsert: {
            args: Prisma.WorkerCageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerCagePayload>
          }
          aggregate: {
            args: Prisma.WorkerCageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkerCage>
          }
          groupBy: {
            args: Prisma.WorkerCageGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkerCageGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkerCageCountArgs<ExtArgs>
            result: $Utils.Optional<WorkerCageCountAggregateOutputType> | number
          }
        }
      }
      EggEntry: {
        payload: Prisma.$EggEntryPayload<ExtArgs>
        fields: Prisma.EggEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EggEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EggEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggEntryPayload>
          }
          findFirst: {
            args: Prisma.EggEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EggEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggEntryPayload>
          }
          findMany: {
            args: Prisma.EggEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggEntryPayload>[]
          }
          create: {
            args: Prisma.EggEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggEntryPayload>
          }
          createMany: {
            args: Prisma.EggEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EggEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggEntryPayload>[]
          }
          delete: {
            args: Prisma.EggEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggEntryPayload>
          }
          update: {
            args: Prisma.EggEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggEntryPayload>
          }
          deleteMany: {
            args: Prisma.EggEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EggEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EggEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggEntryPayload>[]
          }
          upsert: {
            args: Prisma.EggEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EggEntryPayload>
          }
          aggregate: {
            args: Prisma.EggEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEggEntry>
          }
          groupBy: {
            args: Prisma.EggEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EggEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EggEntryCountArgs<ExtArgs>
            result: $Utils.Optional<EggEntryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    chicken?: ChickenOmit
    cage?: CageOmit
    worker?: WorkerOmit
    workerCage?: WorkerCageOmit
    eggEntry?: EggEntryOmit
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
   * Count Type ChickenCountOutputType
   */

  export type ChickenCountOutputType = {
    eggEntries: number
  }

  export type ChickenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eggEntries?: boolean | ChickenCountOutputTypeCountEggEntriesArgs
  }

  // Custom InputTypes
  /**
   * ChickenCountOutputType without action
   */
  export type ChickenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChickenCountOutputType
     */
    select?: ChickenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChickenCountOutputType without action
   */
  export type ChickenCountOutputTypeCountEggEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EggEntryWhereInput
  }


  /**
   * Count Type CageCountOutputType
   */

  export type CageCountOutputType = {
    chicken: number
    workers: number
  }

  export type CageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chicken?: boolean | CageCountOutputTypeCountChickenArgs
    workers?: boolean | CageCountOutputTypeCountWorkersArgs
  }

  // Custom InputTypes
  /**
   * CageCountOutputType without action
   */
  export type CageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CageCountOutputType
     */
    select?: CageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CageCountOutputType without action
   */
  export type CageCountOutputTypeCountChickenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChickenWhereInput
  }

  /**
   * CageCountOutputType without action
   */
  export type CageCountOutputTypeCountWorkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkerCageWhereInput
  }


  /**
   * Count Type WorkerCountOutputType
   */

  export type WorkerCountOutputType = {
    cages: number
  }

  export type WorkerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cages?: boolean | WorkerCountOutputTypeCountCagesArgs
  }

  // Custom InputTypes
  /**
   * WorkerCountOutputType without action
   */
  export type WorkerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerCountOutputType
     */
    select?: WorkerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkerCountOutputType without action
   */
  export type WorkerCountOutputTypeCountCagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkerCageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Chicken
   */

  export type AggregateChicken = {
    _count: ChickenCountAggregateOutputType | null
    _avg: ChickenAvgAggregateOutputType | null
    _sum: ChickenSumAggregateOutputType | null
    _min: ChickenMinAggregateOutputType | null
    _max: ChickenMaxAggregateOutputType | null
  }

  export type ChickenAvgAggregateOutputType = {
    id: number | null
    weight: number | null
    age: number | null
    eggRate: number | null
    cageId: number | null
  }

  export type ChickenSumAggregateOutputType = {
    id: number | null
    weight: number | null
    age: number | null
    eggRate: number | null
    cageId: number | null
  }

  export type ChickenMinAggregateOutputType = {
    id: number | null
    weight: number | null
    age: number | null
    eggRate: number | null
    breed: string | null
    cageId: number | null
  }

  export type ChickenMaxAggregateOutputType = {
    id: number | null
    weight: number | null
    age: number | null
    eggRate: number | null
    breed: string | null
    cageId: number | null
  }

  export type ChickenCountAggregateOutputType = {
    id: number
    weight: number
    age: number
    eggRate: number
    breed: number
    cageId: number
    _all: number
  }


  export type ChickenAvgAggregateInputType = {
    id?: true
    weight?: true
    age?: true
    eggRate?: true
    cageId?: true
  }

  export type ChickenSumAggregateInputType = {
    id?: true
    weight?: true
    age?: true
    eggRate?: true
    cageId?: true
  }

  export type ChickenMinAggregateInputType = {
    id?: true
    weight?: true
    age?: true
    eggRate?: true
    breed?: true
    cageId?: true
  }

  export type ChickenMaxAggregateInputType = {
    id?: true
    weight?: true
    age?: true
    eggRate?: true
    breed?: true
    cageId?: true
  }

  export type ChickenCountAggregateInputType = {
    id?: true
    weight?: true
    age?: true
    eggRate?: true
    breed?: true
    cageId?: true
    _all?: true
  }

  export type ChickenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chicken to aggregate.
     */
    where?: ChickenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chickens to fetch.
     */
    orderBy?: ChickenOrderByWithRelationInput | ChickenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChickenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chickens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chickens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chickens
    **/
    _count?: true | ChickenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChickenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChickenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChickenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChickenMaxAggregateInputType
  }

  export type GetChickenAggregateType<T extends ChickenAggregateArgs> = {
        [P in keyof T & keyof AggregateChicken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChicken[P]>
      : GetScalarType<T[P], AggregateChicken[P]>
  }




  export type ChickenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChickenWhereInput
    orderBy?: ChickenOrderByWithAggregationInput | ChickenOrderByWithAggregationInput[]
    by: ChickenScalarFieldEnum[] | ChickenScalarFieldEnum
    having?: ChickenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChickenCountAggregateInputType | true
    _avg?: ChickenAvgAggregateInputType
    _sum?: ChickenSumAggregateInputType
    _min?: ChickenMinAggregateInputType
    _max?: ChickenMaxAggregateInputType
  }

  export type ChickenGroupByOutputType = {
    id: number
    weight: number
    age: number
    eggRate: number
    breed: string
    cageId: number
    _count: ChickenCountAggregateOutputType | null
    _avg: ChickenAvgAggregateOutputType | null
    _sum: ChickenSumAggregateOutputType | null
    _min: ChickenMinAggregateOutputType | null
    _max: ChickenMaxAggregateOutputType | null
  }

  type GetChickenGroupByPayload<T extends ChickenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChickenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChickenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChickenGroupByOutputType[P]>
            : GetScalarType<T[P], ChickenGroupByOutputType[P]>
        }
      >
    >


  export type ChickenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weight?: boolean
    age?: boolean
    eggRate?: boolean
    breed?: boolean
    cageId?: boolean
    cage?: boolean | CageDefaultArgs<ExtArgs>
    eggEntries?: boolean | Chicken$eggEntriesArgs<ExtArgs>
    _count?: boolean | ChickenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chicken"]>

  export type ChickenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weight?: boolean
    age?: boolean
    eggRate?: boolean
    breed?: boolean
    cageId?: boolean
    cage?: boolean | CageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chicken"]>

  export type ChickenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weight?: boolean
    age?: boolean
    eggRate?: boolean
    breed?: boolean
    cageId?: boolean
    cage?: boolean | CageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chicken"]>

  export type ChickenSelectScalar = {
    id?: boolean
    weight?: boolean
    age?: boolean
    eggRate?: boolean
    breed?: boolean
    cageId?: boolean
  }

  export type ChickenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "weight" | "age" | "eggRate" | "breed" | "cageId", ExtArgs["result"]["chicken"]>
  export type ChickenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cage?: boolean | CageDefaultArgs<ExtArgs>
    eggEntries?: boolean | Chicken$eggEntriesArgs<ExtArgs>
    _count?: boolean | ChickenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChickenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cage?: boolean | CageDefaultArgs<ExtArgs>
  }
  export type ChickenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cage?: boolean | CageDefaultArgs<ExtArgs>
  }

  export type $ChickenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chicken"
    objects: {
      cage: Prisma.$CagePayload<ExtArgs>
      eggEntries: Prisma.$EggEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      weight: number
      age: number
      eggRate: number
      breed: string
      cageId: number
    }, ExtArgs["result"]["chicken"]>
    composites: {}
  }

  type ChickenGetPayload<S extends boolean | null | undefined | ChickenDefaultArgs> = $Result.GetResult<Prisma.$ChickenPayload, S>

  type ChickenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChickenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChickenCountAggregateInputType | true
    }

  export interface ChickenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chicken'], meta: { name: 'Chicken' } }
    /**
     * Find zero or one Chicken that matches the filter.
     * @param {ChickenFindUniqueArgs} args - Arguments to find a Chicken
     * @example
     * // Get one Chicken
     * const chicken = await prisma.chicken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChickenFindUniqueArgs>(args: SelectSubset<T, ChickenFindUniqueArgs<ExtArgs>>): Prisma__ChickenClient<$Result.GetResult<Prisma.$ChickenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chicken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChickenFindUniqueOrThrowArgs} args - Arguments to find a Chicken
     * @example
     * // Get one Chicken
     * const chicken = await prisma.chicken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChickenFindUniqueOrThrowArgs>(args: SelectSubset<T, ChickenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChickenClient<$Result.GetResult<Prisma.$ChickenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chicken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChickenFindFirstArgs} args - Arguments to find a Chicken
     * @example
     * // Get one Chicken
     * const chicken = await prisma.chicken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChickenFindFirstArgs>(args?: SelectSubset<T, ChickenFindFirstArgs<ExtArgs>>): Prisma__ChickenClient<$Result.GetResult<Prisma.$ChickenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chicken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChickenFindFirstOrThrowArgs} args - Arguments to find a Chicken
     * @example
     * // Get one Chicken
     * const chicken = await prisma.chicken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChickenFindFirstOrThrowArgs>(args?: SelectSubset<T, ChickenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChickenClient<$Result.GetResult<Prisma.$ChickenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chickens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChickenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chickens
     * const chickens = await prisma.chicken.findMany()
     * 
     * // Get first 10 Chickens
     * const chickens = await prisma.chicken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chickenWithIdOnly = await prisma.chicken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChickenFindManyArgs>(args?: SelectSubset<T, ChickenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChickenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chicken.
     * @param {ChickenCreateArgs} args - Arguments to create a Chicken.
     * @example
     * // Create one Chicken
     * const Chicken = await prisma.chicken.create({
     *   data: {
     *     // ... data to create a Chicken
     *   }
     * })
     * 
     */
    create<T extends ChickenCreateArgs>(args: SelectSubset<T, ChickenCreateArgs<ExtArgs>>): Prisma__ChickenClient<$Result.GetResult<Prisma.$ChickenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chickens.
     * @param {ChickenCreateManyArgs} args - Arguments to create many Chickens.
     * @example
     * // Create many Chickens
     * const chicken = await prisma.chicken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChickenCreateManyArgs>(args?: SelectSubset<T, ChickenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chickens and returns the data saved in the database.
     * @param {ChickenCreateManyAndReturnArgs} args - Arguments to create many Chickens.
     * @example
     * // Create many Chickens
     * const chicken = await prisma.chicken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chickens and only return the `id`
     * const chickenWithIdOnly = await prisma.chicken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChickenCreateManyAndReturnArgs>(args?: SelectSubset<T, ChickenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChickenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chicken.
     * @param {ChickenDeleteArgs} args - Arguments to delete one Chicken.
     * @example
     * // Delete one Chicken
     * const Chicken = await prisma.chicken.delete({
     *   where: {
     *     // ... filter to delete one Chicken
     *   }
     * })
     * 
     */
    delete<T extends ChickenDeleteArgs>(args: SelectSubset<T, ChickenDeleteArgs<ExtArgs>>): Prisma__ChickenClient<$Result.GetResult<Prisma.$ChickenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chicken.
     * @param {ChickenUpdateArgs} args - Arguments to update one Chicken.
     * @example
     * // Update one Chicken
     * const chicken = await prisma.chicken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChickenUpdateArgs>(args: SelectSubset<T, ChickenUpdateArgs<ExtArgs>>): Prisma__ChickenClient<$Result.GetResult<Prisma.$ChickenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chickens.
     * @param {ChickenDeleteManyArgs} args - Arguments to filter Chickens to delete.
     * @example
     * // Delete a few Chickens
     * const { count } = await prisma.chicken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChickenDeleteManyArgs>(args?: SelectSubset<T, ChickenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chickens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChickenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chickens
     * const chicken = await prisma.chicken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChickenUpdateManyArgs>(args: SelectSubset<T, ChickenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chickens and returns the data updated in the database.
     * @param {ChickenUpdateManyAndReturnArgs} args - Arguments to update many Chickens.
     * @example
     * // Update many Chickens
     * const chicken = await prisma.chicken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chickens and only return the `id`
     * const chickenWithIdOnly = await prisma.chicken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChickenUpdateManyAndReturnArgs>(args: SelectSubset<T, ChickenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChickenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chicken.
     * @param {ChickenUpsertArgs} args - Arguments to update or create a Chicken.
     * @example
     * // Update or create a Chicken
     * const chicken = await prisma.chicken.upsert({
     *   create: {
     *     // ... data to create a Chicken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chicken we want to update
     *   }
     * })
     */
    upsert<T extends ChickenUpsertArgs>(args: SelectSubset<T, ChickenUpsertArgs<ExtArgs>>): Prisma__ChickenClient<$Result.GetResult<Prisma.$ChickenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chickens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChickenCountArgs} args - Arguments to filter Chickens to count.
     * @example
     * // Count the number of Chickens
     * const count = await prisma.chicken.count({
     *   where: {
     *     // ... the filter for the Chickens we want to count
     *   }
     * })
    **/
    count<T extends ChickenCountArgs>(
      args?: Subset<T, ChickenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChickenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chicken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChickenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChickenAggregateArgs>(args: Subset<T, ChickenAggregateArgs>): Prisma.PrismaPromise<GetChickenAggregateType<T>>

    /**
     * Group by Chicken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChickenGroupByArgs} args - Group by arguments.
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
      T extends ChickenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChickenGroupByArgs['orderBy'] }
        : { orderBy?: ChickenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChickenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChickenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chicken model
   */
  readonly fields: ChickenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chicken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChickenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cage<T extends CageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CageDefaultArgs<ExtArgs>>): Prisma__CageClient<$Result.GetResult<Prisma.$CagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    eggEntries<T extends Chicken$eggEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Chicken$eggEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EggEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chicken model
   */
  interface ChickenFieldRefs {
    readonly id: FieldRef<"Chicken", 'Int'>
    readonly weight: FieldRef<"Chicken", 'Float'>
    readonly age: FieldRef<"Chicken", 'Int'>
    readonly eggRate: FieldRef<"Chicken", 'Float'>
    readonly breed: FieldRef<"Chicken", 'String'>
    readonly cageId: FieldRef<"Chicken", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Chicken findUnique
   */
  export type ChickenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chicken
     */
    select?: ChickenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chicken
     */
    omit?: ChickenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChickenInclude<ExtArgs> | null
    /**
     * Filter, which Chicken to fetch.
     */
    where: ChickenWhereUniqueInput
  }

  /**
   * Chicken findUniqueOrThrow
   */
  export type ChickenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chicken
     */
    select?: ChickenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chicken
     */
    omit?: ChickenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChickenInclude<ExtArgs> | null
    /**
     * Filter, which Chicken to fetch.
     */
    where: ChickenWhereUniqueInput
  }

  /**
   * Chicken findFirst
   */
  export type ChickenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chicken
     */
    select?: ChickenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chicken
     */
    omit?: ChickenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChickenInclude<ExtArgs> | null
    /**
     * Filter, which Chicken to fetch.
     */
    where?: ChickenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chickens to fetch.
     */
    orderBy?: ChickenOrderByWithRelationInput | ChickenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chickens.
     */
    cursor?: ChickenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chickens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chickens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chickens.
     */
    distinct?: ChickenScalarFieldEnum | ChickenScalarFieldEnum[]
  }

  /**
   * Chicken findFirstOrThrow
   */
  export type ChickenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chicken
     */
    select?: ChickenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chicken
     */
    omit?: ChickenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChickenInclude<ExtArgs> | null
    /**
     * Filter, which Chicken to fetch.
     */
    where?: ChickenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chickens to fetch.
     */
    orderBy?: ChickenOrderByWithRelationInput | ChickenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chickens.
     */
    cursor?: ChickenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chickens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chickens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chickens.
     */
    distinct?: ChickenScalarFieldEnum | ChickenScalarFieldEnum[]
  }

  /**
   * Chicken findMany
   */
  export type ChickenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chicken
     */
    select?: ChickenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chicken
     */
    omit?: ChickenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChickenInclude<ExtArgs> | null
    /**
     * Filter, which Chickens to fetch.
     */
    where?: ChickenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chickens to fetch.
     */
    orderBy?: ChickenOrderByWithRelationInput | ChickenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chickens.
     */
    cursor?: ChickenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chickens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chickens.
     */
    skip?: number
    distinct?: ChickenScalarFieldEnum | ChickenScalarFieldEnum[]
  }

  /**
   * Chicken create
   */
  export type ChickenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chicken
     */
    select?: ChickenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chicken
     */
    omit?: ChickenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChickenInclude<ExtArgs> | null
    /**
     * The data needed to create a Chicken.
     */
    data: XOR<ChickenCreateInput, ChickenUncheckedCreateInput>
  }

  /**
   * Chicken createMany
   */
  export type ChickenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chickens.
     */
    data: ChickenCreateManyInput | ChickenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chicken createManyAndReturn
   */
  export type ChickenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chicken
     */
    select?: ChickenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chicken
     */
    omit?: ChickenOmit<ExtArgs> | null
    /**
     * The data used to create many Chickens.
     */
    data: ChickenCreateManyInput | ChickenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChickenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chicken update
   */
  export type ChickenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chicken
     */
    select?: ChickenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chicken
     */
    omit?: ChickenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChickenInclude<ExtArgs> | null
    /**
     * The data needed to update a Chicken.
     */
    data: XOR<ChickenUpdateInput, ChickenUncheckedUpdateInput>
    /**
     * Choose, which Chicken to update.
     */
    where: ChickenWhereUniqueInput
  }

  /**
   * Chicken updateMany
   */
  export type ChickenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chickens.
     */
    data: XOR<ChickenUpdateManyMutationInput, ChickenUncheckedUpdateManyInput>
    /**
     * Filter which Chickens to update
     */
    where?: ChickenWhereInput
    /**
     * Limit how many Chickens to update.
     */
    limit?: number
  }

  /**
   * Chicken updateManyAndReturn
   */
  export type ChickenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chicken
     */
    select?: ChickenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chicken
     */
    omit?: ChickenOmit<ExtArgs> | null
    /**
     * The data used to update Chickens.
     */
    data: XOR<ChickenUpdateManyMutationInput, ChickenUncheckedUpdateManyInput>
    /**
     * Filter which Chickens to update
     */
    where?: ChickenWhereInput
    /**
     * Limit how many Chickens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChickenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chicken upsert
   */
  export type ChickenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chicken
     */
    select?: ChickenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chicken
     */
    omit?: ChickenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChickenInclude<ExtArgs> | null
    /**
     * The filter to search for the Chicken to update in case it exists.
     */
    where: ChickenWhereUniqueInput
    /**
     * In case the Chicken found by the `where` argument doesn't exist, create a new Chicken with this data.
     */
    create: XOR<ChickenCreateInput, ChickenUncheckedCreateInput>
    /**
     * In case the Chicken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChickenUpdateInput, ChickenUncheckedUpdateInput>
  }

  /**
   * Chicken delete
   */
  export type ChickenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chicken
     */
    select?: ChickenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chicken
     */
    omit?: ChickenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChickenInclude<ExtArgs> | null
    /**
     * Filter which Chicken to delete.
     */
    where: ChickenWhereUniqueInput
  }

  /**
   * Chicken deleteMany
   */
  export type ChickenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chickens to delete
     */
    where?: ChickenWhereInput
    /**
     * Limit how many Chickens to delete.
     */
    limit?: number
  }

  /**
   * Chicken.eggEntries
   */
  export type Chicken$eggEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EggEntry
     */
    select?: EggEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EggEntry
     */
    omit?: EggEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EggEntryInclude<ExtArgs> | null
    where?: EggEntryWhereInput
    orderBy?: EggEntryOrderByWithRelationInput | EggEntryOrderByWithRelationInput[]
    cursor?: EggEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EggEntryScalarFieldEnum | EggEntryScalarFieldEnum[]
  }

  /**
   * Chicken without action
   */
  export type ChickenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chicken
     */
    select?: ChickenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chicken
     */
    omit?: ChickenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChickenInclude<ExtArgs> | null
  }


  /**
   * Model Cage
   */

  export type AggregateCage = {
    _count: CageCountAggregateOutputType | null
    _avg: CageAvgAggregateOutputType | null
    _sum: CageSumAggregateOutputType | null
    _min: CageMinAggregateOutputType | null
    _max: CageMaxAggregateOutputType | null
  }

  export type CageAvgAggregateOutputType = {
    id: number | null
  }

  export type CageSumAggregateOutputType = {
    id: number | null
  }

  export type CageMinAggregateOutputType = {
    id: number | null
  }

  export type CageMaxAggregateOutputType = {
    id: number | null
  }

  export type CageCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type CageAvgAggregateInputType = {
    id?: true
  }

  export type CageSumAggregateInputType = {
    id?: true
  }

  export type CageMinAggregateInputType = {
    id?: true
  }

  export type CageMaxAggregateInputType = {
    id?: true
  }

  export type CageCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type CageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cage to aggregate.
     */
    where?: CageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cages to fetch.
     */
    orderBy?: CageOrderByWithRelationInput | CageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cages
    **/
    _count?: true | CageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CageMaxAggregateInputType
  }

  export type GetCageAggregateType<T extends CageAggregateArgs> = {
        [P in keyof T & keyof AggregateCage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCage[P]>
      : GetScalarType<T[P], AggregateCage[P]>
  }




  export type CageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CageWhereInput
    orderBy?: CageOrderByWithAggregationInput | CageOrderByWithAggregationInput[]
    by: CageScalarFieldEnum[] | CageScalarFieldEnum
    having?: CageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CageCountAggregateInputType | true
    _avg?: CageAvgAggregateInputType
    _sum?: CageSumAggregateInputType
    _min?: CageMinAggregateInputType
    _max?: CageMaxAggregateInputType
  }

  export type CageGroupByOutputType = {
    id: number
    _count: CageCountAggregateOutputType | null
    _avg: CageAvgAggregateOutputType | null
    _sum: CageSumAggregateOutputType | null
    _min: CageMinAggregateOutputType | null
    _max: CageMaxAggregateOutputType | null
  }

  type GetCageGroupByPayload<T extends CageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CageGroupByOutputType[P]>
            : GetScalarType<T[P], CageGroupByOutputType[P]>
        }
      >
    >


  export type CageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chicken?: boolean | Cage$chickenArgs<ExtArgs>
    workers?: boolean | Cage$workersArgs<ExtArgs>
    _count?: boolean | CageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cage"]>

  export type CageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["cage"]>

  export type CageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["cage"]>

  export type CageSelectScalar = {
    id?: boolean
  }

  export type CageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["cage"]>
  export type CageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chicken?: boolean | Cage$chickenArgs<ExtArgs>
    workers?: boolean | Cage$workersArgs<ExtArgs>
    _count?: boolean | CageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cage"
    objects: {
      chicken: Prisma.$ChickenPayload<ExtArgs>[]
      workers: Prisma.$WorkerCagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
    }, ExtArgs["result"]["cage"]>
    composites: {}
  }

  type CageGetPayload<S extends boolean | null | undefined | CageDefaultArgs> = $Result.GetResult<Prisma.$CagePayload, S>

  type CageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CageCountAggregateInputType | true
    }

  export interface CageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cage'], meta: { name: 'Cage' } }
    /**
     * Find zero or one Cage that matches the filter.
     * @param {CageFindUniqueArgs} args - Arguments to find a Cage
     * @example
     * // Get one Cage
     * const cage = await prisma.cage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CageFindUniqueArgs>(args: SelectSubset<T, CageFindUniqueArgs<ExtArgs>>): Prisma__CageClient<$Result.GetResult<Prisma.$CagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CageFindUniqueOrThrowArgs} args - Arguments to find a Cage
     * @example
     * // Get one Cage
     * const cage = await prisma.cage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CageFindUniqueOrThrowArgs>(args: SelectSubset<T, CageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CageClient<$Result.GetResult<Prisma.$CagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CageFindFirstArgs} args - Arguments to find a Cage
     * @example
     * // Get one Cage
     * const cage = await prisma.cage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CageFindFirstArgs>(args?: SelectSubset<T, CageFindFirstArgs<ExtArgs>>): Prisma__CageClient<$Result.GetResult<Prisma.$CagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CageFindFirstOrThrowArgs} args - Arguments to find a Cage
     * @example
     * // Get one Cage
     * const cage = await prisma.cage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CageFindFirstOrThrowArgs>(args?: SelectSubset<T, CageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CageClient<$Result.GetResult<Prisma.$CagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cages
     * const cages = await prisma.cage.findMany()
     * 
     * // Get first 10 Cages
     * const cages = await prisma.cage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cageWithIdOnly = await prisma.cage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CageFindManyArgs>(args?: SelectSubset<T, CageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cage.
     * @param {CageCreateArgs} args - Arguments to create a Cage.
     * @example
     * // Create one Cage
     * const Cage = await prisma.cage.create({
     *   data: {
     *     // ... data to create a Cage
     *   }
     * })
     * 
     */
    create<T extends CageCreateArgs>(args: SelectSubset<T, CageCreateArgs<ExtArgs>>): Prisma__CageClient<$Result.GetResult<Prisma.$CagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cages.
     * @param {CageCreateManyArgs} args - Arguments to create many Cages.
     * @example
     * // Create many Cages
     * const cage = await prisma.cage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CageCreateManyArgs>(args?: SelectSubset<T, CageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cages and returns the data saved in the database.
     * @param {CageCreateManyAndReturnArgs} args - Arguments to create many Cages.
     * @example
     * // Create many Cages
     * const cage = await prisma.cage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cages and only return the `id`
     * const cageWithIdOnly = await prisma.cage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CageCreateManyAndReturnArgs>(args?: SelectSubset<T, CageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cage.
     * @param {CageDeleteArgs} args - Arguments to delete one Cage.
     * @example
     * // Delete one Cage
     * const Cage = await prisma.cage.delete({
     *   where: {
     *     // ... filter to delete one Cage
     *   }
     * })
     * 
     */
    delete<T extends CageDeleteArgs>(args: SelectSubset<T, CageDeleteArgs<ExtArgs>>): Prisma__CageClient<$Result.GetResult<Prisma.$CagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cage.
     * @param {CageUpdateArgs} args - Arguments to update one Cage.
     * @example
     * // Update one Cage
     * const cage = await prisma.cage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CageUpdateArgs>(args: SelectSubset<T, CageUpdateArgs<ExtArgs>>): Prisma__CageClient<$Result.GetResult<Prisma.$CagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cages.
     * @param {CageDeleteManyArgs} args - Arguments to filter Cages to delete.
     * @example
     * // Delete a few Cages
     * const { count } = await prisma.cage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CageDeleteManyArgs>(args?: SelectSubset<T, CageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cages
     * const cage = await prisma.cage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CageUpdateManyArgs>(args: SelectSubset<T, CageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cages and returns the data updated in the database.
     * @param {CageUpdateManyAndReturnArgs} args - Arguments to update many Cages.
     * @example
     * // Update many Cages
     * const cage = await prisma.cage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cages and only return the `id`
     * const cageWithIdOnly = await prisma.cage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CageUpdateManyAndReturnArgs>(args: SelectSubset<T, CageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cage.
     * @param {CageUpsertArgs} args - Arguments to update or create a Cage.
     * @example
     * // Update or create a Cage
     * const cage = await prisma.cage.upsert({
     *   create: {
     *     // ... data to create a Cage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cage we want to update
     *   }
     * })
     */
    upsert<T extends CageUpsertArgs>(args: SelectSubset<T, CageUpsertArgs<ExtArgs>>): Prisma__CageClient<$Result.GetResult<Prisma.$CagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CageCountArgs} args - Arguments to filter Cages to count.
     * @example
     * // Count the number of Cages
     * const count = await prisma.cage.count({
     *   where: {
     *     // ... the filter for the Cages we want to count
     *   }
     * })
    **/
    count<T extends CageCountArgs>(
      args?: Subset<T, CageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CageAggregateArgs>(args: Subset<T, CageAggregateArgs>): Prisma.PrismaPromise<GetCageAggregateType<T>>

    /**
     * Group by Cage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CageGroupByArgs} args - Group by arguments.
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
      T extends CageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CageGroupByArgs['orderBy'] }
        : { orderBy?: CageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cage model
   */
  readonly fields: CageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chicken<T extends Cage$chickenArgs<ExtArgs> = {}>(args?: Subset<T, Cage$chickenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChickenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workers<T extends Cage$workersArgs<ExtArgs> = {}>(args?: Subset<T, Cage$workersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerCagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cage model
   */
  interface CageFieldRefs {
    readonly id: FieldRef<"Cage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cage findUnique
   */
  export type CageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cage
     */
    select?: CageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cage
     */
    omit?: CageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CageInclude<ExtArgs> | null
    /**
     * Filter, which Cage to fetch.
     */
    where: CageWhereUniqueInput
  }

  /**
   * Cage findUniqueOrThrow
   */
  export type CageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cage
     */
    select?: CageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cage
     */
    omit?: CageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CageInclude<ExtArgs> | null
    /**
     * Filter, which Cage to fetch.
     */
    where: CageWhereUniqueInput
  }

  /**
   * Cage findFirst
   */
  export type CageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cage
     */
    select?: CageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cage
     */
    omit?: CageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CageInclude<ExtArgs> | null
    /**
     * Filter, which Cage to fetch.
     */
    where?: CageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cages to fetch.
     */
    orderBy?: CageOrderByWithRelationInput | CageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cages.
     */
    cursor?: CageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cages.
     */
    distinct?: CageScalarFieldEnum | CageScalarFieldEnum[]
  }

  /**
   * Cage findFirstOrThrow
   */
  export type CageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cage
     */
    select?: CageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cage
     */
    omit?: CageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CageInclude<ExtArgs> | null
    /**
     * Filter, which Cage to fetch.
     */
    where?: CageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cages to fetch.
     */
    orderBy?: CageOrderByWithRelationInput | CageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cages.
     */
    cursor?: CageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cages.
     */
    distinct?: CageScalarFieldEnum | CageScalarFieldEnum[]
  }

  /**
   * Cage findMany
   */
  export type CageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cage
     */
    select?: CageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cage
     */
    omit?: CageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CageInclude<ExtArgs> | null
    /**
     * Filter, which Cages to fetch.
     */
    where?: CageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cages to fetch.
     */
    orderBy?: CageOrderByWithRelationInput | CageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cages.
     */
    cursor?: CageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cages.
     */
    skip?: number
    distinct?: CageScalarFieldEnum | CageScalarFieldEnum[]
  }

  /**
   * Cage create
   */
  export type CageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cage
     */
    select?: CageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cage
     */
    omit?: CageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CageInclude<ExtArgs> | null
    /**
     * The data needed to create a Cage.
     */
    data?: XOR<CageCreateInput, CageUncheckedCreateInput>
  }

  /**
   * Cage createMany
   */
  export type CageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cages.
     */
    data: CageCreateManyInput | CageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cage createManyAndReturn
   */
  export type CageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cage
     */
    select?: CageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cage
     */
    omit?: CageOmit<ExtArgs> | null
    /**
     * The data used to create many Cages.
     */
    data: CageCreateManyInput | CageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cage update
   */
  export type CageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cage
     */
    select?: CageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cage
     */
    omit?: CageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CageInclude<ExtArgs> | null
    /**
     * The data needed to update a Cage.
     */
    data: XOR<CageUpdateInput, CageUncheckedUpdateInput>
    /**
     * Choose, which Cage to update.
     */
    where: CageWhereUniqueInput
  }

  /**
   * Cage updateMany
   */
  export type CageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cages.
     */
    data: XOR<CageUpdateManyMutationInput, CageUncheckedUpdateManyInput>
    /**
     * Filter which Cages to update
     */
    where?: CageWhereInput
    /**
     * Limit how many Cages to update.
     */
    limit?: number
  }

  /**
   * Cage updateManyAndReturn
   */
  export type CageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cage
     */
    select?: CageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cage
     */
    omit?: CageOmit<ExtArgs> | null
    /**
     * The data used to update Cages.
     */
    data: XOR<CageUpdateManyMutationInput, CageUncheckedUpdateManyInput>
    /**
     * Filter which Cages to update
     */
    where?: CageWhereInput
    /**
     * Limit how many Cages to update.
     */
    limit?: number
  }

  /**
   * Cage upsert
   */
  export type CageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cage
     */
    select?: CageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cage
     */
    omit?: CageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CageInclude<ExtArgs> | null
    /**
     * The filter to search for the Cage to update in case it exists.
     */
    where: CageWhereUniqueInput
    /**
     * In case the Cage found by the `where` argument doesn't exist, create a new Cage with this data.
     */
    create: XOR<CageCreateInput, CageUncheckedCreateInput>
    /**
     * In case the Cage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CageUpdateInput, CageUncheckedUpdateInput>
  }

  /**
   * Cage delete
   */
  export type CageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cage
     */
    select?: CageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cage
     */
    omit?: CageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CageInclude<ExtArgs> | null
    /**
     * Filter which Cage to delete.
     */
    where: CageWhereUniqueInput
  }

  /**
   * Cage deleteMany
   */
  export type CageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cages to delete
     */
    where?: CageWhereInput
    /**
     * Limit how many Cages to delete.
     */
    limit?: number
  }

  /**
   * Cage.chicken
   */
  export type Cage$chickenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chicken
     */
    select?: ChickenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chicken
     */
    omit?: ChickenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChickenInclude<ExtArgs> | null
    where?: ChickenWhereInput
    orderBy?: ChickenOrderByWithRelationInput | ChickenOrderByWithRelationInput[]
    cursor?: ChickenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChickenScalarFieldEnum | ChickenScalarFieldEnum[]
  }

  /**
   * Cage.workers
   */
  export type Cage$workersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerCage
     */
    select?: WorkerCageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerCage
     */
    omit?: WorkerCageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerCageInclude<ExtArgs> | null
    where?: WorkerCageWhereInput
    orderBy?: WorkerCageOrderByWithRelationInput | WorkerCageOrderByWithRelationInput[]
    cursor?: WorkerCageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkerCageScalarFieldEnum | WorkerCageScalarFieldEnum[]
  }

  /**
   * Cage without action
   */
  export type CageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cage
     */
    select?: CageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cage
     */
    omit?: CageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CageInclude<ExtArgs> | null
  }


  /**
   * Model Worker
   */

  export type AggregateWorker = {
    _count: WorkerCountAggregateOutputType | null
    _avg: WorkerAvgAggregateOutputType | null
    _sum: WorkerSumAggregateOutputType | null
    _min: WorkerMinAggregateOutputType | null
    _max: WorkerMaxAggregateOutputType | null
  }

  export type WorkerAvgAggregateOutputType = {
    id: number | null
    salary: number | null
  }

  export type WorkerSumAggregateOutputType = {
    id: number | null
    salary: number | null
  }

  export type WorkerMinAggregateOutputType = {
    id: number | null
    name: string | null
    salary: number | null
  }

  export type WorkerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    salary: number | null
  }

  export type WorkerCountAggregateOutputType = {
    id: number
    name: number
    salary: number
    _all: number
  }


  export type WorkerAvgAggregateInputType = {
    id?: true
    salary?: true
  }

  export type WorkerSumAggregateInputType = {
    id?: true
    salary?: true
  }

  export type WorkerMinAggregateInputType = {
    id?: true
    name?: true
    salary?: true
  }

  export type WorkerMaxAggregateInputType = {
    id?: true
    name?: true
    salary?: true
  }

  export type WorkerCountAggregateInputType = {
    id?: true
    name?: true
    salary?: true
    _all?: true
  }

  export type WorkerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Worker to aggregate.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workers
    **/
    _count?: true | WorkerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkerMaxAggregateInputType
  }

  export type GetWorkerAggregateType<T extends WorkerAggregateArgs> = {
        [P in keyof T & keyof AggregateWorker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorker[P]>
      : GetScalarType<T[P], AggregateWorker[P]>
  }




  export type WorkerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkerWhereInput
    orderBy?: WorkerOrderByWithAggregationInput | WorkerOrderByWithAggregationInput[]
    by: WorkerScalarFieldEnum[] | WorkerScalarFieldEnum
    having?: WorkerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkerCountAggregateInputType | true
    _avg?: WorkerAvgAggregateInputType
    _sum?: WorkerSumAggregateInputType
    _min?: WorkerMinAggregateInputType
    _max?: WorkerMaxAggregateInputType
  }

  export type WorkerGroupByOutputType = {
    id: number
    name: string
    salary: number
    _count: WorkerCountAggregateOutputType | null
    _avg: WorkerAvgAggregateOutputType | null
    _sum: WorkerSumAggregateOutputType | null
    _min: WorkerMinAggregateOutputType | null
    _max: WorkerMaxAggregateOutputType | null
  }

  type GetWorkerGroupByPayload<T extends WorkerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkerGroupByOutputType[P]>
            : GetScalarType<T[P], WorkerGroupByOutputType[P]>
        }
      >
    >


  export type WorkerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    salary?: boolean
    cages?: boolean | Worker$cagesArgs<ExtArgs>
    _count?: boolean | WorkerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worker"]>

  export type WorkerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    salary?: boolean
  }, ExtArgs["result"]["worker"]>

  export type WorkerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    salary?: boolean
  }, ExtArgs["result"]["worker"]>

  export type WorkerSelectScalar = {
    id?: boolean
    name?: boolean
    salary?: boolean
  }

  export type WorkerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "salary", ExtArgs["result"]["worker"]>
  export type WorkerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cages?: boolean | Worker$cagesArgs<ExtArgs>
    _count?: boolean | WorkerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorkerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Worker"
    objects: {
      cages: Prisma.$WorkerCagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      salary: number
    }, ExtArgs["result"]["worker"]>
    composites: {}
  }

  type WorkerGetPayload<S extends boolean | null | undefined | WorkerDefaultArgs> = $Result.GetResult<Prisma.$WorkerPayload, S>

  type WorkerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkerCountAggregateInputType | true
    }

  export interface WorkerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Worker'], meta: { name: 'Worker' } }
    /**
     * Find zero or one Worker that matches the filter.
     * @param {WorkerFindUniqueArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkerFindUniqueArgs>(args: SelectSubset<T, WorkerFindUniqueArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Worker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkerFindUniqueOrThrowArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkerFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Worker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindFirstArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkerFindFirstArgs>(args?: SelectSubset<T, WorkerFindFirstArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Worker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindFirstOrThrowArgs} args - Arguments to find a Worker
     * @example
     * // Get one Worker
     * const worker = await prisma.worker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkerFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkerFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workers
     * const workers = await prisma.worker.findMany()
     * 
     * // Get first 10 Workers
     * const workers = await prisma.worker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workerWithIdOnly = await prisma.worker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkerFindManyArgs>(args?: SelectSubset<T, WorkerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Worker.
     * @param {WorkerCreateArgs} args - Arguments to create a Worker.
     * @example
     * // Create one Worker
     * const Worker = await prisma.worker.create({
     *   data: {
     *     // ... data to create a Worker
     *   }
     * })
     * 
     */
    create<T extends WorkerCreateArgs>(args: SelectSubset<T, WorkerCreateArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workers.
     * @param {WorkerCreateManyArgs} args - Arguments to create many Workers.
     * @example
     * // Create many Workers
     * const worker = await prisma.worker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkerCreateManyArgs>(args?: SelectSubset<T, WorkerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workers and returns the data saved in the database.
     * @param {WorkerCreateManyAndReturnArgs} args - Arguments to create many Workers.
     * @example
     * // Create many Workers
     * const worker = await prisma.worker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workers and only return the `id`
     * const workerWithIdOnly = await prisma.worker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkerCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Worker.
     * @param {WorkerDeleteArgs} args - Arguments to delete one Worker.
     * @example
     * // Delete one Worker
     * const Worker = await prisma.worker.delete({
     *   where: {
     *     // ... filter to delete one Worker
     *   }
     * })
     * 
     */
    delete<T extends WorkerDeleteArgs>(args: SelectSubset<T, WorkerDeleteArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Worker.
     * @param {WorkerUpdateArgs} args - Arguments to update one Worker.
     * @example
     * // Update one Worker
     * const worker = await prisma.worker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkerUpdateArgs>(args: SelectSubset<T, WorkerUpdateArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workers.
     * @param {WorkerDeleteManyArgs} args - Arguments to filter Workers to delete.
     * @example
     * // Delete a few Workers
     * const { count } = await prisma.worker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkerDeleteManyArgs>(args?: SelectSubset<T, WorkerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workers
     * const worker = await prisma.worker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkerUpdateManyArgs>(args: SelectSubset<T, WorkerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workers and returns the data updated in the database.
     * @param {WorkerUpdateManyAndReturnArgs} args - Arguments to update many Workers.
     * @example
     * // Update many Workers
     * const worker = await prisma.worker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workers and only return the `id`
     * const workerWithIdOnly = await prisma.worker.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkerUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Worker.
     * @param {WorkerUpsertArgs} args - Arguments to update or create a Worker.
     * @example
     * // Update or create a Worker
     * const worker = await prisma.worker.upsert({
     *   create: {
     *     // ... data to create a Worker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Worker we want to update
     *   }
     * })
     */
    upsert<T extends WorkerUpsertArgs>(args: SelectSubset<T, WorkerUpsertArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerCountArgs} args - Arguments to filter Workers to count.
     * @example
     * // Count the number of Workers
     * const count = await prisma.worker.count({
     *   where: {
     *     // ... the filter for the Workers we want to count
     *   }
     * })
    **/
    count<T extends WorkerCountArgs>(
      args?: Subset<T, WorkerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Worker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkerAggregateArgs>(args: Subset<T, WorkerAggregateArgs>): Prisma.PrismaPromise<GetWorkerAggregateType<T>>

    /**
     * Group by Worker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerGroupByArgs} args - Group by arguments.
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
      T extends WorkerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkerGroupByArgs['orderBy'] }
        : { orderBy?: WorkerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Worker model
   */
  readonly fields: WorkerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Worker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cages<T extends Worker$cagesArgs<ExtArgs> = {}>(args?: Subset<T, Worker$cagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerCagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Worker model
   */
  interface WorkerFieldRefs {
    readonly id: FieldRef<"Worker", 'Int'>
    readonly name: FieldRef<"Worker", 'String'>
    readonly salary: FieldRef<"Worker", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Worker findUnique
   */
  export type WorkerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker findUniqueOrThrow
   */
  export type WorkerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker findFirst
   */
  export type WorkerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workers.
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workers.
     */
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Worker findFirstOrThrow
   */
  export type WorkerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Worker to fetch.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workers.
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workers.
     */
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Worker findMany
   */
  export type WorkerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter, which Workers to fetch.
     */
    where?: WorkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workers to fetch.
     */
    orderBy?: WorkerOrderByWithRelationInput | WorkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workers.
     */
    cursor?: WorkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workers.
     */
    skip?: number
    distinct?: WorkerScalarFieldEnum | WorkerScalarFieldEnum[]
  }

  /**
   * Worker create
   */
  export type WorkerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * The data needed to create a Worker.
     */
    data: XOR<WorkerCreateInput, WorkerUncheckedCreateInput>
  }

  /**
   * Worker createMany
   */
  export type WorkerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workers.
     */
    data: WorkerCreateManyInput | WorkerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Worker createManyAndReturn
   */
  export type WorkerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * The data used to create many Workers.
     */
    data: WorkerCreateManyInput | WorkerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Worker update
   */
  export type WorkerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * The data needed to update a Worker.
     */
    data: XOR<WorkerUpdateInput, WorkerUncheckedUpdateInput>
    /**
     * Choose, which Worker to update.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker updateMany
   */
  export type WorkerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workers.
     */
    data: XOR<WorkerUpdateManyMutationInput, WorkerUncheckedUpdateManyInput>
    /**
     * Filter which Workers to update
     */
    where?: WorkerWhereInput
    /**
     * Limit how many Workers to update.
     */
    limit?: number
  }

  /**
   * Worker updateManyAndReturn
   */
  export type WorkerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * The data used to update Workers.
     */
    data: XOR<WorkerUpdateManyMutationInput, WorkerUncheckedUpdateManyInput>
    /**
     * Filter which Workers to update
     */
    where?: WorkerWhereInput
    /**
     * Limit how many Workers to update.
     */
    limit?: number
  }

  /**
   * Worker upsert
   */
  export type WorkerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * The filter to search for the Worker to update in case it exists.
     */
    where: WorkerWhereUniqueInput
    /**
     * In case the Worker found by the `where` argument doesn't exist, create a new Worker with this data.
     */
    create: XOR<WorkerCreateInput, WorkerUncheckedCreateInput>
    /**
     * In case the Worker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkerUpdateInput, WorkerUncheckedUpdateInput>
  }

  /**
   * Worker delete
   */
  export type WorkerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
    /**
     * Filter which Worker to delete.
     */
    where: WorkerWhereUniqueInput
  }

  /**
   * Worker deleteMany
   */
  export type WorkerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workers to delete
     */
    where?: WorkerWhereInput
    /**
     * Limit how many Workers to delete.
     */
    limit?: number
  }

  /**
   * Worker.cages
   */
  export type Worker$cagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerCage
     */
    select?: WorkerCageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerCage
     */
    omit?: WorkerCageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerCageInclude<ExtArgs> | null
    where?: WorkerCageWhereInput
    orderBy?: WorkerCageOrderByWithRelationInput | WorkerCageOrderByWithRelationInput[]
    cursor?: WorkerCageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkerCageScalarFieldEnum | WorkerCageScalarFieldEnum[]
  }

  /**
   * Worker without action
   */
  export type WorkerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worker
     */
    select?: WorkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worker
     */
    omit?: WorkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerInclude<ExtArgs> | null
  }


  /**
   * Model WorkerCage
   */

  export type AggregateWorkerCage = {
    _count: WorkerCageCountAggregateOutputType | null
    _avg: WorkerCageAvgAggregateOutputType | null
    _sum: WorkerCageSumAggregateOutputType | null
    _min: WorkerCageMinAggregateOutputType | null
    _max: WorkerCageMaxAggregateOutputType | null
  }

  export type WorkerCageAvgAggregateOutputType = {
    workerId: number | null
    cageId: number | null
  }

  export type WorkerCageSumAggregateOutputType = {
    workerId: number | null
    cageId: number | null
  }

  export type WorkerCageMinAggregateOutputType = {
    workerId: number | null
    cageId: number | null
  }

  export type WorkerCageMaxAggregateOutputType = {
    workerId: number | null
    cageId: number | null
  }

  export type WorkerCageCountAggregateOutputType = {
    workerId: number
    cageId: number
    _all: number
  }


  export type WorkerCageAvgAggregateInputType = {
    workerId?: true
    cageId?: true
  }

  export type WorkerCageSumAggregateInputType = {
    workerId?: true
    cageId?: true
  }

  export type WorkerCageMinAggregateInputType = {
    workerId?: true
    cageId?: true
  }

  export type WorkerCageMaxAggregateInputType = {
    workerId?: true
    cageId?: true
  }

  export type WorkerCageCountAggregateInputType = {
    workerId?: true
    cageId?: true
    _all?: true
  }

  export type WorkerCageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkerCage to aggregate.
     */
    where?: WorkerCageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkerCages to fetch.
     */
    orderBy?: WorkerCageOrderByWithRelationInput | WorkerCageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkerCageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkerCages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkerCages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkerCages
    **/
    _count?: true | WorkerCageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkerCageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkerCageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkerCageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkerCageMaxAggregateInputType
  }

  export type GetWorkerCageAggregateType<T extends WorkerCageAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkerCage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkerCage[P]>
      : GetScalarType<T[P], AggregateWorkerCage[P]>
  }




  export type WorkerCageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkerCageWhereInput
    orderBy?: WorkerCageOrderByWithAggregationInput | WorkerCageOrderByWithAggregationInput[]
    by: WorkerCageScalarFieldEnum[] | WorkerCageScalarFieldEnum
    having?: WorkerCageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkerCageCountAggregateInputType | true
    _avg?: WorkerCageAvgAggregateInputType
    _sum?: WorkerCageSumAggregateInputType
    _min?: WorkerCageMinAggregateInputType
    _max?: WorkerCageMaxAggregateInputType
  }

  export type WorkerCageGroupByOutputType = {
    workerId: number
    cageId: number
    _count: WorkerCageCountAggregateOutputType | null
    _avg: WorkerCageAvgAggregateOutputType | null
    _sum: WorkerCageSumAggregateOutputType | null
    _min: WorkerCageMinAggregateOutputType | null
    _max: WorkerCageMaxAggregateOutputType | null
  }

  type GetWorkerCageGroupByPayload<T extends WorkerCageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkerCageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkerCageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkerCageGroupByOutputType[P]>
            : GetScalarType<T[P], WorkerCageGroupByOutputType[P]>
        }
      >
    >


  export type WorkerCageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workerId?: boolean
    cageId?: boolean
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
    cage?: boolean | CageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workerCage"]>

  export type WorkerCageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workerId?: boolean
    cageId?: boolean
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
    cage?: boolean | CageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workerCage"]>

  export type WorkerCageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workerId?: boolean
    cageId?: boolean
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
    cage?: boolean | CageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workerCage"]>

  export type WorkerCageSelectScalar = {
    workerId?: boolean
    cageId?: boolean
  }

  export type WorkerCageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"workerId" | "cageId", ExtArgs["result"]["workerCage"]>
  export type WorkerCageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
    cage?: boolean | CageDefaultArgs<ExtArgs>
  }
  export type WorkerCageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
    cage?: boolean | CageDefaultArgs<ExtArgs>
  }
  export type WorkerCageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    worker?: boolean | WorkerDefaultArgs<ExtArgs>
    cage?: boolean | CageDefaultArgs<ExtArgs>
  }

  export type $WorkerCagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkerCage"
    objects: {
      worker: Prisma.$WorkerPayload<ExtArgs>
      cage: Prisma.$CagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      workerId: number
      cageId: number
    }, ExtArgs["result"]["workerCage"]>
    composites: {}
  }

  type WorkerCageGetPayload<S extends boolean | null | undefined | WorkerCageDefaultArgs> = $Result.GetResult<Prisma.$WorkerCagePayload, S>

  type WorkerCageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkerCageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkerCageCountAggregateInputType | true
    }

  export interface WorkerCageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkerCage'], meta: { name: 'WorkerCage' } }
    /**
     * Find zero or one WorkerCage that matches the filter.
     * @param {WorkerCageFindUniqueArgs} args - Arguments to find a WorkerCage
     * @example
     * // Get one WorkerCage
     * const workerCage = await prisma.workerCage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkerCageFindUniqueArgs>(args: SelectSubset<T, WorkerCageFindUniqueArgs<ExtArgs>>): Prisma__WorkerCageClient<$Result.GetResult<Prisma.$WorkerCagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkerCage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkerCageFindUniqueOrThrowArgs} args - Arguments to find a WorkerCage
     * @example
     * // Get one WorkerCage
     * const workerCage = await prisma.workerCage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkerCageFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkerCageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkerCageClient<$Result.GetResult<Prisma.$WorkerCagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkerCage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerCageFindFirstArgs} args - Arguments to find a WorkerCage
     * @example
     * // Get one WorkerCage
     * const workerCage = await prisma.workerCage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkerCageFindFirstArgs>(args?: SelectSubset<T, WorkerCageFindFirstArgs<ExtArgs>>): Prisma__WorkerCageClient<$Result.GetResult<Prisma.$WorkerCagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkerCage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerCageFindFirstOrThrowArgs} args - Arguments to find a WorkerCage
     * @example
     * // Get one WorkerCage
     * const workerCage = await prisma.workerCage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkerCageFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkerCageFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkerCageClient<$Result.GetResult<Prisma.$WorkerCagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkerCages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerCageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkerCages
     * const workerCages = await prisma.workerCage.findMany()
     * 
     * // Get first 10 WorkerCages
     * const workerCages = await prisma.workerCage.findMany({ take: 10 })
     * 
     * // Only select the `workerId`
     * const workerCageWithWorkerIdOnly = await prisma.workerCage.findMany({ select: { workerId: true } })
     * 
     */
    findMany<T extends WorkerCageFindManyArgs>(args?: SelectSubset<T, WorkerCageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerCagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkerCage.
     * @param {WorkerCageCreateArgs} args - Arguments to create a WorkerCage.
     * @example
     * // Create one WorkerCage
     * const WorkerCage = await prisma.workerCage.create({
     *   data: {
     *     // ... data to create a WorkerCage
     *   }
     * })
     * 
     */
    create<T extends WorkerCageCreateArgs>(args: SelectSubset<T, WorkerCageCreateArgs<ExtArgs>>): Prisma__WorkerCageClient<$Result.GetResult<Prisma.$WorkerCagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkerCages.
     * @param {WorkerCageCreateManyArgs} args - Arguments to create many WorkerCages.
     * @example
     * // Create many WorkerCages
     * const workerCage = await prisma.workerCage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkerCageCreateManyArgs>(args?: SelectSubset<T, WorkerCageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkerCages and returns the data saved in the database.
     * @param {WorkerCageCreateManyAndReturnArgs} args - Arguments to create many WorkerCages.
     * @example
     * // Create many WorkerCages
     * const workerCage = await prisma.workerCage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkerCages and only return the `workerId`
     * const workerCageWithWorkerIdOnly = await prisma.workerCage.createManyAndReturn({
     *   select: { workerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkerCageCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkerCageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerCagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkerCage.
     * @param {WorkerCageDeleteArgs} args - Arguments to delete one WorkerCage.
     * @example
     * // Delete one WorkerCage
     * const WorkerCage = await prisma.workerCage.delete({
     *   where: {
     *     // ... filter to delete one WorkerCage
     *   }
     * })
     * 
     */
    delete<T extends WorkerCageDeleteArgs>(args: SelectSubset<T, WorkerCageDeleteArgs<ExtArgs>>): Prisma__WorkerCageClient<$Result.GetResult<Prisma.$WorkerCagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkerCage.
     * @param {WorkerCageUpdateArgs} args - Arguments to update one WorkerCage.
     * @example
     * // Update one WorkerCage
     * const workerCage = await prisma.workerCage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkerCageUpdateArgs>(args: SelectSubset<T, WorkerCageUpdateArgs<ExtArgs>>): Prisma__WorkerCageClient<$Result.GetResult<Prisma.$WorkerCagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkerCages.
     * @param {WorkerCageDeleteManyArgs} args - Arguments to filter WorkerCages to delete.
     * @example
     * // Delete a few WorkerCages
     * const { count } = await prisma.workerCage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkerCageDeleteManyArgs>(args?: SelectSubset<T, WorkerCageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkerCages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerCageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkerCages
     * const workerCage = await prisma.workerCage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkerCageUpdateManyArgs>(args: SelectSubset<T, WorkerCageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkerCages and returns the data updated in the database.
     * @param {WorkerCageUpdateManyAndReturnArgs} args - Arguments to update many WorkerCages.
     * @example
     * // Update many WorkerCages
     * const workerCage = await prisma.workerCage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkerCages and only return the `workerId`
     * const workerCageWithWorkerIdOnly = await prisma.workerCage.updateManyAndReturn({
     *   select: { workerId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkerCageUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkerCageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerCagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkerCage.
     * @param {WorkerCageUpsertArgs} args - Arguments to update or create a WorkerCage.
     * @example
     * // Update or create a WorkerCage
     * const workerCage = await prisma.workerCage.upsert({
     *   create: {
     *     // ... data to create a WorkerCage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkerCage we want to update
     *   }
     * })
     */
    upsert<T extends WorkerCageUpsertArgs>(args: SelectSubset<T, WorkerCageUpsertArgs<ExtArgs>>): Prisma__WorkerCageClient<$Result.GetResult<Prisma.$WorkerCagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkerCages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerCageCountArgs} args - Arguments to filter WorkerCages to count.
     * @example
     * // Count the number of WorkerCages
     * const count = await prisma.workerCage.count({
     *   where: {
     *     // ... the filter for the WorkerCages we want to count
     *   }
     * })
    **/
    count<T extends WorkerCageCountArgs>(
      args?: Subset<T, WorkerCageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkerCageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkerCage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerCageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkerCageAggregateArgs>(args: Subset<T, WorkerCageAggregateArgs>): Prisma.PrismaPromise<GetWorkerCageAggregateType<T>>

    /**
     * Group by WorkerCage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerCageGroupByArgs} args - Group by arguments.
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
      T extends WorkerCageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkerCageGroupByArgs['orderBy'] }
        : { orderBy?: WorkerCageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkerCageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkerCageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkerCage model
   */
  readonly fields: WorkerCageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkerCage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkerCageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    worker<T extends WorkerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkerDefaultArgs<ExtArgs>>): Prisma__WorkerClient<$Result.GetResult<Prisma.$WorkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cage<T extends CageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CageDefaultArgs<ExtArgs>>): Prisma__CageClient<$Result.GetResult<Prisma.$CagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkerCage model
   */
  interface WorkerCageFieldRefs {
    readonly workerId: FieldRef<"WorkerCage", 'Int'>
    readonly cageId: FieldRef<"WorkerCage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WorkerCage findUnique
   */
  export type WorkerCageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerCage
     */
    select?: WorkerCageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerCage
     */
    omit?: WorkerCageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerCageInclude<ExtArgs> | null
    /**
     * Filter, which WorkerCage to fetch.
     */
    where: WorkerCageWhereUniqueInput
  }

  /**
   * WorkerCage findUniqueOrThrow
   */
  export type WorkerCageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerCage
     */
    select?: WorkerCageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerCage
     */
    omit?: WorkerCageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerCageInclude<ExtArgs> | null
    /**
     * Filter, which WorkerCage to fetch.
     */
    where: WorkerCageWhereUniqueInput
  }

  /**
   * WorkerCage findFirst
   */
  export type WorkerCageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerCage
     */
    select?: WorkerCageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerCage
     */
    omit?: WorkerCageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerCageInclude<ExtArgs> | null
    /**
     * Filter, which WorkerCage to fetch.
     */
    where?: WorkerCageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkerCages to fetch.
     */
    orderBy?: WorkerCageOrderByWithRelationInput | WorkerCageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkerCages.
     */
    cursor?: WorkerCageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkerCages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkerCages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkerCages.
     */
    distinct?: WorkerCageScalarFieldEnum | WorkerCageScalarFieldEnum[]
  }

  /**
   * WorkerCage findFirstOrThrow
   */
  export type WorkerCageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerCage
     */
    select?: WorkerCageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerCage
     */
    omit?: WorkerCageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerCageInclude<ExtArgs> | null
    /**
     * Filter, which WorkerCage to fetch.
     */
    where?: WorkerCageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkerCages to fetch.
     */
    orderBy?: WorkerCageOrderByWithRelationInput | WorkerCageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkerCages.
     */
    cursor?: WorkerCageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkerCages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkerCages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkerCages.
     */
    distinct?: WorkerCageScalarFieldEnum | WorkerCageScalarFieldEnum[]
  }

  /**
   * WorkerCage findMany
   */
  export type WorkerCageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerCage
     */
    select?: WorkerCageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerCage
     */
    omit?: WorkerCageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerCageInclude<ExtArgs> | null
    /**
     * Filter, which WorkerCages to fetch.
     */
    where?: WorkerCageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkerCages to fetch.
     */
    orderBy?: WorkerCageOrderByWithRelationInput | WorkerCageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkerCages.
     */
    cursor?: WorkerCageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkerCages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkerCages.
     */
    skip?: number
    distinct?: WorkerCageScalarFieldEnum | WorkerCageScalarFieldEnum[]
  }

  /**
   * WorkerCage create
   */
  export type WorkerCageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerCage
     */
    select?: WorkerCageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerCage
     */
    omit?: WorkerCageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerCageInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkerCage.
     */
    data: XOR<WorkerCageCreateInput, WorkerCageUncheckedCreateInput>
  }

  /**
   * WorkerCage createMany
   */
  export type WorkerCageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkerCages.
     */
    data: WorkerCageCreateManyInput | WorkerCageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkerCage createManyAndReturn
   */
  export type WorkerCageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerCage
     */
    select?: WorkerCageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerCage
     */
    omit?: WorkerCageOmit<ExtArgs> | null
    /**
     * The data used to create many WorkerCages.
     */
    data: WorkerCageCreateManyInput | WorkerCageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerCageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkerCage update
   */
  export type WorkerCageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerCage
     */
    select?: WorkerCageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerCage
     */
    omit?: WorkerCageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerCageInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkerCage.
     */
    data: XOR<WorkerCageUpdateInput, WorkerCageUncheckedUpdateInput>
    /**
     * Choose, which WorkerCage to update.
     */
    where: WorkerCageWhereUniqueInput
  }

  /**
   * WorkerCage updateMany
   */
  export type WorkerCageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkerCages.
     */
    data: XOR<WorkerCageUpdateManyMutationInput, WorkerCageUncheckedUpdateManyInput>
    /**
     * Filter which WorkerCages to update
     */
    where?: WorkerCageWhereInput
    /**
     * Limit how many WorkerCages to update.
     */
    limit?: number
  }

  /**
   * WorkerCage updateManyAndReturn
   */
  export type WorkerCageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerCage
     */
    select?: WorkerCageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerCage
     */
    omit?: WorkerCageOmit<ExtArgs> | null
    /**
     * The data used to update WorkerCages.
     */
    data: XOR<WorkerCageUpdateManyMutationInput, WorkerCageUncheckedUpdateManyInput>
    /**
     * Filter which WorkerCages to update
     */
    where?: WorkerCageWhereInput
    /**
     * Limit how many WorkerCages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerCageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkerCage upsert
   */
  export type WorkerCageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerCage
     */
    select?: WorkerCageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerCage
     */
    omit?: WorkerCageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerCageInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkerCage to update in case it exists.
     */
    where: WorkerCageWhereUniqueInput
    /**
     * In case the WorkerCage found by the `where` argument doesn't exist, create a new WorkerCage with this data.
     */
    create: XOR<WorkerCageCreateInput, WorkerCageUncheckedCreateInput>
    /**
     * In case the WorkerCage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkerCageUpdateInput, WorkerCageUncheckedUpdateInput>
  }

  /**
   * WorkerCage delete
   */
  export type WorkerCageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerCage
     */
    select?: WorkerCageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerCage
     */
    omit?: WorkerCageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerCageInclude<ExtArgs> | null
    /**
     * Filter which WorkerCage to delete.
     */
    where: WorkerCageWhereUniqueInput
  }

  /**
   * WorkerCage deleteMany
   */
  export type WorkerCageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkerCages to delete
     */
    where?: WorkerCageWhereInput
    /**
     * Limit how many WorkerCages to delete.
     */
    limit?: number
  }

  /**
   * WorkerCage without action
   */
  export type WorkerCageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerCage
     */
    select?: WorkerCageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerCage
     */
    omit?: WorkerCageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerCageInclude<ExtArgs> | null
  }


  /**
   * Model EggEntry
   */

  export type AggregateEggEntry = {
    _count: EggEntryCountAggregateOutputType | null
    _avg: EggEntryAvgAggregateOutputType | null
    _sum: EggEntrySumAggregateOutputType | null
    _min: EggEntryMinAggregateOutputType | null
    _max: EggEntryMaxAggregateOutputType | null
  }

  export type EggEntryAvgAggregateOutputType = {
    id: number | null
    eggsLaid: number | null
    chickenId: number | null
  }

  export type EggEntrySumAggregateOutputType = {
    id: number | null
    eggsLaid: number | null
    chickenId: number | null
  }

  export type EggEntryMinAggregateOutputType = {
    id: number | null
    date: Date | null
    eggsLaid: number | null
    type: $Enums.EggType | null
    chickenId: number | null
  }

  export type EggEntryMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    eggsLaid: number | null
    type: $Enums.EggType | null
    chickenId: number | null
  }

  export type EggEntryCountAggregateOutputType = {
    id: number
    date: number
    eggsLaid: number
    type: number
    chickenId: number
    _all: number
  }


  export type EggEntryAvgAggregateInputType = {
    id?: true
    eggsLaid?: true
    chickenId?: true
  }

  export type EggEntrySumAggregateInputType = {
    id?: true
    eggsLaid?: true
    chickenId?: true
  }

  export type EggEntryMinAggregateInputType = {
    id?: true
    date?: true
    eggsLaid?: true
    type?: true
    chickenId?: true
  }

  export type EggEntryMaxAggregateInputType = {
    id?: true
    date?: true
    eggsLaid?: true
    type?: true
    chickenId?: true
  }

  export type EggEntryCountAggregateInputType = {
    id?: true
    date?: true
    eggsLaid?: true
    type?: true
    chickenId?: true
    _all?: true
  }

  export type EggEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EggEntry to aggregate.
     */
    where?: EggEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EggEntries to fetch.
     */
    orderBy?: EggEntryOrderByWithRelationInput | EggEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EggEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EggEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EggEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EggEntries
    **/
    _count?: true | EggEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EggEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EggEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EggEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EggEntryMaxAggregateInputType
  }

  export type GetEggEntryAggregateType<T extends EggEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateEggEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEggEntry[P]>
      : GetScalarType<T[P], AggregateEggEntry[P]>
  }




  export type EggEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EggEntryWhereInput
    orderBy?: EggEntryOrderByWithAggregationInput | EggEntryOrderByWithAggregationInput[]
    by: EggEntryScalarFieldEnum[] | EggEntryScalarFieldEnum
    having?: EggEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EggEntryCountAggregateInputType | true
    _avg?: EggEntryAvgAggregateInputType
    _sum?: EggEntrySumAggregateInputType
    _min?: EggEntryMinAggregateInputType
    _max?: EggEntryMaxAggregateInputType
  }

  export type EggEntryGroupByOutputType = {
    id: number
    date: Date
    eggsLaid: number
    type: $Enums.EggType
    chickenId: number
    _count: EggEntryCountAggregateOutputType | null
    _avg: EggEntryAvgAggregateOutputType | null
    _sum: EggEntrySumAggregateOutputType | null
    _min: EggEntryMinAggregateOutputType | null
    _max: EggEntryMaxAggregateOutputType | null
  }

  type GetEggEntryGroupByPayload<T extends EggEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EggEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EggEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EggEntryGroupByOutputType[P]>
            : GetScalarType<T[P], EggEntryGroupByOutputType[P]>
        }
      >
    >


  export type EggEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    eggsLaid?: boolean
    type?: boolean
    chickenId?: boolean
    chicken?: boolean | ChickenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eggEntry"]>

  export type EggEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    eggsLaid?: boolean
    type?: boolean
    chickenId?: boolean
    chicken?: boolean | ChickenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eggEntry"]>

  export type EggEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    eggsLaid?: boolean
    type?: boolean
    chickenId?: boolean
    chicken?: boolean | ChickenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eggEntry"]>

  export type EggEntrySelectScalar = {
    id?: boolean
    date?: boolean
    eggsLaid?: boolean
    type?: boolean
    chickenId?: boolean
  }

  export type EggEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "eggsLaid" | "type" | "chickenId", ExtArgs["result"]["eggEntry"]>
  export type EggEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chicken?: boolean | ChickenDefaultArgs<ExtArgs>
  }
  export type EggEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chicken?: boolean | ChickenDefaultArgs<ExtArgs>
  }
  export type EggEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chicken?: boolean | ChickenDefaultArgs<ExtArgs>
  }

  export type $EggEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EggEntry"
    objects: {
      chicken: Prisma.$ChickenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      eggsLaid: number
      type: $Enums.EggType
      chickenId: number
    }, ExtArgs["result"]["eggEntry"]>
    composites: {}
  }

  type EggEntryGetPayload<S extends boolean | null | undefined | EggEntryDefaultArgs> = $Result.GetResult<Prisma.$EggEntryPayload, S>

  type EggEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EggEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EggEntryCountAggregateInputType | true
    }

  export interface EggEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EggEntry'], meta: { name: 'EggEntry' } }
    /**
     * Find zero or one EggEntry that matches the filter.
     * @param {EggEntryFindUniqueArgs} args - Arguments to find a EggEntry
     * @example
     * // Get one EggEntry
     * const eggEntry = await prisma.eggEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EggEntryFindUniqueArgs>(args: SelectSubset<T, EggEntryFindUniqueArgs<ExtArgs>>): Prisma__EggEntryClient<$Result.GetResult<Prisma.$EggEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EggEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EggEntryFindUniqueOrThrowArgs} args - Arguments to find a EggEntry
     * @example
     * // Get one EggEntry
     * const eggEntry = await prisma.eggEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EggEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, EggEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EggEntryClient<$Result.GetResult<Prisma.$EggEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EggEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EggEntryFindFirstArgs} args - Arguments to find a EggEntry
     * @example
     * // Get one EggEntry
     * const eggEntry = await prisma.eggEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EggEntryFindFirstArgs>(args?: SelectSubset<T, EggEntryFindFirstArgs<ExtArgs>>): Prisma__EggEntryClient<$Result.GetResult<Prisma.$EggEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EggEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EggEntryFindFirstOrThrowArgs} args - Arguments to find a EggEntry
     * @example
     * // Get one EggEntry
     * const eggEntry = await prisma.eggEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EggEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, EggEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EggEntryClient<$Result.GetResult<Prisma.$EggEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EggEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EggEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EggEntries
     * const eggEntries = await prisma.eggEntry.findMany()
     * 
     * // Get first 10 EggEntries
     * const eggEntries = await prisma.eggEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eggEntryWithIdOnly = await prisma.eggEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EggEntryFindManyArgs>(args?: SelectSubset<T, EggEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EggEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EggEntry.
     * @param {EggEntryCreateArgs} args - Arguments to create a EggEntry.
     * @example
     * // Create one EggEntry
     * const EggEntry = await prisma.eggEntry.create({
     *   data: {
     *     // ... data to create a EggEntry
     *   }
     * })
     * 
     */
    create<T extends EggEntryCreateArgs>(args: SelectSubset<T, EggEntryCreateArgs<ExtArgs>>): Prisma__EggEntryClient<$Result.GetResult<Prisma.$EggEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EggEntries.
     * @param {EggEntryCreateManyArgs} args - Arguments to create many EggEntries.
     * @example
     * // Create many EggEntries
     * const eggEntry = await prisma.eggEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EggEntryCreateManyArgs>(args?: SelectSubset<T, EggEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EggEntries and returns the data saved in the database.
     * @param {EggEntryCreateManyAndReturnArgs} args - Arguments to create many EggEntries.
     * @example
     * // Create many EggEntries
     * const eggEntry = await prisma.eggEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EggEntries and only return the `id`
     * const eggEntryWithIdOnly = await prisma.eggEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EggEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, EggEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EggEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EggEntry.
     * @param {EggEntryDeleteArgs} args - Arguments to delete one EggEntry.
     * @example
     * // Delete one EggEntry
     * const EggEntry = await prisma.eggEntry.delete({
     *   where: {
     *     // ... filter to delete one EggEntry
     *   }
     * })
     * 
     */
    delete<T extends EggEntryDeleteArgs>(args: SelectSubset<T, EggEntryDeleteArgs<ExtArgs>>): Prisma__EggEntryClient<$Result.GetResult<Prisma.$EggEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EggEntry.
     * @param {EggEntryUpdateArgs} args - Arguments to update one EggEntry.
     * @example
     * // Update one EggEntry
     * const eggEntry = await prisma.eggEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EggEntryUpdateArgs>(args: SelectSubset<T, EggEntryUpdateArgs<ExtArgs>>): Prisma__EggEntryClient<$Result.GetResult<Prisma.$EggEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EggEntries.
     * @param {EggEntryDeleteManyArgs} args - Arguments to filter EggEntries to delete.
     * @example
     * // Delete a few EggEntries
     * const { count } = await prisma.eggEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EggEntryDeleteManyArgs>(args?: SelectSubset<T, EggEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EggEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EggEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EggEntries
     * const eggEntry = await prisma.eggEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EggEntryUpdateManyArgs>(args: SelectSubset<T, EggEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EggEntries and returns the data updated in the database.
     * @param {EggEntryUpdateManyAndReturnArgs} args - Arguments to update many EggEntries.
     * @example
     * // Update many EggEntries
     * const eggEntry = await prisma.eggEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EggEntries and only return the `id`
     * const eggEntryWithIdOnly = await prisma.eggEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EggEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, EggEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EggEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EggEntry.
     * @param {EggEntryUpsertArgs} args - Arguments to update or create a EggEntry.
     * @example
     * // Update or create a EggEntry
     * const eggEntry = await prisma.eggEntry.upsert({
     *   create: {
     *     // ... data to create a EggEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EggEntry we want to update
     *   }
     * })
     */
    upsert<T extends EggEntryUpsertArgs>(args: SelectSubset<T, EggEntryUpsertArgs<ExtArgs>>): Prisma__EggEntryClient<$Result.GetResult<Prisma.$EggEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EggEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EggEntryCountArgs} args - Arguments to filter EggEntries to count.
     * @example
     * // Count the number of EggEntries
     * const count = await prisma.eggEntry.count({
     *   where: {
     *     // ... the filter for the EggEntries we want to count
     *   }
     * })
    **/
    count<T extends EggEntryCountArgs>(
      args?: Subset<T, EggEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EggEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EggEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EggEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EggEntryAggregateArgs>(args: Subset<T, EggEntryAggregateArgs>): Prisma.PrismaPromise<GetEggEntryAggregateType<T>>

    /**
     * Group by EggEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EggEntryGroupByArgs} args - Group by arguments.
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
      T extends EggEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EggEntryGroupByArgs['orderBy'] }
        : { orderBy?: EggEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EggEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEggEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EggEntry model
   */
  readonly fields: EggEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EggEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EggEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chicken<T extends ChickenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChickenDefaultArgs<ExtArgs>>): Prisma__ChickenClient<$Result.GetResult<Prisma.$ChickenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EggEntry model
   */
  interface EggEntryFieldRefs {
    readonly id: FieldRef<"EggEntry", 'Int'>
    readonly date: FieldRef<"EggEntry", 'DateTime'>
    readonly eggsLaid: FieldRef<"EggEntry", 'Int'>
    readonly type: FieldRef<"EggEntry", 'EggType'>
    readonly chickenId: FieldRef<"EggEntry", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EggEntry findUnique
   */
  export type EggEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EggEntry
     */
    select?: EggEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EggEntry
     */
    omit?: EggEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EggEntryInclude<ExtArgs> | null
    /**
     * Filter, which EggEntry to fetch.
     */
    where: EggEntryWhereUniqueInput
  }

  /**
   * EggEntry findUniqueOrThrow
   */
  export type EggEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EggEntry
     */
    select?: EggEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EggEntry
     */
    omit?: EggEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EggEntryInclude<ExtArgs> | null
    /**
     * Filter, which EggEntry to fetch.
     */
    where: EggEntryWhereUniqueInput
  }

  /**
   * EggEntry findFirst
   */
  export type EggEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EggEntry
     */
    select?: EggEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EggEntry
     */
    omit?: EggEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EggEntryInclude<ExtArgs> | null
    /**
     * Filter, which EggEntry to fetch.
     */
    where?: EggEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EggEntries to fetch.
     */
    orderBy?: EggEntryOrderByWithRelationInput | EggEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EggEntries.
     */
    cursor?: EggEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EggEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EggEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EggEntries.
     */
    distinct?: EggEntryScalarFieldEnum | EggEntryScalarFieldEnum[]
  }

  /**
   * EggEntry findFirstOrThrow
   */
  export type EggEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EggEntry
     */
    select?: EggEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EggEntry
     */
    omit?: EggEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EggEntryInclude<ExtArgs> | null
    /**
     * Filter, which EggEntry to fetch.
     */
    where?: EggEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EggEntries to fetch.
     */
    orderBy?: EggEntryOrderByWithRelationInput | EggEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EggEntries.
     */
    cursor?: EggEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EggEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EggEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EggEntries.
     */
    distinct?: EggEntryScalarFieldEnum | EggEntryScalarFieldEnum[]
  }

  /**
   * EggEntry findMany
   */
  export type EggEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EggEntry
     */
    select?: EggEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EggEntry
     */
    omit?: EggEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EggEntryInclude<ExtArgs> | null
    /**
     * Filter, which EggEntries to fetch.
     */
    where?: EggEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EggEntries to fetch.
     */
    orderBy?: EggEntryOrderByWithRelationInput | EggEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EggEntries.
     */
    cursor?: EggEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EggEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EggEntries.
     */
    skip?: number
    distinct?: EggEntryScalarFieldEnum | EggEntryScalarFieldEnum[]
  }

  /**
   * EggEntry create
   */
  export type EggEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EggEntry
     */
    select?: EggEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EggEntry
     */
    omit?: EggEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EggEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a EggEntry.
     */
    data: XOR<EggEntryCreateInput, EggEntryUncheckedCreateInput>
  }

  /**
   * EggEntry createMany
   */
  export type EggEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EggEntries.
     */
    data: EggEntryCreateManyInput | EggEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EggEntry createManyAndReturn
   */
  export type EggEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EggEntry
     */
    select?: EggEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EggEntry
     */
    omit?: EggEntryOmit<ExtArgs> | null
    /**
     * The data used to create many EggEntries.
     */
    data: EggEntryCreateManyInput | EggEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EggEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EggEntry update
   */
  export type EggEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EggEntry
     */
    select?: EggEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EggEntry
     */
    omit?: EggEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EggEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a EggEntry.
     */
    data: XOR<EggEntryUpdateInput, EggEntryUncheckedUpdateInput>
    /**
     * Choose, which EggEntry to update.
     */
    where: EggEntryWhereUniqueInput
  }

  /**
   * EggEntry updateMany
   */
  export type EggEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EggEntries.
     */
    data: XOR<EggEntryUpdateManyMutationInput, EggEntryUncheckedUpdateManyInput>
    /**
     * Filter which EggEntries to update
     */
    where?: EggEntryWhereInput
    /**
     * Limit how many EggEntries to update.
     */
    limit?: number
  }

  /**
   * EggEntry updateManyAndReturn
   */
  export type EggEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EggEntry
     */
    select?: EggEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EggEntry
     */
    omit?: EggEntryOmit<ExtArgs> | null
    /**
     * The data used to update EggEntries.
     */
    data: XOR<EggEntryUpdateManyMutationInput, EggEntryUncheckedUpdateManyInput>
    /**
     * Filter which EggEntries to update
     */
    where?: EggEntryWhereInput
    /**
     * Limit how many EggEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EggEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EggEntry upsert
   */
  export type EggEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EggEntry
     */
    select?: EggEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EggEntry
     */
    omit?: EggEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EggEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the EggEntry to update in case it exists.
     */
    where: EggEntryWhereUniqueInput
    /**
     * In case the EggEntry found by the `where` argument doesn't exist, create a new EggEntry with this data.
     */
    create: XOR<EggEntryCreateInput, EggEntryUncheckedCreateInput>
    /**
     * In case the EggEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EggEntryUpdateInput, EggEntryUncheckedUpdateInput>
  }

  /**
   * EggEntry delete
   */
  export type EggEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EggEntry
     */
    select?: EggEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EggEntry
     */
    omit?: EggEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EggEntryInclude<ExtArgs> | null
    /**
     * Filter which EggEntry to delete.
     */
    where: EggEntryWhereUniqueInput
  }

  /**
   * EggEntry deleteMany
   */
  export type EggEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EggEntries to delete
     */
    where?: EggEntryWhereInput
    /**
     * Limit how many EggEntries to delete.
     */
    limit?: number
  }

  /**
   * EggEntry without action
   */
  export type EggEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EggEntry
     */
    select?: EggEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EggEntry
     */
    omit?: EggEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EggEntryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ChickenScalarFieldEnum: {
    id: 'id',
    weight: 'weight',
    age: 'age',
    eggRate: 'eggRate',
    breed: 'breed',
    cageId: 'cageId'
  };

  export type ChickenScalarFieldEnum = (typeof ChickenScalarFieldEnum)[keyof typeof ChickenScalarFieldEnum]


  export const CageScalarFieldEnum: {
    id: 'id'
  };

  export type CageScalarFieldEnum = (typeof CageScalarFieldEnum)[keyof typeof CageScalarFieldEnum]


  export const WorkerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    salary: 'salary'
  };

  export type WorkerScalarFieldEnum = (typeof WorkerScalarFieldEnum)[keyof typeof WorkerScalarFieldEnum]


  export const WorkerCageScalarFieldEnum: {
    workerId: 'workerId',
    cageId: 'cageId'
  };

  export type WorkerCageScalarFieldEnum = (typeof WorkerCageScalarFieldEnum)[keyof typeof WorkerCageScalarFieldEnum]


  export const EggEntryScalarFieldEnum: {
    id: 'id',
    date: 'date',
    eggsLaid: 'eggsLaid',
    type: 'type',
    chickenId: 'chickenId'
  };

  export type EggEntryScalarFieldEnum = (typeof EggEntryScalarFieldEnum)[keyof typeof EggEntryScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EggType'
   */
  export type EnumEggTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EggType'>
    


  /**
   * Reference to a field of type 'EggType[]'
   */
  export type ListEnumEggTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EggType[]'>
    
  /**
   * Deep Input Types
   */


  export type ChickenWhereInput = {
    AND?: ChickenWhereInput | ChickenWhereInput[]
    OR?: ChickenWhereInput[]
    NOT?: ChickenWhereInput | ChickenWhereInput[]
    id?: IntFilter<"Chicken"> | number
    weight?: FloatFilter<"Chicken"> | number
    age?: IntFilter<"Chicken"> | number
    eggRate?: FloatFilter<"Chicken"> | number
    breed?: StringFilter<"Chicken"> | string
    cageId?: IntFilter<"Chicken"> | number
    cage?: XOR<CageScalarRelationFilter, CageWhereInput>
    eggEntries?: EggEntryListRelationFilter
  }

  export type ChickenOrderByWithRelationInput = {
    id?: SortOrder
    weight?: SortOrder
    age?: SortOrder
    eggRate?: SortOrder
    breed?: SortOrder
    cageId?: SortOrder
    cage?: CageOrderByWithRelationInput
    eggEntries?: EggEntryOrderByRelationAggregateInput
  }

  export type ChickenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChickenWhereInput | ChickenWhereInput[]
    OR?: ChickenWhereInput[]
    NOT?: ChickenWhereInput | ChickenWhereInput[]
    weight?: FloatFilter<"Chicken"> | number
    age?: IntFilter<"Chicken"> | number
    eggRate?: FloatFilter<"Chicken"> | number
    breed?: StringFilter<"Chicken"> | string
    cageId?: IntFilter<"Chicken"> | number
    cage?: XOR<CageScalarRelationFilter, CageWhereInput>
    eggEntries?: EggEntryListRelationFilter
  }, "id">

  export type ChickenOrderByWithAggregationInput = {
    id?: SortOrder
    weight?: SortOrder
    age?: SortOrder
    eggRate?: SortOrder
    breed?: SortOrder
    cageId?: SortOrder
    _count?: ChickenCountOrderByAggregateInput
    _avg?: ChickenAvgOrderByAggregateInput
    _max?: ChickenMaxOrderByAggregateInput
    _min?: ChickenMinOrderByAggregateInput
    _sum?: ChickenSumOrderByAggregateInput
  }

  export type ChickenScalarWhereWithAggregatesInput = {
    AND?: ChickenScalarWhereWithAggregatesInput | ChickenScalarWhereWithAggregatesInput[]
    OR?: ChickenScalarWhereWithAggregatesInput[]
    NOT?: ChickenScalarWhereWithAggregatesInput | ChickenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chicken"> | number
    weight?: FloatWithAggregatesFilter<"Chicken"> | number
    age?: IntWithAggregatesFilter<"Chicken"> | number
    eggRate?: FloatWithAggregatesFilter<"Chicken"> | number
    breed?: StringWithAggregatesFilter<"Chicken"> | string
    cageId?: IntWithAggregatesFilter<"Chicken"> | number
  }

  export type CageWhereInput = {
    AND?: CageWhereInput | CageWhereInput[]
    OR?: CageWhereInput[]
    NOT?: CageWhereInput | CageWhereInput[]
    id?: IntFilter<"Cage"> | number
    chicken?: ChickenListRelationFilter
    workers?: WorkerCageListRelationFilter
  }

  export type CageOrderByWithRelationInput = {
    id?: SortOrder
    chicken?: ChickenOrderByRelationAggregateInput
    workers?: WorkerCageOrderByRelationAggregateInput
  }

  export type CageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CageWhereInput | CageWhereInput[]
    OR?: CageWhereInput[]
    NOT?: CageWhereInput | CageWhereInput[]
    chicken?: ChickenListRelationFilter
    workers?: WorkerCageListRelationFilter
  }, "id">

  export type CageOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: CageCountOrderByAggregateInput
    _avg?: CageAvgOrderByAggregateInput
    _max?: CageMaxOrderByAggregateInput
    _min?: CageMinOrderByAggregateInput
    _sum?: CageSumOrderByAggregateInput
  }

  export type CageScalarWhereWithAggregatesInput = {
    AND?: CageScalarWhereWithAggregatesInput | CageScalarWhereWithAggregatesInput[]
    OR?: CageScalarWhereWithAggregatesInput[]
    NOT?: CageScalarWhereWithAggregatesInput | CageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cage"> | number
  }

  export type WorkerWhereInput = {
    AND?: WorkerWhereInput | WorkerWhereInput[]
    OR?: WorkerWhereInput[]
    NOT?: WorkerWhereInput | WorkerWhereInput[]
    id?: IntFilter<"Worker"> | number
    name?: StringFilter<"Worker"> | string
    salary?: FloatFilter<"Worker"> | number
    cages?: WorkerCageListRelationFilter
  }

  export type WorkerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    salary?: SortOrder
    cages?: WorkerCageOrderByRelationAggregateInput
  }

  export type WorkerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkerWhereInput | WorkerWhereInput[]
    OR?: WorkerWhereInput[]
    NOT?: WorkerWhereInput | WorkerWhereInput[]
    name?: StringFilter<"Worker"> | string
    salary?: FloatFilter<"Worker"> | number
    cages?: WorkerCageListRelationFilter
  }, "id">

  export type WorkerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    salary?: SortOrder
    _count?: WorkerCountOrderByAggregateInput
    _avg?: WorkerAvgOrderByAggregateInput
    _max?: WorkerMaxOrderByAggregateInput
    _min?: WorkerMinOrderByAggregateInput
    _sum?: WorkerSumOrderByAggregateInput
  }

  export type WorkerScalarWhereWithAggregatesInput = {
    AND?: WorkerScalarWhereWithAggregatesInput | WorkerScalarWhereWithAggregatesInput[]
    OR?: WorkerScalarWhereWithAggregatesInput[]
    NOT?: WorkerScalarWhereWithAggregatesInput | WorkerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Worker"> | number
    name?: StringWithAggregatesFilter<"Worker"> | string
    salary?: FloatWithAggregatesFilter<"Worker"> | number
  }

  export type WorkerCageWhereInput = {
    AND?: WorkerCageWhereInput | WorkerCageWhereInput[]
    OR?: WorkerCageWhereInput[]
    NOT?: WorkerCageWhereInput | WorkerCageWhereInput[]
    workerId?: IntFilter<"WorkerCage"> | number
    cageId?: IntFilter<"WorkerCage"> | number
    worker?: XOR<WorkerScalarRelationFilter, WorkerWhereInput>
    cage?: XOR<CageScalarRelationFilter, CageWhereInput>
  }

  export type WorkerCageOrderByWithRelationInput = {
    workerId?: SortOrder
    cageId?: SortOrder
    worker?: WorkerOrderByWithRelationInput
    cage?: CageOrderByWithRelationInput
  }

  export type WorkerCageWhereUniqueInput = Prisma.AtLeast<{
    workerId_cageId?: WorkerCageWorkerIdCageIdCompoundUniqueInput
    AND?: WorkerCageWhereInput | WorkerCageWhereInput[]
    OR?: WorkerCageWhereInput[]
    NOT?: WorkerCageWhereInput | WorkerCageWhereInput[]
    workerId?: IntFilter<"WorkerCage"> | number
    cageId?: IntFilter<"WorkerCage"> | number
    worker?: XOR<WorkerScalarRelationFilter, WorkerWhereInput>
    cage?: XOR<CageScalarRelationFilter, CageWhereInput>
  }, "workerId_cageId">

  export type WorkerCageOrderByWithAggregationInput = {
    workerId?: SortOrder
    cageId?: SortOrder
    _count?: WorkerCageCountOrderByAggregateInput
    _avg?: WorkerCageAvgOrderByAggregateInput
    _max?: WorkerCageMaxOrderByAggregateInput
    _min?: WorkerCageMinOrderByAggregateInput
    _sum?: WorkerCageSumOrderByAggregateInput
  }

  export type WorkerCageScalarWhereWithAggregatesInput = {
    AND?: WorkerCageScalarWhereWithAggregatesInput | WorkerCageScalarWhereWithAggregatesInput[]
    OR?: WorkerCageScalarWhereWithAggregatesInput[]
    NOT?: WorkerCageScalarWhereWithAggregatesInput | WorkerCageScalarWhereWithAggregatesInput[]
    workerId?: IntWithAggregatesFilter<"WorkerCage"> | number
    cageId?: IntWithAggregatesFilter<"WorkerCage"> | number
  }

  export type EggEntryWhereInput = {
    AND?: EggEntryWhereInput | EggEntryWhereInput[]
    OR?: EggEntryWhereInput[]
    NOT?: EggEntryWhereInput | EggEntryWhereInput[]
    id?: IntFilter<"EggEntry"> | number
    date?: DateTimeFilter<"EggEntry"> | Date | string
    eggsLaid?: IntFilter<"EggEntry"> | number
    type?: EnumEggTypeFilter<"EggEntry"> | $Enums.EggType
    chickenId?: IntFilter<"EggEntry"> | number
    chicken?: XOR<ChickenScalarRelationFilter, ChickenWhereInput>
  }

  export type EggEntryOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    eggsLaid?: SortOrder
    type?: SortOrder
    chickenId?: SortOrder
    chicken?: ChickenOrderByWithRelationInput
  }

  export type EggEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EggEntryWhereInput | EggEntryWhereInput[]
    OR?: EggEntryWhereInput[]
    NOT?: EggEntryWhereInput | EggEntryWhereInput[]
    date?: DateTimeFilter<"EggEntry"> | Date | string
    eggsLaid?: IntFilter<"EggEntry"> | number
    type?: EnumEggTypeFilter<"EggEntry"> | $Enums.EggType
    chickenId?: IntFilter<"EggEntry"> | number
    chicken?: XOR<ChickenScalarRelationFilter, ChickenWhereInput>
  }, "id">

  export type EggEntryOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    eggsLaid?: SortOrder
    type?: SortOrder
    chickenId?: SortOrder
    _count?: EggEntryCountOrderByAggregateInput
    _avg?: EggEntryAvgOrderByAggregateInput
    _max?: EggEntryMaxOrderByAggregateInput
    _min?: EggEntryMinOrderByAggregateInput
    _sum?: EggEntrySumOrderByAggregateInput
  }

  export type EggEntryScalarWhereWithAggregatesInput = {
    AND?: EggEntryScalarWhereWithAggregatesInput | EggEntryScalarWhereWithAggregatesInput[]
    OR?: EggEntryScalarWhereWithAggregatesInput[]
    NOT?: EggEntryScalarWhereWithAggregatesInput | EggEntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EggEntry"> | number
    date?: DateTimeWithAggregatesFilter<"EggEntry"> | Date | string
    eggsLaid?: IntWithAggregatesFilter<"EggEntry"> | number
    type?: EnumEggTypeWithAggregatesFilter<"EggEntry"> | $Enums.EggType
    chickenId?: IntWithAggregatesFilter<"EggEntry"> | number
  }

  export type ChickenCreateInput = {
    weight: number
    age: number
    eggRate: number
    breed: string
    cage: CageCreateNestedOneWithoutChickenInput
    eggEntries?: EggEntryCreateNestedManyWithoutChickenInput
  }

  export type ChickenUncheckedCreateInput = {
    id?: number
    weight: number
    age: number
    eggRate: number
    breed: string
    cageId: number
    eggEntries?: EggEntryUncheckedCreateNestedManyWithoutChickenInput
  }

  export type ChickenUpdateInput = {
    weight?: FloatFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    eggRate?: FloatFieldUpdateOperationsInput | number
    breed?: StringFieldUpdateOperationsInput | string
    cage?: CageUpdateOneRequiredWithoutChickenNestedInput
    eggEntries?: EggEntryUpdateManyWithoutChickenNestedInput
  }

  export type ChickenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    eggRate?: FloatFieldUpdateOperationsInput | number
    breed?: StringFieldUpdateOperationsInput | string
    cageId?: IntFieldUpdateOperationsInput | number
    eggEntries?: EggEntryUncheckedUpdateManyWithoutChickenNestedInput
  }

  export type ChickenCreateManyInput = {
    id?: number
    weight: number
    age: number
    eggRate: number
    breed: string
    cageId: number
  }

  export type ChickenUpdateManyMutationInput = {
    weight?: FloatFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    eggRate?: FloatFieldUpdateOperationsInput | number
    breed?: StringFieldUpdateOperationsInput | string
  }

  export type ChickenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    eggRate?: FloatFieldUpdateOperationsInput | number
    breed?: StringFieldUpdateOperationsInput | string
    cageId?: IntFieldUpdateOperationsInput | number
  }

  export type CageCreateInput = {
    chicken?: ChickenCreateNestedManyWithoutCageInput
    workers?: WorkerCageCreateNestedManyWithoutCageInput
  }

  export type CageUncheckedCreateInput = {
    id?: number
    chicken?: ChickenUncheckedCreateNestedManyWithoutCageInput
    workers?: WorkerCageUncheckedCreateNestedManyWithoutCageInput
  }

  export type CageUpdateInput = {
    chicken?: ChickenUpdateManyWithoutCageNestedInput
    workers?: WorkerCageUpdateManyWithoutCageNestedInput
  }

  export type CageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chicken?: ChickenUncheckedUpdateManyWithoutCageNestedInput
    workers?: WorkerCageUncheckedUpdateManyWithoutCageNestedInput
  }

  export type CageCreateManyInput = {
    id?: number
  }

  export type CageUpdateManyMutationInput = {

  }

  export type CageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type WorkerCreateInput = {
    name: string
    salary: number
    cages?: WorkerCageCreateNestedManyWithoutWorkerInput
  }

  export type WorkerUncheckedCreateInput = {
    id?: number
    name: string
    salary: number
    cages?: WorkerCageUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    cages?: WorkerCageUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
    cages?: WorkerCageUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerCreateManyInput = {
    id?: number
    name: string
    salary: number
  }

  export type WorkerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
  }

  export type WorkerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
  }

  export type WorkerCageCreateInput = {
    worker: WorkerCreateNestedOneWithoutCagesInput
    cage: CageCreateNestedOneWithoutWorkersInput
  }

  export type WorkerCageUncheckedCreateInput = {
    workerId: number
    cageId: number
  }

  export type WorkerCageUpdateInput = {
    worker?: WorkerUpdateOneRequiredWithoutCagesNestedInput
    cage?: CageUpdateOneRequiredWithoutWorkersNestedInput
  }

  export type WorkerCageUncheckedUpdateInput = {
    workerId?: IntFieldUpdateOperationsInput | number
    cageId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkerCageCreateManyInput = {
    workerId: number
    cageId: number
  }

  export type WorkerCageUpdateManyMutationInput = {

  }

  export type WorkerCageUncheckedUpdateManyInput = {
    workerId?: IntFieldUpdateOperationsInput | number
    cageId?: IntFieldUpdateOperationsInput | number
  }

  export type EggEntryCreateInput = {
    date: Date | string
    eggsLaid: number
    type?: $Enums.EggType
    chicken: ChickenCreateNestedOneWithoutEggEntriesInput
  }

  export type EggEntryUncheckedCreateInput = {
    id?: number
    date: Date | string
    eggsLaid: number
    type?: $Enums.EggType
    chickenId: number
  }

  export type EggEntryUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eggsLaid?: IntFieldUpdateOperationsInput | number
    type?: EnumEggTypeFieldUpdateOperationsInput | $Enums.EggType
    chicken?: ChickenUpdateOneRequiredWithoutEggEntriesNestedInput
  }

  export type EggEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eggsLaid?: IntFieldUpdateOperationsInput | number
    type?: EnumEggTypeFieldUpdateOperationsInput | $Enums.EggType
    chickenId?: IntFieldUpdateOperationsInput | number
  }

  export type EggEntryCreateManyInput = {
    id?: number
    date: Date | string
    eggsLaid: number
    type?: $Enums.EggType
    chickenId: number
  }

  export type EggEntryUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eggsLaid?: IntFieldUpdateOperationsInput | number
    type?: EnumEggTypeFieldUpdateOperationsInput | $Enums.EggType
  }

  export type EggEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eggsLaid?: IntFieldUpdateOperationsInput | number
    type?: EnumEggTypeFieldUpdateOperationsInput | $Enums.EggType
    chickenId?: IntFieldUpdateOperationsInput | number
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type CageScalarRelationFilter = {
    is?: CageWhereInput
    isNot?: CageWhereInput
  }

  export type EggEntryListRelationFilter = {
    every?: EggEntryWhereInput
    some?: EggEntryWhereInput
    none?: EggEntryWhereInput
  }

  export type EggEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChickenCountOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    age?: SortOrder
    eggRate?: SortOrder
    breed?: SortOrder
    cageId?: SortOrder
  }

  export type ChickenAvgOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    age?: SortOrder
    eggRate?: SortOrder
    cageId?: SortOrder
  }

  export type ChickenMaxOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    age?: SortOrder
    eggRate?: SortOrder
    breed?: SortOrder
    cageId?: SortOrder
  }

  export type ChickenMinOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    age?: SortOrder
    eggRate?: SortOrder
    breed?: SortOrder
    cageId?: SortOrder
  }

  export type ChickenSumOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    age?: SortOrder
    eggRate?: SortOrder
    cageId?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type ChickenListRelationFilter = {
    every?: ChickenWhereInput
    some?: ChickenWhereInput
    none?: ChickenWhereInput
  }

  export type WorkerCageListRelationFilter = {
    every?: WorkerCageWhereInput
    some?: WorkerCageWhereInput
    none?: WorkerCageWhereInput
  }

  export type ChickenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkerCageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CageCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CageMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CageMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorkerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    salary?: SortOrder
  }

  export type WorkerAvgOrderByAggregateInput = {
    id?: SortOrder
    salary?: SortOrder
  }

  export type WorkerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    salary?: SortOrder
  }

  export type WorkerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    salary?: SortOrder
  }

  export type WorkerSumOrderByAggregateInput = {
    id?: SortOrder
    salary?: SortOrder
  }

  export type WorkerScalarRelationFilter = {
    is?: WorkerWhereInput
    isNot?: WorkerWhereInput
  }

  export type WorkerCageWorkerIdCageIdCompoundUniqueInput = {
    workerId: number
    cageId: number
  }

  export type WorkerCageCountOrderByAggregateInput = {
    workerId?: SortOrder
    cageId?: SortOrder
  }

  export type WorkerCageAvgOrderByAggregateInput = {
    workerId?: SortOrder
    cageId?: SortOrder
  }

  export type WorkerCageMaxOrderByAggregateInput = {
    workerId?: SortOrder
    cageId?: SortOrder
  }

  export type WorkerCageMinOrderByAggregateInput = {
    workerId?: SortOrder
    cageId?: SortOrder
  }

  export type WorkerCageSumOrderByAggregateInput = {
    workerId?: SortOrder
    cageId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumEggTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EggType | EnumEggTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EggType[] | ListEnumEggTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EggType[] | ListEnumEggTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEggTypeFilter<$PrismaModel> | $Enums.EggType
  }

  export type ChickenScalarRelationFilter = {
    is?: ChickenWhereInput
    isNot?: ChickenWhereInput
  }

  export type EggEntryCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    eggsLaid?: SortOrder
    type?: SortOrder
    chickenId?: SortOrder
  }

  export type EggEntryAvgOrderByAggregateInput = {
    id?: SortOrder
    eggsLaid?: SortOrder
    chickenId?: SortOrder
  }

  export type EggEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    eggsLaid?: SortOrder
    type?: SortOrder
    chickenId?: SortOrder
  }

  export type EggEntryMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    eggsLaid?: SortOrder
    type?: SortOrder
    chickenId?: SortOrder
  }

  export type EggEntrySumOrderByAggregateInput = {
    id?: SortOrder
    eggsLaid?: SortOrder
    chickenId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumEggTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EggType | EnumEggTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EggType[] | ListEnumEggTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EggType[] | ListEnumEggTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEggTypeWithAggregatesFilter<$PrismaModel> | $Enums.EggType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEggTypeFilter<$PrismaModel>
    _max?: NestedEnumEggTypeFilter<$PrismaModel>
  }

  export type CageCreateNestedOneWithoutChickenInput = {
    create?: XOR<CageCreateWithoutChickenInput, CageUncheckedCreateWithoutChickenInput>
    connectOrCreate?: CageCreateOrConnectWithoutChickenInput
    connect?: CageWhereUniqueInput
  }

  export type EggEntryCreateNestedManyWithoutChickenInput = {
    create?: XOR<EggEntryCreateWithoutChickenInput, EggEntryUncheckedCreateWithoutChickenInput> | EggEntryCreateWithoutChickenInput[] | EggEntryUncheckedCreateWithoutChickenInput[]
    connectOrCreate?: EggEntryCreateOrConnectWithoutChickenInput | EggEntryCreateOrConnectWithoutChickenInput[]
    createMany?: EggEntryCreateManyChickenInputEnvelope
    connect?: EggEntryWhereUniqueInput | EggEntryWhereUniqueInput[]
  }

  export type EggEntryUncheckedCreateNestedManyWithoutChickenInput = {
    create?: XOR<EggEntryCreateWithoutChickenInput, EggEntryUncheckedCreateWithoutChickenInput> | EggEntryCreateWithoutChickenInput[] | EggEntryUncheckedCreateWithoutChickenInput[]
    connectOrCreate?: EggEntryCreateOrConnectWithoutChickenInput | EggEntryCreateOrConnectWithoutChickenInput[]
    createMany?: EggEntryCreateManyChickenInputEnvelope
    connect?: EggEntryWhereUniqueInput | EggEntryWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type CageUpdateOneRequiredWithoutChickenNestedInput = {
    create?: XOR<CageCreateWithoutChickenInput, CageUncheckedCreateWithoutChickenInput>
    connectOrCreate?: CageCreateOrConnectWithoutChickenInput
    upsert?: CageUpsertWithoutChickenInput
    connect?: CageWhereUniqueInput
    update?: XOR<XOR<CageUpdateToOneWithWhereWithoutChickenInput, CageUpdateWithoutChickenInput>, CageUncheckedUpdateWithoutChickenInput>
  }

  export type EggEntryUpdateManyWithoutChickenNestedInput = {
    create?: XOR<EggEntryCreateWithoutChickenInput, EggEntryUncheckedCreateWithoutChickenInput> | EggEntryCreateWithoutChickenInput[] | EggEntryUncheckedCreateWithoutChickenInput[]
    connectOrCreate?: EggEntryCreateOrConnectWithoutChickenInput | EggEntryCreateOrConnectWithoutChickenInput[]
    upsert?: EggEntryUpsertWithWhereUniqueWithoutChickenInput | EggEntryUpsertWithWhereUniqueWithoutChickenInput[]
    createMany?: EggEntryCreateManyChickenInputEnvelope
    set?: EggEntryWhereUniqueInput | EggEntryWhereUniqueInput[]
    disconnect?: EggEntryWhereUniqueInput | EggEntryWhereUniqueInput[]
    delete?: EggEntryWhereUniqueInput | EggEntryWhereUniqueInput[]
    connect?: EggEntryWhereUniqueInput | EggEntryWhereUniqueInput[]
    update?: EggEntryUpdateWithWhereUniqueWithoutChickenInput | EggEntryUpdateWithWhereUniqueWithoutChickenInput[]
    updateMany?: EggEntryUpdateManyWithWhereWithoutChickenInput | EggEntryUpdateManyWithWhereWithoutChickenInput[]
    deleteMany?: EggEntryScalarWhereInput | EggEntryScalarWhereInput[]
  }

  export type EggEntryUncheckedUpdateManyWithoutChickenNestedInput = {
    create?: XOR<EggEntryCreateWithoutChickenInput, EggEntryUncheckedCreateWithoutChickenInput> | EggEntryCreateWithoutChickenInput[] | EggEntryUncheckedCreateWithoutChickenInput[]
    connectOrCreate?: EggEntryCreateOrConnectWithoutChickenInput | EggEntryCreateOrConnectWithoutChickenInput[]
    upsert?: EggEntryUpsertWithWhereUniqueWithoutChickenInput | EggEntryUpsertWithWhereUniqueWithoutChickenInput[]
    createMany?: EggEntryCreateManyChickenInputEnvelope
    set?: EggEntryWhereUniqueInput | EggEntryWhereUniqueInput[]
    disconnect?: EggEntryWhereUniqueInput | EggEntryWhereUniqueInput[]
    delete?: EggEntryWhereUniqueInput | EggEntryWhereUniqueInput[]
    connect?: EggEntryWhereUniqueInput | EggEntryWhereUniqueInput[]
    update?: EggEntryUpdateWithWhereUniqueWithoutChickenInput | EggEntryUpdateWithWhereUniqueWithoutChickenInput[]
    updateMany?: EggEntryUpdateManyWithWhereWithoutChickenInput | EggEntryUpdateManyWithWhereWithoutChickenInput[]
    deleteMany?: EggEntryScalarWhereInput | EggEntryScalarWhereInput[]
  }

  export type ChickenCreateNestedManyWithoutCageInput = {
    create?: XOR<ChickenCreateWithoutCageInput, ChickenUncheckedCreateWithoutCageInput> | ChickenCreateWithoutCageInput[] | ChickenUncheckedCreateWithoutCageInput[]
    connectOrCreate?: ChickenCreateOrConnectWithoutCageInput | ChickenCreateOrConnectWithoutCageInput[]
    createMany?: ChickenCreateManyCageInputEnvelope
    connect?: ChickenWhereUniqueInput | ChickenWhereUniqueInput[]
  }

  export type WorkerCageCreateNestedManyWithoutCageInput = {
    create?: XOR<WorkerCageCreateWithoutCageInput, WorkerCageUncheckedCreateWithoutCageInput> | WorkerCageCreateWithoutCageInput[] | WorkerCageUncheckedCreateWithoutCageInput[]
    connectOrCreate?: WorkerCageCreateOrConnectWithoutCageInput | WorkerCageCreateOrConnectWithoutCageInput[]
    createMany?: WorkerCageCreateManyCageInputEnvelope
    connect?: WorkerCageWhereUniqueInput | WorkerCageWhereUniqueInput[]
  }

  export type ChickenUncheckedCreateNestedManyWithoutCageInput = {
    create?: XOR<ChickenCreateWithoutCageInput, ChickenUncheckedCreateWithoutCageInput> | ChickenCreateWithoutCageInput[] | ChickenUncheckedCreateWithoutCageInput[]
    connectOrCreate?: ChickenCreateOrConnectWithoutCageInput | ChickenCreateOrConnectWithoutCageInput[]
    createMany?: ChickenCreateManyCageInputEnvelope
    connect?: ChickenWhereUniqueInput | ChickenWhereUniqueInput[]
  }

  export type WorkerCageUncheckedCreateNestedManyWithoutCageInput = {
    create?: XOR<WorkerCageCreateWithoutCageInput, WorkerCageUncheckedCreateWithoutCageInput> | WorkerCageCreateWithoutCageInput[] | WorkerCageUncheckedCreateWithoutCageInput[]
    connectOrCreate?: WorkerCageCreateOrConnectWithoutCageInput | WorkerCageCreateOrConnectWithoutCageInput[]
    createMany?: WorkerCageCreateManyCageInputEnvelope
    connect?: WorkerCageWhereUniqueInput | WorkerCageWhereUniqueInput[]
  }

  export type ChickenUpdateManyWithoutCageNestedInput = {
    create?: XOR<ChickenCreateWithoutCageInput, ChickenUncheckedCreateWithoutCageInput> | ChickenCreateWithoutCageInput[] | ChickenUncheckedCreateWithoutCageInput[]
    connectOrCreate?: ChickenCreateOrConnectWithoutCageInput | ChickenCreateOrConnectWithoutCageInput[]
    upsert?: ChickenUpsertWithWhereUniqueWithoutCageInput | ChickenUpsertWithWhereUniqueWithoutCageInput[]
    createMany?: ChickenCreateManyCageInputEnvelope
    set?: ChickenWhereUniqueInput | ChickenWhereUniqueInput[]
    disconnect?: ChickenWhereUniqueInput | ChickenWhereUniqueInput[]
    delete?: ChickenWhereUniqueInput | ChickenWhereUniqueInput[]
    connect?: ChickenWhereUniqueInput | ChickenWhereUniqueInput[]
    update?: ChickenUpdateWithWhereUniqueWithoutCageInput | ChickenUpdateWithWhereUniqueWithoutCageInput[]
    updateMany?: ChickenUpdateManyWithWhereWithoutCageInput | ChickenUpdateManyWithWhereWithoutCageInput[]
    deleteMany?: ChickenScalarWhereInput | ChickenScalarWhereInput[]
  }

  export type WorkerCageUpdateManyWithoutCageNestedInput = {
    create?: XOR<WorkerCageCreateWithoutCageInput, WorkerCageUncheckedCreateWithoutCageInput> | WorkerCageCreateWithoutCageInput[] | WorkerCageUncheckedCreateWithoutCageInput[]
    connectOrCreate?: WorkerCageCreateOrConnectWithoutCageInput | WorkerCageCreateOrConnectWithoutCageInput[]
    upsert?: WorkerCageUpsertWithWhereUniqueWithoutCageInput | WorkerCageUpsertWithWhereUniqueWithoutCageInput[]
    createMany?: WorkerCageCreateManyCageInputEnvelope
    set?: WorkerCageWhereUniqueInput | WorkerCageWhereUniqueInput[]
    disconnect?: WorkerCageWhereUniqueInput | WorkerCageWhereUniqueInput[]
    delete?: WorkerCageWhereUniqueInput | WorkerCageWhereUniqueInput[]
    connect?: WorkerCageWhereUniqueInput | WorkerCageWhereUniqueInput[]
    update?: WorkerCageUpdateWithWhereUniqueWithoutCageInput | WorkerCageUpdateWithWhereUniqueWithoutCageInput[]
    updateMany?: WorkerCageUpdateManyWithWhereWithoutCageInput | WorkerCageUpdateManyWithWhereWithoutCageInput[]
    deleteMany?: WorkerCageScalarWhereInput | WorkerCageScalarWhereInput[]
  }

  export type ChickenUncheckedUpdateManyWithoutCageNestedInput = {
    create?: XOR<ChickenCreateWithoutCageInput, ChickenUncheckedCreateWithoutCageInput> | ChickenCreateWithoutCageInput[] | ChickenUncheckedCreateWithoutCageInput[]
    connectOrCreate?: ChickenCreateOrConnectWithoutCageInput | ChickenCreateOrConnectWithoutCageInput[]
    upsert?: ChickenUpsertWithWhereUniqueWithoutCageInput | ChickenUpsertWithWhereUniqueWithoutCageInput[]
    createMany?: ChickenCreateManyCageInputEnvelope
    set?: ChickenWhereUniqueInput | ChickenWhereUniqueInput[]
    disconnect?: ChickenWhereUniqueInput | ChickenWhereUniqueInput[]
    delete?: ChickenWhereUniqueInput | ChickenWhereUniqueInput[]
    connect?: ChickenWhereUniqueInput | ChickenWhereUniqueInput[]
    update?: ChickenUpdateWithWhereUniqueWithoutCageInput | ChickenUpdateWithWhereUniqueWithoutCageInput[]
    updateMany?: ChickenUpdateManyWithWhereWithoutCageInput | ChickenUpdateManyWithWhereWithoutCageInput[]
    deleteMany?: ChickenScalarWhereInput | ChickenScalarWhereInput[]
  }

  export type WorkerCageUncheckedUpdateManyWithoutCageNestedInput = {
    create?: XOR<WorkerCageCreateWithoutCageInput, WorkerCageUncheckedCreateWithoutCageInput> | WorkerCageCreateWithoutCageInput[] | WorkerCageUncheckedCreateWithoutCageInput[]
    connectOrCreate?: WorkerCageCreateOrConnectWithoutCageInput | WorkerCageCreateOrConnectWithoutCageInput[]
    upsert?: WorkerCageUpsertWithWhereUniqueWithoutCageInput | WorkerCageUpsertWithWhereUniqueWithoutCageInput[]
    createMany?: WorkerCageCreateManyCageInputEnvelope
    set?: WorkerCageWhereUniqueInput | WorkerCageWhereUniqueInput[]
    disconnect?: WorkerCageWhereUniqueInput | WorkerCageWhereUniqueInput[]
    delete?: WorkerCageWhereUniqueInput | WorkerCageWhereUniqueInput[]
    connect?: WorkerCageWhereUniqueInput | WorkerCageWhereUniqueInput[]
    update?: WorkerCageUpdateWithWhereUniqueWithoutCageInput | WorkerCageUpdateWithWhereUniqueWithoutCageInput[]
    updateMany?: WorkerCageUpdateManyWithWhereWithoutCageInput | WorkerCageUpdateManyWithWhereWithoutCageInput[]
    deleteMany?: WorkerCageScalarWhereInput | WorkerCageScalarWhereInput[]
  }

  export type WorkerCageCreateNestedManyWithoutWorkerInput = {
    create?: XOR<WorkerCageCreateWithoutWorkerInput, WorkerCageUncheckedCreateWithoutWorkerInput> | WorkerCageCreateWithoutWorkerInput[] | WorkerCageUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: WorkerCageCreateOrConnectWithoutWorkerInput | WorkerCageCreateOrConnectWithoutWorkerInput[]
    createMany?: WorkerCageCreateManyWorkerInputEnvelope
    connect?: WorkerCageWhereUniqueInput | WorkerCageWhereUniqueInput[]
  }

  export type WorkerCageUncheckedCreateNestedManyWithoutWorkerInput = {
    create?: XOR<WorkerCageCreateWithoutWorkerInput, WorkerCageUncheckedCreateWithoutWorkerInput> | WorkerCageCreateWithoutWorkerInput[] | WorkerCageUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: WorkerCageCreateOrConnectWithoutWorkerInput | WorkerCageCreateOrConnectWithoutWorkerInput[]
    createMany?: WorkerCageCreateManyWorkerInputEnvelope
    connect?: WorkerCageWhereUniqueInput | WorkerCageWhereUniqueInput[]
  }

  export type WorkerCageUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<WorkerCageCreateWithoutWorkerInput, WorkerCageUncheckedCreateWithoutWorkerInput> | WorkerCageCreateWithoutWorkerInput[] | WorkerCageUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: WorkerCageCreateOrConnectWithoutWorkerInput | WorkerCageCreateOrConnectWithoutWorkerInput[]
    upsert?: WorkerCageUpsertWithWhereUniqueWithoutWorkerInput | WorkerCageUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: WorkerCageCreateManyWorkerInputEnvelope
    set?: WorkerCageWhereUniqueInput | WorkerCageWhereUniqueInput[]
    disconnect?: WorkerCageWhereUniqueInput | WorkerCageWhereUniqueInput[]
    delete?: WorkerCageWhereUniqueInput | WorkerCageWhereUniqueInput[]
    connect?: WorkerCageWhereUniqueInput | WorkerCageWhereUniqueInput[]
    update?: WorkerCageUpdateWithWhereUniqueWithoutWorkerInput | WorkerCageUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: WorkerCageUpdateManyWithWhereWithoutWorkerInput | WorkerCageUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: WorkerCageScalarWhereInput | WorkerCageScalarWhereInput[]
  }

  export type WorkerCageUncheckedUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<WorkerCageCreateWithoutWorkerInput, WorkerCageUncheckedCreateWithoutWorkerInput> | WorkerCageCreateWithoutWorkerInput[] | WorkerCageUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: WorkerCageCreateOrConnectWithoutWorkerInput | WorkerCageCreateOrConnectWithoutWorkerInput[]
    upsert?: WorkerCageUpsertWithWhereUniqueWithoutWorkerInput | WorkerCageUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: WorkerCageCreateManyWorkerInputEnvelope
    set?: WorkerCageWhereUniqueInput | WorkerCageWhereUniqueInput[]
    disconnect?: WorkerCageWhereUniqueInput | WorkerCageWhereUniqueInput[]
    delete?: WorkerCageWhereUniqueInput | WorkerCageWhereUniqueInput[]
    connect?: WorkerCageWhereUniqueInput | WorkerCageWhereUniqueInput[]
    update?: WorkerCageUpdateWithWhereUniqueWithoutWorkerInput | WorkerCageUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: WorkerCageUpdateManyWithWhereWithoutWorkerInput | WorkerCageUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: WorkerCageScalarWhereInput | WorkerCageScalarWhereInput[]
  }

  export type WorkerCreateNestedOneWithoutCagesInput = {
    create?: XOR<WorkerCreateWithoutCagesInput, WorkerUncheckedCreateWithoutCagesInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutCagesInput
    connect?: WorkerWhereUniqueInput
  }

  export type CageCreateNestedOneWithoutWorkersInput = {
    create?: XOR<CageCreateWithoutWorkersInput, CageUncheckedCreateWithoutWorkersInput>
    connectOrCreate?: CageCreateOrConnectWithoutWorkersInput
    connect?: CageWhereUniqueInput
  }

  export type WorkerUpdateOneRequiredWithoutCagesNestedInput = {
    create?: XOR<WorkerCreateWithoutCagesInput, WorkerUncheckedCreateWithoutCagesInput>
    connectOrCreate?: WorkerCreateOrConnectWithoutCagesInput
    upsert?: WorkerUpsertWithoutCagesInput
    connect?: WorkerWhereUniqueInput
    update?: XOR<XOR<WorkerUpdateToOneWithWhereWithoutCagesInput, WorkerUpdateWithoutCagesInput>, WorkerUncheckedUpdateWithoutCagesInput>
  }

  export type CageUpdateOneRequiredWithoutWorkersNestedInput = {
    create?: XOR<CageCreateWithoutWorkersInput, CageUncheckedCreateWithoutWorkersInput>
    connectOrCreate?: CageCreateOrConnectWithoutWorkersInput
    upsert?: CageUpsertWithoutWorkersInput
    connect?: CageWhereUniqueInput
    update?: XOR<XOR<CageUpdateToOneWithWhereWithoutWorkersInput, CageUpdateWithoutWorkersInput>, CageUncheckedUpdateWithoutWorkersInput>
  }

  export type ChickenCreateNestedOneWithoutEggEntriesInput = {
    create?: XOR<ChickenCreateWithoutEggEntriesInput, ChickenUncheckedCreateWithoutEggEntriesInput>
    connectOrCreate?: ChickenCreateOrConnectWithoutEggEntriesInput
    connect?: ChickenWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumEggTypeFieldUpdateOperationsInput = {
    set?: $Enums.EggType
  }

  export type ChickenUpdateOneRequiredWithoutEggEntriesNestedInput = {
    create?: XOR<ChickenCreateWithoutEggEntriesInput, ChickenUncheckedCreateWithoutEggEntriesInput>
    connectOrCreate?: ChickenCreateOrConnectWithoutEggEntriesInput
    upsert?: ChickenUpsertWithoutEggEntriesInput
    connect?: ChickenWhereUniqueInput
    update?: XOR<XOR<ChickenUpdateToOneWithWhereWithoutEggEntriesInput, ChickenUpdateWithoutEggEntriesInput>, ChickenUncheckedUpdateWithoutEggEntriesInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumEggTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EggType | EnumEggTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EggType[] | ListEnumEggTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EggType[] | ListEnumEggTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEggTypeFilter<$PrismaModel> | $Enums.EggType
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumEggTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EggType | EnumEggTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EggType[] | ListEnumEggTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EggType[] | ListEnumEggTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEggTypeWithAggregatesFilter<$PrismaModel> | $Enums.EggType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEggTypeFilter<$PrismaModel>
    _max?: NestedEnumEggTypeFilter<$PrismaModel>
  }

  export type CageCreateWithoutChickenInput = {
    workers?: WorkerCageCreateNestedManyWithoutCageInput
  }

  export type CageUncheckedCreateWithoutChickenInput = {
    id?: number
    workers?: WorkerCageUncheckedCreateNestedManyWithoutCageInput
  }

  export type CageCreateOrConnectWithoutChickenInput = {
    where: CageWhereUniqueInput
    create: XOR<CageCreateWithoutChickenInput, CageUncheckedCreateWithoutChickenInput>
  }

  export type EggEntryCreateWithoutChickenInput = {
    date: Date | string
    eggsLaid: number
    type?: $Enums.EggType
  }

  export type EggEntryUncheckedCreateWithoutChickenInput = {
    id?: number
    date: Date | string
    eggsLaid: number
    type?: $Enums.EggType
  }

  export type EggEntryCreateOrConnectWithoutChickenInput = {
    where: EggEntryWhereUniqueInput
    create: XOR<EggEntryCreateWithoutChickenInput, EggEntryUncheckedCreateWithoutChickenInput>
  }

  export type EggEntryCreateManyChickenInputEnvelope = {
    data: EggEntryCreateManyChickenInput | EggEntryCreateManyChickenInput[]
    skipDuplicates?: boolean
  }

  export type CageUpsertWithoutChickenInput = {
    update: XOR<CageUpdateWithoutChickenInput, CageUncheckedUpdateWithoutChickenInput>
    create: XOR<CageCreateWithoutChickenInput, CageUncheckedCreateWithoutChickenInput>
    where?: CageWhereInput
  }

  export type CageUpdateToOneWithWhereWithoutChickenInput = {
    where?: CageWhereInput
    data: XOR<CageUpdateWithoutChickenInput, CageUncheckedUpdateWithoutChickenInput>
  }

  export type CageUpdateWithoutChickenInput = {
    workers?: WorkerCageUpdateManyWithoutCageNestedInput
  }

  export type CageUncheckedUpdateWithoutChickenInput = {
    id?: IntFieldUpdateOperationsInput | number
    workers?: WorkerCageUncheckedUpdateManyWithoutCageNestedInput
  }

  export type EggEntryUpsertWithWhereUniqueWithoutChickenInput = {
    where: EggEntryWhereUniqueInput
    update: XOR<EggEntryUpdateWithoutChickenInput, EggEntryUncheckedUpdateWithoutChickenInput>
    create: XOR<EggEntryCreateWithoutChickenInput, EggEntryUncheckedCreateWithoutChickenInput>
  }

  export type EggEntryUpdateWithWhereUniqueWithoutChickenInput = {
    where: EggEntryWhereUniqueInput
    data: XOR<EggEntryUpdateWithoutChickenInput, EggEntryUncheckedUpdateWithoutChickenInput>
  }

  export type EggEntryUpdateManyWithWhereWithoutChickenInput = {
    where: EggEntryScalarWhereInput
    data: XOR<EggEntryUpdateManyMutationInput, EggEntryUncheckedUpdateManyWithoutChickenInput>
  }

  export type EggEntryScalarWhereInput = {
    AND?: EggEntryScalarWhereInput | EggEntryScalarWhereInput[]
    OR?: EggEntryScalarWhereInput[]
    NOT?: EggEntryScalarWhereInput | EggEntryScalarWhereInput[]
    id?: IntFilter<"EggEntry"> | number
    date?: DateTimeFilter<"EggEntry"> | Date | string
    eggsLaid?: IntFilter<"EggEntry"> | number
    type?: EnumEggTypeFilter<"EggEntry"> | $Enums.EggType
    chickenId?: IntFilter<"EggEntry"> | number
  }

  export type ChickenCreateWithoutCageInput = {
    weight: number
    age: number
    eggRate: number
    breed: string
    eggEntries?: EggEntryCreateNestedManyWithoutChickenInput
  }

  export type ChickenUncheckedCreateWithoutCageInput = {
    id?: number
    weight: number
    age: number
    eggRate: number
    breed: string
    eggEntries?: EggEntryUncheckedCreateNestedManyWithoutChickenInput
  }

  export type ChickenCreateOrConnectWithoutCageInput = {
    where: ChickenWhereUniqueInput
    create: XOR<ChickenCreateWithoutCageInput, ChickenUncheckedCreateWithoutCageInput>
  }

  export type ChickenCreateManyCageInputEnvelope = {
    data: ChickenCreateManyCageInput | ChickenCreateManyCageInput[]
    skipDuplicates?: boolean
  }

  export type WorkerCageCreateWithoutCageInput = {
    worker: WorkerCreateNestedOneWithoutCagesInput
  }

  export type WorkerCageUncheckedCreateWithoutCageInput = {
    workerId: number
  }

  export type WorkerCageCreateOrConnectWithoutCageInput = {
    where: WorkerCageWhereUniqueInput
    create: XOR<WorkerCageCreateWithoutCageInput, WorkerCageUncheckedCreateWithoutCageInput>
  }

  export type WorkerCageCreateManyCageInputEnvelope = {
    data: WorkerCageCreateManyCageInput | WorkerCageCreateManyCageInput[]
    skipDuplicates?: boolean
  }

  export type ChickenUpsertWithWhereUniqueWithoutCageInput = {
    where: ChickenWhereUniqueInput
    update: XOR<ChickenUpdateWithoutCageInput, ChickenUncheckedUpdateWithoutCageInput>
    create: XOR<ChickenCreateWithoutCageInput, ChickenUncheckedCreateWithoutCageInput>
  }

  export type ChickenUpdateWithWhereUniqueWithoutCageInput = {
    where: ChickenWhereUniqueInput
    data: XOR<ChickenUpdateWithoutCageInput, ChickenUncheckedUpdateWithoutCageInput>
  }

  export type ChickenUpdateManyWithWhereWithoutCageInput = {
    where: ChickenScalarWhereInput
    data: XOR<ChickenUpdateManyMutationInput, ChickenUncheckedUpdateManyWithoutCageInput>
  }

  export type ChickenScalarWhereInput = {
    AND?: ChickenScalarWhereInput | ChickenScalarWhereInput[]
    OR?: ChickenScalarWhereInput[]
    NOT?: ChickenScalarWhereInput | ChickenScalarWhereInput[]
    id?: IntFilter<"Chicken"> | number
    weight?: FloatFilter<"Chicken"> | number
    age?: IntFilter<"Chicken"> | number
    eggRate?: FloatFilter<"Chicken"> | number
    breed?: StringFilter<"Chicken"> | string
    cageId?: IntFilter<"Chicken"> | number
  }

  export type WorkerCageUpsertWithWhereUniqueWithoutCageInput = {
    where: WorkerCageWhereUniqueInput
    update: XOR<WorkerCageUpdateWithoutCageInput, WorkerCageUncheckedUpdateWithoutCageInput>
    create: XOR<WorkerCageCreateWithoutCageInput, WorkerCageUncheckedCreateWithoutCageInput>
  }

  export type WorkerCageUpdateWithWhereUniqueWithoutCageInput = {
    where: WorkerCageWhereUniqueInput
    data: XOR<WorkerCageUpdateWithoutCageInput, WorkerCageUncheckedUpdateWithoutCageInput>
  }

  export type WorkerCageUpdateManyWithWhereWithoutCageInput = {
    where: WorkerCageScalarWhereInput
    data: XOR<WorkerCageUpdateManyMutationInput, WorkerCageUncheckedUpdateManyWithoutCageInput>
  }

  export type WorkerCageScalarWhereInput = {
    AND?: WorkerCageScalarWhereInput | WorkerCageScalarWhereInput[]
    OR?: WorkerCageScalarWhereInput[]
    NOT?: WorkerCageScalarWhereInput | WorkerCageScalarWhereInput[]
    workerId?: IntFilter<"WorkerCage"> | number
    cageId?: IntFilter<"WorkerCage"> | number
  }

  export type WorkerCageCreateWithoutWorkerInput = {
    cage: CageCreateNestedOneWithoutWorkersInput
  }

  export type WorkerCageUncheckedCreateWithoutWorkerInput = {
    cageId: number
  }

  export type WorkerCageCreateOrConnectWithoutWorkerInput = {
    where: WorkerCageWhereUniqueInput
    create: XOR<WorkerCageCreateWithoutWorkerInput, WorkerCageUncheckedCreateWithoutWorkerInput>
  }

  export type WorkerCageCreateManyWorkerInputEnvelope = {
    data: WorkerCageCreateManyWorkerInput | WorkerCageCreateManyWorkerInput[]
    skipDuplicates?: boolean
  }

  export type WorkerCageUpsertWithWhereUniqueWithoutWorkerInput = {
    where: WorkerCageWhereUniqueInput
    update: XOR<WorkerCageUpdateWithoutWorkerInput, WorkerCageUncheckedUpdateWithoutWorkerInput>
    create: XOR<WorkerCageCreateWithoutWorkerInput, WorkerCageUncheckedCreateWithoutWorkerInput>
  }

  export type WorkerCageUpdateWithWhereUniqueWithoutWorkerInput = {
    where: WorkerCageWhereUniqueInput
    data: XOR<WorkerCageUpdateWithoutWorkerInput, WorkerCageUncheckedUpdateWithoutWorkerInput>
  }

  export type WorkerCageUpdateManyWithWhereWithoutWorkerInput = {
    where: WorkerCageScalarWhereInput
    data: XOR<WorkerCageUpdateManyMutationInput, WorkerCageUncheckedUpdateManyWithoutWorkerInput>
  }

  export type WorkerCreateWithoutCagesInput = {
    name: string
    salary: number
  }

  export type WorkerUncheckedCreateWithoutCagesInput = {
    id?: number
    name: string
    salary: number
  }

  export type WorkerCreateOrConnectWithoutCagesInput = {
    where: WorkerWhereUniqueInput
    create: XOR<WorkerCreateWithoutCagesInput, WorkerUncheckedCreateWithoutCagesInput>
  }

  export type CageCreateWithoutWorkersInput = {
    chicken?: ChickenCreateNestedManyWithoutCageInput
  }

  export type CageUncheckedCreateWithoutWorkersInput = {
    id?: number
    chicken?: ChickenUncheckedCreateNestedManyWithoutCageInput
  }

  export type CageCreateOrConnectWithoutWorkersInput = {
    where: CageWhereUniqueInput
    create: XOR<CageCreateWithoutWorkersInput, CageUncheckedCreateWithoutWorkersInput>
  }

  export type WorkerUpsertWithoutCagesInput = {
    update: XOR<WorkerUpdateWithoutCagesInput, WorkerUncheckedUpdateWithoutCagesInput>
    create: XOR<WorkerCreateWithoutCagesInput, WorkerUncheckedCreateWithoutCagesInput>
    where?: WorkerWhereInput
  }

  export type WorkerUpdateToOneWithWhereWithoutCagesInput = {
    where?: WorkerWhereInput
    data: XOR<WorkerUpdateWithoutCagesInput, WorkerUncheckedUpdateWithoutCagesInput>
  }

  export type WorkerUpdateWithoutCagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
  }

  export type WorkerUncheckedUpdateWithoutCagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    salary?: FloatFieldUpdateOperationsInput | number
  }

  export type CageUpsertWithoutWorkersInput = {
    update: XOR<CageUpdateWithoutWorkersInput, CageUncheckedUpdateWithoutWorkersInput>
    create: XOR<CageCreateWithoutWorkersInput, CageUncheckedCreateWithoutWorkersInput>
    where?: CageWhereInput
  }

  export type CageUpdateToOneWithWhereWithoutWorkersInput = {
    where?: CageWhereInput
    data: XOR<CageUpdateWithoutWorkersInput, CageUncheckedUpdateWithoutWorkersInput>
  }

  export type CageUpdateWithoutWorkersInput = {
    chicken?: ChickenUpdateManyWithoutCageNestedInput
  }

  export type CageUncheckedUpdateWithoutWorkersInput = {
    id?: IntFieldUpdateOperationsInput | number
    chicken?: ChickenUncheckedUpdateManyWithoutCageNestedInput
  }

  export type ChickenCreateWithoutEggEntriesInput = {
    weight: number
    age: number
    eggRate: number
    breed: string
    cage: CageCreateNestedOneWithoutChickenInput
  }

  export type ChickenUncheckedCreateWithoutEggEntriesInput = {
    id?: number
    weight: number
    age: number
    eggRate: number
    breed: string
    cageId: number
  }

  export type ChickenCreateOrConnectWithoutEggEntriesInput = {
    where: ChickenWhereUniqueInput
    create: XOR<ChickenCreateWithoutEggEntriesInput, ChickenUncheckedCreateWithoutEggEntriesInput>
  }

  export type ChickenUpsertWithoutEggEntriesInput = {
    update: XOR<ChickenUpdateWithoutEggEntriesInput, ChickenUncheckedUpdateWithoutEggEntriesInput>
    create: XOR<ChickenCreateWithoutEggEntriesInput, ChickenUncheckedCreateWithoutEggEntriesInput>
    where?: ChickenWhereInput
  }

  export type ChickenUpdateToOneWithWhereWithoutEggEntriesInput = {
    where?: ChickenWhereInput
    data: XOR<ChickenUpdateWithoutEggEntriesInput, ChickenUncheckedUpdateWithoutEggEntriesInput>
  }

  export type ChickenUpdateWithoutEggEntriesInput = {
    weight?: FloatFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    eggRate?: FloatFieldUpdateOperationsInput | number
    breed?: StringFieldUpdateOperationsInput | string
    cage?: CageUpdateOneRequiredWithoutChickenNestedInput
  }

  export type ChickenUncheckedUpdateWithoutEggEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    eggRate?: FloatFieldUpdateOperationsInput | number
    breed?: StringFieldUpdateOperationsInput | string
    cageId?: IntFieldUpdateOperationsInput | number
  }

  export type EggEntryCreateManyChickenInput = {
    id?: number
    date: Date | string
    eggsLaid: number
    type?: $Enums.EggType
  }

  export type EggEntryUpdateWithoutChickenInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eggsLaid?: IntFieldUpdateOperationsInput | number
    type?: EnumEggTypeFieldUpdateOperationsInput | $Enums.EggType
  }

  export type EggEntryUncheckedUpdateWithoutChickenInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eggsLaid?: IntFieldUpdateOperationsInput | number
    type?: EnumEggTypeFieldUpdateOperationsInput | $Enums.EggType
  }

  export type EggEntryUncheckedUpdateManyWithoutChickenInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    eggsLaid?: IntFieldUpdateOperationsInput | number
    type?: EnumEggTypeFieldUpdateOperationsInput | $Enums.EggType
  }

  export type ChickenCreateManyCageInput = {
    id?: number
    weight: number
    age: number
    eggRate: number
    breed: string
  }

  export type WorkerCageCreateManyCageInput = {
    workerId: number
  }

  export type ChickenUpdateWithoutCageInput = {
    weight?: FloatFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    eggRate?: FloatFieldUpdateOperationsInput | number
    breed?: StringFieldUpdateOperationsInput | string
    eggEntries?: EggEntryUpdateManyWithoutChickenNestedInput
  }

  export type ChickenUncheckedUpdateWithoutCageInput = {
    id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    eggRate?: FloatFieldUpdateOperationsInput | number
    breed?: StringFieldUpdateOperationsInput | string
    eggEntries?: EggEntryUncheckedUpdateManyWithoutChickenNestedInput
  }

  export type ChickenUncheckedUpdateManyWithoutCageInput = {
    id?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    age?: IntFieldUpdateOperationsInput | number
    eggRate?: FloatFieldUpdateOperationsInput | number
    breed?: StringFieldUpdateOperationsInput | string
  }

  export type WorkerCageUpdateWithoutCageInput = {
    worker?: WorkerUpdateOneRequiredWithoutCagesNestedInput
  }

  export type WorkerCageUncheckedUpdateWithoutCageInput = {
    workerId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkerCageUncheckedUpdateManyWithoutCageInput = {
    workerId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkerCageCreateManyWorkerInput = {
    cageId: number
  }

  export type WorkerCageUpdateWithoutWorkerInput = {
    cage?: CageUpdateOneRequiredWithoutWorkersNestedInput
  }

  export type WorkerCageUncheckedUpdateWithoutWorkerInput = {
    cageId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkerCageUncheckedUpdateManyWithoutWorkerInput = {
    cageId?: IntFieldUpdateOperationsInput | number
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