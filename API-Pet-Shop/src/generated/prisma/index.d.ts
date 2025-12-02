
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
 * Model Pet
 * 
 */
export type Pet = $Result.DefaultSelection<Prisma.$PetPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Funcionario
 * 
 */
export type Funcionario = $Result.DefaultSelection<Prisma.$FuncionarioPayload>
/**
 * Model Atendimento
 * 
 */
export type Atendimento = $Result.DefaultSelection<Prisma.$AtendimentoPayload>
/**
 * Model Solicitacao
 * 
 */
export type Solicitacao = $Result.DefaultSelection<Prisma.$SolicitacaoPayload>
/**
 * Model Agendamento
 * 
 */
export type Agendamento = $Result.DefaultSelection<Prisma.$AgendamentoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pets
 * const pets = await prisma.pet.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Pets
   * const pets = await prisma.pet.findMany()
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
   * `prisma.pet`: Exposes CRUD operations for the **Pet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pet.findMany()
    * ```
    */
  get pet(): Prisma.PetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funcionario`: Exposes CRUD operations for the **Funcionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionario.findMany()
    * ```
    */
  get funcionario(): Prisma.FuncionarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atendimento`: Exposes CRUD operations for the **Atendimento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atendimentos
    * const atendimentos = await prisma.atendimento.findMany()
    * ```
    */
  get atendimento(): Prisma.AtendimentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solicitacao`: Exposes CRUD operations for the **Solicitacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Solicitacaos
    * const solicitacaos = await prisma.solicitacao.findMany()
    * ```
    */
  get solicitacao(): Prisma.SolicitacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agendamento`: Exposes CRUD operations for the **Agendamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agendamentos
    * const agendamentos = await prisma.agendamento.findMany()
    * ```
    */
  get agendamento(): Prisma.AgendamentoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Pet: 'Pet',
    Cliente: 'Cliente',
    Funcionario: 'Funcionario',
    Atendimento: 'Atendimento',
    Solicitacao: 'Solicitacao',
    Agendamento: 'Agendamento'
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
      modelProps: "pet" | "cliente" | "funcionario" | "atendimento" | "solicitacao" | "agendamento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Pet: {
        payload: Prisma.$PetPayload<ExtArgs>
        fields: Prisma.PetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findFirst: {
            args: Prisma.PetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findMany: {
            args: Prisma.PetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          create: {
            args: Prisma.PetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          createMany: {
            args: Prisma.PetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          delete: {
            args: Prisma.PetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          update: {
            args: Prisma.PetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          deleteMany: {
            args: Prisma.PetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          upsert: {
            args: Prisma.PetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          aggregate: {
            args: Prisma.PetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePet>
          }
          groupBy: {
            args: Prisma.PetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetCountArgs<ExtArgs>
            result: $Utils.Optional<PetCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Funcionario: {
        payload: Prisma.$FuncionarioPayload<ExtArgs>
        fields: Prisma.FuncionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuncionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuncionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findFirst: {
            args: Prisma.FuncionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuncionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findMany: {
            args: Prisma.FuncionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          create: {
            args: Prisma.FuncionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          createMany: {
            args: Prisma.FuncionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FuncionarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          delete: {
            args: Prisma.FuncionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          update: {
            args: Prisma.FuncionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          deleteMany: {
            args: Prisma.FuncionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuncionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FuncionarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          upsert: {
            args: Prisma.FuncionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          aggregate: {
            args: Prisma.FuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionario>
          }
          groupBy: {
            args: Prisma.FuncionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuncionarioCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioCountAggregateOutputType> | number
          }
        }
      }
      Atendimento: {
        payload: Prisma.$AtendimentoPayload<ExtArgs>
        fields: Prisma.AtendimentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtendimentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtendimentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          findFirst: {
            args: Prisma.AtendimentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtendimentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          findMany: {
            args: Prisma.AtendimentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>[]
          }
          create: {
            args: Prisma.AtendimentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          createMany: {
            args: Prisma.AtendimentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtendimentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>[]
          }
          delete: {
            args: Prisma.AtendimentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          update: {
            args: Prisma.AtendimentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          deleteMany: {
            args: Prisma.AtendimentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtendimentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtendimentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>[]
          }
          upsert: {
            args: Prisma.AtendimentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtendimentoPayload>
          }
          aggregate: {
            args: Prisma.AtendimentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtendimento>
          }
          groupBy: {
            args: Prisma.AtendimentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtendimentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtendimentoCountArgs<ExtArgs>
            result: $Utils.Optional<AtendimentoCountAggregateOutputType> | number
          }
        }
      }
      Solicitacao: {
        payload: Prisma.$SolicitacaoPayload<ExtArgs>
        fields: Prisma.SolicitacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolicitacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolicitacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitacaoPayload>
          }
          findFirst: {
            args: Prisma.SolicitacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolicitacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitacaoPayload>
          }
          findMany: {
            args: Prisma.SolicitacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitacaoPayload>[]
          }
          create: {
            args: Prisma.SolicitacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitacaoPayload>
          }
          createMany: {
            args: Prisma.SolicitacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolicitacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitacaoPayload>[]
          }
          delete: {
            args: Prisma.SolicitacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitacaoPayload>
          }
          update: {
            args: Prisma.SolicitacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitacaoPayload>
          }
          deleteMany: {
            args: Prisma.SolicitacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolicitacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolicitacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitacaoPayload>[]
          }
          upsert: {
            args: Prisma.SolicitacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitacaoPayload>
          }
          aggregate: {
            args: Prisma.SolicitacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolicitacao>
          }
          groupBy: {
            args: Prisma.SolicitacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolicitacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolicitacaoCountArgs<ExtArgs>
            result: $Utils.Optional<SolicitacaoCountAggregateOutputType> | number
          }
        }
      }
      Agendamento: {
        payload: Prisma.$AgendamentoPayload<ExtArgs>
        fields: Prisma.AgendamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgendamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgendamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          findFirst: {
            args: Prisma.AgendamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgendamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          findMany: {
            args: Prisma.AgendamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>[]
          }
          create: {
            args: Prisma.AgendamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          createMany: {
            args: Prisma.AgendamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgendamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>[]
          }
          delete: {
            args: Prisma.AgendamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          update: {
            args: Prisma.AgendamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          deleteMany: {
            args: Prisma.AgendamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgendamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgendamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>[]
          }
          upsert: {
            args: Prisma.AgendamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          aggregate: {
            args: Prisma.AgendamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgendamento>
          }
          groupBy: {
            args: Prisma.AgendamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgendamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgendamentoCountArgs<ExtArgs>
            result: $Utils.Optional<AgendamentoCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    pet?: PetOmit
    cliente?: ClienteOmit
    funcionario?: FuncionarioOmit
    atendimento?: AtendimentoOmit
    solicitacao?: SolicitacaoOmit
    agendamento?: AgendamentoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type PetCountOutputType
   */

  export type PetCountOutputType = {
    atendimentos: number
    agendamentos: number
  }

  export type PetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimentos?: boolean | PetCountOutputTypeCountAtendimentosArgs
    agendamentos?: boolean | PetCountOutputTypeCountAgendamentosArgs
  }

  // Custom InputTypes
  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCountOutputType
     */
    select?: PetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountAtendimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtendimentoWhereInput
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    pets: number
    agendamentos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | ClienteCountOutputTypeCountPetsArgs
    agendamentos?: boolean | ClienteCountOutputTypeCountAgendamentosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentoWhereInput
  }


  /**
   * Count Type FuncionarioCountOutputType
   */

  export type FuncionarioCountOutputType = {
    atendimentos: number
  }

  export type FuncionarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimentos?: boolean | FuncionarioCountOutputTypeCountAtendimentosArgs
  }

  // Custom InputTypes
  /**
   * FuncionarioCountOutputType without action
   */
  export type FuncionarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuncionarioCountOutputType
     */
    select?: FuncionarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FuncionarioCountOutputType without action
   */
  export type FuncionarioCountOutputTypeCountAtendimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtendimentoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Pet
   */

  export type AggregatePet = {
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  export type PetAvgAggregateOutputType = {
    id: number | null
    idade: number | null
    idcliente: number | null
  }

  export type PetSumAggregateOutputType = {
    id: number | null
    idade: number | null
    idcliente: number | null
  }

  export type PetMinAggregateOutputType = {
    id: number | null
    nome: string | null
    especie: string | null
    raça: string | null
    sexo: string | null
    idade: number | null
    idcliente: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PetMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    especie: string | null
    raça: string | null
    sexo: string | null
    idade: number | null
    idcliente: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PetCountAggregateOutputType = {
    id: number
    nome: number
    especie: number
    raça: number
    sexo: number
    idade: number
    idcliente: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PetAvgAggregateInputType = {
    id?: true
    idade?: true
    idcliente?: true
  }

  export type PetSumAggregateInputType = {
    id?: true
    idade?: true
    idcliente?: true
  }

  export type PetMinAggregateInputType = {
    id?: true
    nome?: true
    especie?: true
    raça?: true
    sexo?: true
    idade?: true
    idcliente?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PetMaxAggregateInputType = {
    id?: true
    nome?: true
    especie?: true
    raça?: true
    sexo?: true
    idade?: true
    idcliente?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PetCountAggregateInputType = {
    id?: true
    nome?: true
    especie?: true
    raça?: true
    sexo?: true
    idade?: true
    idcliente?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pet to aggregate.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pets
    **/
    _count?: true | PetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType
  }

  export type GetPetAggregateType<T extends PetAggregateArgs> = {
        [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePet[P]>
      : GetScalarType<T[P], AggregatePet[P]>
  }




  export type PetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
    orderBy?: PetOrderByWithAggregationInput | PetOrderByWithAggregationInput[]
    by: PetScalarFieldEnum[] | PetScalarFieldEnum
    having?: PetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCountAggregateInputType | true
    _avg?: PetAvgAggregateInputType
    _sum?: PetSumAggregateInputType
    _min?: PetMinAggregateInputType
    _max?: PetMaxAggregateInputType
  }

  export type PetGroupByOutputType = {
    id: number
    nome: string
    especie: string
    raça: string | null
    sexo: string
    idade: number
    idcliente: number
    createdAt: Date
    updatedAt: Date
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  type GetPetGroupByPayload<T extends PetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetGroupByOutputType[P]>
            : GetScalarType<T[P], PetGroupByOutputType[P]>
        }
      >
    >


  export type PetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    especie?: boolean
    raça?: boolean
    sexo?: boolean
    idade?: boolean
    idcliente?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    atendimentos?: boolean | Pet$atendimentosArgs<ExtArgs>
    agendamentos?: boolean | Pet$agendamentosArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    especie?: boolean
    raça?: boolean
    sexo?: boolean
    idade?: boolean
    idcliente?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    especie?: boolean
    raça?: boolean
    sexo?: boolean
    idade?: boolean
    idcliente?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectScalar = {
    id?: boolean
    nome?: boolean
    especie?: boolean
    raça?: boolean
    sexo?: boolean
    idade?: boolean
    idcliente?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "especie" | "raça" | "sexo" | "idade" | "idcliente" | "createdAt" | "updatedAt", ExtArgs["result"]["pet"]>
  export type PetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimentos?: boolean | Pet$atendimentosArgs<ExtArgs>
    agendamentos?: boolean | Pet$agendamentosArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type PetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $PetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pet"
    objects: {
      atendimentos: Prisma.$AtendimentoPayload<ExtArgs>[]
      agendamentos: Prisma.$AgendamentoPayload<ExtArgs>[]
      cliente: Prisma.$ClientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      especie: string
      raça: string | null
      sexo: string
      idade: number
      idcliente: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pet"]>
    composites: {}
  }

  type PetGetPayload<S extends boolean | null | undefined | PetDefaultArgs> = $Result.GetResult<Prisma.$PetPayload, S>

  type PetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetCountAggregateInputType | true
    }

  export interface PetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pet'], meta: { name: 'Pet' } }
    /**
     * Find zero or one Pet that matches the filter.
     * @param {PetFindUniqueArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetFindUniqueArgs>(args: SelectSubset<T, PetFindUniqueArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetFindUniqueOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetFindUniqueOrThrowArgs>(args: SelectSubset<T, PetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetFindFirstArgs>(args?: SelectSubset<T, PetFindFirstArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetFindFirstOrThrowArgs>(args?: SelectSubset<T, PetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pet.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petWithIdOnly = await prisma.pet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetFindManyArgs>(args?: SelectSubset<T, PetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pet.
     * @param {PetCreateArgs} args - Arguments to create a Pet.
     * @example
     * // Create one Pet
     * const Pet = await prisma.pet.create({
     *   data: {
     *     // ... data to create a Pet
     *   }
     * })
     * 
     */
    create<T extends PetCreateArgs>(args: SelectSubset<T, PetCreateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pets.
     * @param {PetCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetCreateManyArgs>(args?: SelectSubset<T, PetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pets and returns the data saved in the database.
     * @param {PetCreateManyAndReturnArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetCreateManyAndReturnArgs>(args?: SelectSubset<T, PetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pet.
     * @param {PetDeleteArgs} args - Arguments to delete one Pet.
     * @example
     * // Delete one Pet
     * const Pet = await prisma.pet.delete({
     *   where: {
     *     // ... filter to delete one Pet
     *   }
     * })
     * 
     */
    delete<T extends PetDeleteArgs>(args: SelectSubset<T, PetDeleteArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pet.
     * @param {PetUpdateArgs} args - Arguments to update one Pet.
     * @example
     * // Update one Pet
     * const pet = await prisma.pet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetUpdateArgs>(args: SelectSubset<T, PetUpdateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pets.
     * @param {PetDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetDeleteManyArgs>(args?: SelectSubset<T, PetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetUpdateManyArgs>(args: SelectSubset<T, PetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets and returns the data updated in the database.
     * @param {PetUpdateManyAndReturnArgs} args - Arguments to update many Pets.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.updateManyAndReturn({
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
    updateManyAndReturn<T extends PetUpdateManyAndReturnArgs>(args: SelectSubset<T, PetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pet.
     * @param {PetUpsertArgs} args - Arguments to update or create a Pet.
     * @example
     * // Update or create a Pet
     * const pet = await prisma.pet.upsert({
     *   create: {
     *     // ... data to create a Pet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pet we want to update
     *   }
     * })
     */
    upsert<T extends PetUpsertArgs>(args: SelectSubset<T, PetUpsertArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pet.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends PetCountArgs>(
      args?: Subset<T, PetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PetAggregateArgs>(args: Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>

    /**
     * Group by Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetGroupByArgs} args - Group by arguments.
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
      T extends PetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetGroupByArgs['orderBy'] }
        : { orderBy?: PetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pet model
   */
  readonly fields: PetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atendimentos<T extends Pet$atendimentosArgs<ExtArgs> = {}>(args?: Subset<T, Pet$atendimentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agendamentos<T extends Pet$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, Pet$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pet model
   */
  interface PetFieldRefs {
    readonly id: FieldRef<"Pet", 'Int'>
    readonly nome: FieldRef<"Pet", 'String'>
    readonly especie: FieldRef<"Pet", 'String'>
    readonly raça: FieldRef<"Pet", 'String'>
    readonly sexo: FieldRef<"Pet", 'String'>
    readonly idade: FieldRef<"Pet", 'Int'>
    readonly idcliente: FieldRef<"Pet", 'Int'>
    readonly createdAt: FieldRef<"Pet", 'DateTime'>
    readonly updatedAt: FieldRef<"Pet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pet findUnique
   */
  export type PetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findUniqueOrThrow
   */
  export type PetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findFirst
   */
  export type PetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findFirstOrThrow
   */
  export type PetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findMany
   */
  export type PetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet create
   */
  export type PetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to create a Pet.
     */
    data: XOR<PetCreateInput, PetUncheckedCreateInput>
  }

  /**
   * Pet createMany
   */
  export type PetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pet createManyAndReturn
   */
  export type PetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet update
   */
  export type PetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to update a Pet.
     */
    data: XOR<PetUpdateInput, PetUncheckedUpdateInput>
    /**
     * Choose, which Pet to update.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet updateMany
   */
  export type PetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
  }

  /**
   * Pet updateManyAndReturn
   */
  export type PetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet upsert
   */
  export type PetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The filter to search for the Pet to update in case it exists.
     */
    where: PetWhereUniqueInput
    /**
     * In case the Pet found by the `where` argument doesn't exist, create a new Pet with this data.
     */
    create: XOR<PetCreateInput, PetUncheckedCreateInput>
    /**
     * In case the Pet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetUpdateInput, PetUncheckedUpdateInput>
  }

  /**
   * Pet delete
   */
  export type PetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter which Pet to delete.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet deleteMany
   */
  export type PetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to delete
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to delete.
     */
    limit?: number
  }

  /**
   * Pet.atendimentos
   */
  export type Pet$atendimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    where?: AtendimentoWhereInput
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    cursor?: AtendimentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Pet.agendamentos
   */
  export type Pet$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    where?: AgendamentoWhereInput
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    cursor?: AgendamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Pet without action
   */
  export type PetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    telefone: string | null
    email: string | null
    endereço: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    telefone: string | null
    email: string | null
    endereço: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    telefone: number
    email: number
    endereço: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    email?: true
    endereço?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    email?: true
    endereço?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    email?: true
    endereço?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nome: string
    telefone: string
    email: string
    endereço: string
    createdAt: Date
    updatedAt: Date
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
    endereço?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pets?: boolean | Cliente$petsArgs<ExtArgs>
    agendamentos?: boolean | Cliente$agendamentosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
    endereço?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
    endereço?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
    endereço?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "telefone" | "email" | "endereço" | "createdAt" | "updatedAt", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | Cliente$petsArgs<ExtArgs>
    agendamentos?: boolean | Cliente$agendamentosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      pets: Prisma.$PetPayload<ExtArgs>[]
      agendamentos: Prisma.$AgendamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      telefone: string
      email: string
      endereço: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pets<T extends Cliente$petsArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agendamentos<T extends Cliente$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly telefone: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly endereço: FieldRef<"Cliente", 'String'>
    readonly createdAt: FieldRef<"Cliente", 'DateTime'>
    readonly updatedAt: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.pets
   */
  export type Cliente$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    cursor?: PetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Cliente.agendamentos
   */
  export type Cliente$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    where?: AgendamentoWhereInput
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    cursor?: AgendamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Funcionario
   */

  export type AggregateFuncionario = {
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  export type FuncionarioAvgAggregateOutputType = {
    id: number | null
  }

  export type FuncionarioSumAggregateOutputType = {
    id: number | null
  }

  export type FuncionarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    telefone: string | null
    email: string | null
    endereço: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FuncionarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    telefone: string | null
    email: string | null
    endereço: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FuncionarioCountAggregateOutputType = {
    id: number
    nome: number
    telefone: number
    email: number
    endereço: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FuncionarioAvgAggregateInputType = {
    id?: true
  }

  export type FuncionarioSumAggregateInputType = {
    id?: true
  }

  export type FuncionarioMinAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    email?: true
    endereço?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FuncionarioMaxAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    email?: true
    endereço?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FuncionarioCountAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    email?: true
    endereço?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionario to aggregate.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funcionarios
    **/
    _count?: true | FuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuncionarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuncionarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionarioMaxAggregateInputType
  }

  export type GetFuncionarioAggregateType<T extends FuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionario[P]>
      : GetScalarType<T[P], AggregateFuncionario[P]>
  }




  export type FuncionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionarioWhereInput
    orderBy?: FuncionarioOrderByWithAggregationInput | FuncionarioOrderByWithAggregationInput[]
    by: FuncionarioScalarFieldEnum[] | FuncionarioScalarFieldEnum
    having?: FuncionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionarioCountAggregateInputType | true
    _avg?: FuncionarioAvgAggregateInputType
    _sum?: FuncionarioSumAggregateInputType
    _min?: FuncionarioMinAggregateInputType
    _max?: FuncionarioMaxAggregateInputType
  }

  export type FuncionarioGroupByOutputType = {
    id: number
    nome: string
    telefone: string
    email: string
    endereço: string
    createdAt: Date
    updatedAt: Date
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  type GetFuncionarioGroupByPayload<T extends FuncionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type FuncionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
    endereço?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    atendimentos?: boolean | Funcionario$atendimentosArgs<ExtArgs>
    _count?: boolean | FuncionarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
    endereço?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
    endereço?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectScalar = {
    id?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
    endereço?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FuncionarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "telefone" | "email" | "endereço" | "createdAt" | "updatedAt", ExtArgs["result"]["funcionario"]>
  export type FuncionarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atendimentos?: boolean | Funcionario$atendimentosArgs<ExtArgs>
    _count?: boolean | FuncionarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FuncionarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FuncionarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FuncionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Funcionario"
    objects: {
      atendimentos: Prisma.$AtendimentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      telefone: string
      email: string
      endereço: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["funcionario"]>
    composites: {}
  }

  type FuncionarioGetPayload<S extends boolean | null | undefined | FuncionarioDefaultArgs> = $Result.GetResult<Prisma.$FuncionarioPayload, S>

  type FuncionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuncionarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionarioCountAggregateInputType | true
    }

  export interface FuncionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funcionario'], meta: { name: 'Funcionario' } }
    /**
     * Find zero or one Funcionario that matches the filter.
     * @param {FuncionarioFindUniqueArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuncionarioFindUniqueArgs>(args: SelectSubset<T, FuncionarioFindUniqueArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuncionarioFindUniqueOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuncionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, FuncionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuncionarioFindFirstArgs>(args?: SelectSubset<T, FuncionarioFindFirstArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuncionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, FuncionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionario.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FuncionarioFindManyArgs>(args?: SelectSubset<T, FuncionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionario.
     * @param {FuncionarioCreateArgs} args - Arguments to create a Funcionario.
     * @example
     * // Create one Funcionario
     * const Funcionario = await prisma.funcionario.create({
     *   data: {
     *     // ... data to create a Funcionario
     *   }
     * })
     * 
     */
    create<T extends FuncionarioCreateArgs>(args: SelectSubset<T, FuncionarioCreateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {FuncionarioCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuncionarioCreateManyArgs>(args?: SelectSubset<T, FuncionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Funcionarios and returns the data saved in the database.
     * @param {FuncionarioCreateManyAndReturnArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Funcionarios and only return the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FuncionarioCreateManyAndReturnArgs>(args?: SelectSubset<T, FuncionarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Funcionario.
     * @param {FuncionarioDeleteArgs} args - Arguments to delete one Funcionario.
     * @example
     * // Delete one Funcionario
     * const Funcionario = await prisma.funcionario.delete({
     *   where: {
     *     // ... filter to delete one Funcionario
     *   }
     * })
     * 
     */
    delete<T extends FuncionarioDeleteArgs>(args: SelectSubset<T, FuncionarioDeleteArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionario.
     * @param {FuncionarioUpdateArgs} args - Arguments to update one Funcionario.
     * @example
     * // Update one Funcionario
     * const funcionario = await prisma.funcionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuncionarioUpdateArgs>(args: SelectSubset<T, FuncionarioUpdateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {FuncionarioDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuncionarioDeleteManyArgs>(args?: SelectSubset<T, FuncionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuncionarioUpdateManyArgs>(args: SelectSubset<T, FuncionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios and returns the data updated in the database.
     * @param {FuncionarioUpdateManyAndReturnArgs} args - Arguments to update many Funcionarios.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Funcionarios and only return the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.updateManyAndReturn({
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
    updateManyAndReturn<T extends FuncionarioUpdateManyAndReturnArgs>(args: SelectSubset<T, FuncionarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Funcionario.
     * @param {FuncionarioUpsertArgs} args - Arguments to update or create a Funcionario.
     * @example
     * // Update or create a Funcionario
     * const funcionario = await prisma.funcionario.upsert({
     *   create: {
     *     // ... data to create a Funcionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionario we want to update
     *   }
     * })
     */
    upsert<T extends FuncionarioUpsertArgs>(args: SelectSubset<T, FuncionarioUpsertArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionario.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends FuncionarioCountArgs>(
      args?: Subset<T, FuncionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuncionarioAggregateArgs>(args: Subset<T, FuncionarioAggregateArgs>): Prisma.PrismaPromise<GetFuncionarioAggregateType<T>>

    /**
     * Group by Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioGroupByArgs} args - Group by arguments.
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
      T extends FuncionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuncionarioGroupByArgs['orderBy'] }
        : { orderBy?: FuncionarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FuncionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funcionario model
   */
  readonly fields: FuncionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funcionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuncionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atendimentos<T extends Funcionario$atendimentosArgs<ExtArgs> = {}>(args?: Subset<T, Funcionario$atendimentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Funcionario model
   */
  interface FuncionarioFieldRefs {
    readonly id: FieldRef<"Funcionario", 'Int'>
    readonly nome: FieldRef<"Funcionario", 'String'>
    readonly telefone: FieldRef<"Funcionario", 'String'>
    readonly email: FieldRef<"Funcionario", 'String'>
    readonly endereço: FieldRef<"Funcionario", 'String'>
    readonly createdAt: FieldRef<"Funcionario", 'DateTime'>
    readonly updatedAt: FieldRef<"Funcionario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Funcionario findUnique
   */
  export type FuncionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findUniqueOrThrow
   */
  export type FuncionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findFirst
   */
  export type FuncionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findFirstOrThrow
   */
  export type FuncionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findMany
   */
  export type FuncionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario create
   */
  export type FuncionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Funcionario.
     */
    data: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
  }

  /**
   * Funcionario createMany
   */
  export type FuncionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionario createManyAndReturn
   */
  export type FuncionarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionario update
   */
  export type FuncionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Funcionario.
     */
    data: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
    /**
     * Choose, which Funcionario to update.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario updateMany
   */
  export type FuncionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionario updateManyAndReturn
   */
  export type FuncionarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionario upsert
   */
  export type FuncionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Funcionario to update in case it exists.
     */
    where: FuncionarioWhereUniqueInput
    /**
     * In case the Funcionario found by the `where` argument doesn't exist, create a new Funcionario with this data.
     */
    create: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
    /**
     * In case the Funcionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
  }

  /**
   * Funcionario delete
   */
  export type FuncionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter which Funcionario to delete.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario deleteMany
   */
  export type FuncionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionarios to delete
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to delete.
     */
    limit?: number
  }

  /**
   * Funcionario.atendimentos
   */
  export type Funcionario$atendimentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    where?: AtendimentoWhereInput
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    cursor?: AtendimentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Funcionario without action
   */
  export type FuncionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
  }


  /**
   * Model Atendimento
   */

  export type AggregateAtendimento = {
    _count: AtendimentoCountAggregateOutputType | null
    _avg: AtendimentoAvgAggregateOutputType | null
    _sum: AtendimentoSumAggregateOutputType | null
    _min: AtendimentoMinAggregateOutputType | null
    _max: AtendimentoMaxAggregateOutputType | null
  }

  export type AtendimentoAvgAggregateOutputType = {
    id: number | null
    idpet: number | null
    idfuncionario: number | null
  }

  export type AtendimentoSumAggregateOutputType = {
    id: number | null
    idpet: number | null
    idfuncionario: number | null
  }

  export type AtendimentoMinAggregateOutputType = {
    id: number | null
    tipo: string | null
    idpet: number | null
    idfuncionario: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AtendimentoMaxAggregateOutputType = {
    id: number | null
    tipo: string | null
    idpet: number | null
    idfuncionario: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AtendimentoCountAggregateOutputType = {
    id: number
    tipo: number
    idpet: number
    idfuncionario: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AtendimentoAvgAggregateInputType = {
    id?: true
    idpet?: true
    idfuncionario?: true
  }

  export type AtendimentoSumAggregateInputType = {
    id?: true
    idpet?: true
    idfuncionario?: true
  }

  export type AtendimentoMinAggregateInputType = {
    id?: true
    tipo?: true
    idpet?: true
    idfuncionario?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AtendimentoMaxAggregateInputType = {
    id?: true
    tipo?: true
    idpet?: true
    idfuncionario?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AtendimentoCountAggregateInputType = {
    id?: true
    tipo?: true
    idpet?: true
    idfuncionario?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AtendimentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atendimento to aggregate.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Atendimentos
    **/
    _count?: true | AtendimentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtendimentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtendimentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtendimentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtendimentoMaxAggregateInputType
  }

  export type GetAtendimentoAggregateType<T extends AtendimentoAggregateArgs> = {
        [P in keyof T & keyof AggregateAtendimento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtendimento[P]>
      : GetScalarType<T[P], AggregateAtendimento[P]>
  }




  export type AtendimentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtendimentoWhereInput
    orderBy?: AtendimentoOrderByWithAggregationInput | AtendimentoOrderByWithAggregationInput[]
    by: AtendimentoScalarFieldEnum[] | AtendimentoScalarFieldEnum
    having?: AtendimentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtendimentoCountAggregateInputType | true
    _avg?: AtendimentoAvgAggregateInputType
    _sum?: AtendimentoSumAggregateInputType
    _min?: AtendimentoMinAggregateInputType
    _max?: AtendimentoMaxAggregateInputType
  }

  export type AtendimentoGroupByOutputType = {
    id: number
    tipo: string
    idpet: number
    idfuncionario: number
    createdAt: Date
    updatedAt: Date
    _count: AtendimentoCountAggregateOutputType | null
    _avg: AtendimentoAvgAggregateOutputType | null
    _sum: AtendimentoSumAggregateOutputType | null
    _min: AtendimentoMinAggregateOutputType | null
    _max: AtendimentoMaxAggregateOutputType | null
  }

  type GetAtendimentoGroupByPayload<T extends AtendimentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtendimentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtendimentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtendimentoGroupByOutputType[P]>
            : GetScalarType<T[P], AtendimentoGroupByOutputType[P]>
        }
      >
    >


  export type AtendimentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    idpet?: boolean
    idfuncionario?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
    funcionario?: boolean | FuncionarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atendimento"]>

  export type AtendimentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    idpet?: boolean
    idfuncionario?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
    funcionario?: boolean | FuncionarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atendimento"]>

  export type AtendimentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    idpet?: boolean
    idfuncionario?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pet?: boolean | PetDefaultArgs<ExtArgs>
    funcionario?: boolean | FuncionarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atendimento"]>

  export type AtendimentoSelectScalar = {
    id?: boolean
    tipo?: boolean
    idpet?: boolean
    idfuncionario?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AtendimentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "idpet" | "idfuncionario" | "createdAt" | "updatedAt", ExtArgs["result"]["atendimento"]>
  export type AtendimentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
    funcionario?: boolean | FuncionarioDefaultArgs<ExtArgs>
  }
  export type AtendimentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
    funcionario?: boolean | FuncionarioDefaultArgs<ExtArgs>
  }
  export type AtendimentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetDefaultArgs<ExtArgs>
    funcionario?: boolean | FuncionarioDefaultArgs<ExtArgs>
  }

  export type $AtendimentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Atendimento"
    objects: {
      pet: Prisma.$PetPayload<ExtArgs>
      funcionario: Prisma.$FuncionarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: string
      idpet: number
      idfuncionario: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["atendimento"]>
    composites: {}
  }

  type AtendimentoGetPayload<S extends boolean | null | undefined | AtendimentoDefaultArgs> = $Result.GetResult<Prisma.$AtendimentoPayload, S>

  type AtendimentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtendimentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtendimentoCountAggregateInputType | true
    }

  export interface AtendimentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Atendimento'], meta: { name: 'Atendimento' } }
    /**
     * Find zero or one Atendimento that matches the filter.
     * @param {AtendimentoFindUniqueArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtendimentoFindUniqueArgs>(args: SelectSubset<T, AtendimentoFindUniqueArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Atendimento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtendimentoFindUniqueOrThrowArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtendimentoFindUniqueOrThrowArgs>(args: SelectSubset<T, AtendimentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atendimento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoFindFirstArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtendimentoFindFirstArgs>(args?: SelectSubset<T, AtendimentoFindFirstArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atendimento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoFindFirstOrThrowArgs} args - Arguments to find a Atendimento
     * @example
     * // Get one Atendimento
     * const atendimento = await prisma.atendimento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtendimentoFindFirstOrThrowArgs>(args?: SelectSubset<T, AtendimentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atendimentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atendimentos
     * const atendimentos = await prisma.atendimento.findMany()
     * 
     * // Get first 10 Atendimentos
     * const atendimentos = await prisma.atendimento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atendimentoWithIdOnly = await prisma.atendimento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtendimentoFindManyArgs>(args?: SelectSubset<T, AtendimentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Atendimento.
     * @param {AtendimentoCreateArgs} args - Arguments to create a Atendimento.
     * @example
     * // Create one Atendimento
     * const Atendimento = await prisma.atendimento.create({
     *   data: {
     *     // ... data to create a Atendimento
     *   }
     * })
     * 
     */
    create<T extends AtendimentoCreateArgs>(args: SelectSubset<T, AtendimentoCreateArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atendimentos.
     * @param {AtendimentoCreateManyArgs} args - Arguments to create many Atendimentos.
     * @example
     * // Create many Atendimentos
     * const atendimento = await prisma.atendimento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtendimentoCreateManyArgs>(args?: SelectSubset<T, AtendimentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Atendimentos and returns the data saved in the database.
     * @param {AtendimentoCreateManyAndReturnArgs} args - Arguments to create many Atendimentos.
     * @example
     * // Create many Atendimentos
     * const atendimento = await prisma.atendimento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Atendimentos and only return the `id`
     * const atendimentoWithIdOnly = await prisma.atendimento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtendimentoCreateManyAndReturnArgs>(args?: SelectSubset<T, AtendimentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Atendimento.
     * @param {AtendimentoDeleteArgs} args - Arguments to delete one Atendimento.
     * @example
     * // Delete one Atendimento
     * const Atendimento = await prisma.atendimento.delete({
     *   where: {
     *     // ... filter to delete one Atendimento
     *   }
     * })
     * 
     */
    delete<T extends AtendimentoDeleteArgs>(args: SelectSubset<T, AtendimentoDeleteArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Atendimento.
     * @param {AtendimentoUpdateArgs} args - Arguments to update one Atendimento.
     * @example
     * // Update one Atendimento
     * const atendimento = await prisma.atendimento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtendimentoUpdateArgs>(args: SelectSubset<T, AtendimentoUpdateArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atendimentos.
     * @param {AtendimentoDeleteManyArgs} args - Arguments to filter Atendimentos to delete.
     * @example
     * // Delete a few Atendimentos
     * const { count } = await prisma.atendimento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtendimentoDeleteManyArgs>(args?: SelectSubset<T, AtendimentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atendimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atendimentos
     * const atendimento = await prisma.atendimento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtendimentoUpdateManyArgs>(args: SelectSubset<T, AtendimentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atendimentos and returns the data updated in the database.
     * @param {AtendimentoUpdateManyAndReturnArgs} args - Arguments to update many Atendimentos.
     * @example
     * // Update many Atendimentos
     * const atendimento = await prisma.atendimento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Atendimentos and only return the `id`
     * const atendimentoWithIdOnly = await prisma.atendimento.updateManyAndReturn({
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
    updateManyAndReturn<T extends AtendimentoUpdateManyAndReturnArgs>(args: SelectSubset<T, AtendimentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Atendimento.
     * @param {AtendimentoUpsertArgs} args - Arguments to update or create a Atendimento.
     * @example
     * // Update or create a Atendimento
     * const atendimento = await prisma.atendimento.upsert({
     *   create: {
     *     // ... data to create a Atendimento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atendimento we want to update
     *   }
     * })
     */
    upsert<T extends AtendimentoUpsertArgs>(args: SelectSubset<T, AtendimentoUpsertArgs<ExtArgs>>): Prisma__AtendimentoClient<$Result.GetResult<Prisma.$AtendimentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Atendimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoCountArgs} args - Arguments to filter Atendimentos to count.
     * @example
     * // Count the number of Atendimentos
     * const count = await prisma.atendimento.count({
     *   where: {
     *     // ... the filter for the Atendimentos we want to count
     *   }
     * })
    **/
    count<T extends AtendimentoCountArgs>(
      args?: Subset<T, AtendimentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtendimentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atendimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtendimentoAggregateArgs>(args: Subset<T, AtendimentoAggregateArgs>): Prisma.PrismaPromise<GetAtendimentoAggregateType<T>>

    /**
     * Group by Atendimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtendimentoGroupByArgs} args - Group by arguments.
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
      T extends AtendimentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtendimentoGroupByArgs['orderBy'] }
        : { orderBy?: AtendimentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AtendimentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtendimentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Atendimento model
   */
  readonly fields: AtendimentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Atendimento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtendimentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pet<T extends PetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetDefaultArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    funcionario<T extends FuncionarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FuncionarioDefaultArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Atendimento model
   */
  interface AtendimentoFieldRefs {
    readonly id: FieldRef<"Atendimento", 'Int'>
    readonly tipo: FieldRef<"Atendimento", 'String'>
    readonly idpet: FieldRef<"Atendimento", 'Int'>
    readonly idfuncionario: FieldRef<"Atendimento", 'Int'>
    readonly createdAt: FieldRef<"Atendimento", 'DateTime'>
    readonly updatedAt: FieldRef<"Atendimento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Atendimento findUnique
   */
  export type AtendimentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento findUniqueOrThrow
   */
  export type AtendimentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento findFirst
   */
  export type AtendimentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atendimentos.
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atendimentos.
     */
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Atendimento findFirstOrThrow
   */
  export type AtendimentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimento to fetch.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atendimentos.
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atendimentos.
     */
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Atendimento findMany
   */
  export type AtendimentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which Atendimentos to fetch.
     */
    where?: AtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atendimentos to fetch.
     */
    orderBy?: AtendimentoOrderByWithRelationInput | AtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Atendimentos.
     */
    cursor?: AtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atendimentos.
     */
    skip?: number
    distinct?: AtendimentoScalarFieldEnum | AtendimentoScalarFieldEnum[]
  }

  /**
   * Atendimento create
   */
  export type AtendimentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Atendimento.
     */
    data: XOR<AtendimentoCreateInput, AtendimentoUncheckedCreateInput>
  }

  /**
   * Atendimento createMany
   */
  export type AtendimentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Atendimentos.
     */
    data: AtendimentoCreateManyInput | AtendimentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Atendimento createManyAndReturn
   */
  export type AtendimentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * The data used to create many Atendimentos.
     */
    data: AtendimentoCreateManyInput | AtendimentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atendimento update
   */
  export type AtendimentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Atendimento.
     */
    data: XOR<AtendimentoUpdateInput, AtendimentoUncheckedUpdateInput>
    /**
     * Choose, which Atendimento to update.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento updateMany
   */
  export type AtendimentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Atendimentos.
     */
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyInput>
    /**
     * Filter which Atendimentos to update
     */
    where?: AtendimentoWhereInput
    /**
     * Limit how many Atendimentos to update.
     */
    limit?: number
  }

  /**
   * Atendimento updateManyAndReturn
   */
  export type AtendimentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * The data used to update Atendimentos.
     */
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyInput>
    /**
     * Filter which Atendimentos to update
     */
    where?: AtendimentoWhereInput
    /**
     * Limit how many Atendimentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atendimento upsert
   */
  export type AtendimentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Atendimento to update in case it exists.
     */
    where: AtendimentoWhereUniqueInput
    /**
     * In case the Atendimento found by the `where` argument doesn't exist, create a new Atendimento with this data.
     */
    create: XOR<AtendimentoCreateInput, AtendimentoUncheckedCreateInput>
    /**
     * In case the Atendimento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtendimentoUpdateInput, AtendimentoUncheckedUpdateInput>
  }

  /**
   * Atendimento delete
   */
  export type AtendimentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
    /**
     * Filter which Atendimento to delete.
     */
    where: AtendimentoWhereUniqueInput
  }

  /**
   * Atendimento deleteMany
   */
  export type AtendimentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atendimentos to delete
     */
    where?: AtendimentoWhereInput
    /**
     * Limit how many Atendimentos to delete.
     */
    limit?: number
  }

  /**
   * Atendimento without action
   */
  export type AtendimentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atendimento
     */
    select?: AtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atendimento
     */
    omit?: AtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtendimentoInclude<ExtArgs> | null
  }


  /**
   * Model Solicitacao
   */

  export type AggregateSolicitacao = {
    _count: SolicitacaoCountAggregateOutputType | null
    _avg: SolicitacaoAvgAggregateOutputType | null
    _sum: SolicitacaoSumAggregateOutputType | null
    _min: SolicitacaoMinAggregateOutputType | null
    _max: SolicitacaoMaxAggregateOutputType | null
  }

  export type SolicitacaoAvgAggregateOutputType = {
    id: number | null
  }

  export type SolicitacaoSumAggregateOutputType = {
    id: number | null
  }

  export type SolicitacaoMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SolicitacaoMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SolicitacaoCountAggregateOutputType = {
    id: number
    descricao: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SolicitacaoAvgAggregateInputType = {
    id?: true
  }

  export type SolicitacaoSumAggregateInputType = {
    id?: true
  }

  export type SolicitacaoMinAggregateInputType = {
    id?: true
    descricao?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SolicitacaoMaxAggregateInputType = {
    id?: true
    descricao?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SolicitacaoCountAggregateInputType = {
    id?: true
    descricao?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SolicitacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solicitacao to aggregate.
     */
    where?: SolicitacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicitacaos to fetch.
     */
    orderBy?: SolicitacaoOrderByWithRelationInput | SolicitacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolicitacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicitacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicitacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Solicitacaos
    **/
    _count?: true | SolicitacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SolicitacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SolicitacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolicitacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolicitacaoMaxAggregateInputType
  }

  export type GetSolicitacaoAggregateType<T extends SolicitacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateSolicitacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolicitacao[P]>
      : GetScalarType<T[P], AggregateSolicitacao[P]>
  }




  export type SolicitacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitacaoWhereInput
    orderBy?: SolicitacaoOrderByWithAggregationInput | SolicitacaoOrderByWithAggregationInput[]
    by: SolicitacaoScalarFieldEnum[] | SolicitacaoScalarFieldEnum
    having?: SolicitacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolicitacaoCountAggregateInputType | true
    _avg?: SolicitacaoAvgAggregateInputType
    _sum?: SolicitacaoSumAggregateInputType
    _min?: SolicitacaoMinAggregateInputType
    _max?: SolicitacaoMaxAggregateInputType
  }

  export type SolicitacaoGroupByOutputType = {
    id: number
    descricao: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: SolicitacaoCountAggregateOutputType | null
    _avg: SolicitacaoAvgAggregateOutputType | null
    _sum: SolicitacaoSumAggregateOutputType | null
    _min: SolicitacaoMinAggregateOutputType | null
    _max: SolicitacaoMaxAggregateOutputType | null
  }

  type GetSolicitacaoGroupByPayload<T extends SolicitacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolicitacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolicitacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolicitacaoGroupByOutputType[P]>
            : GetScalarType<T[P], SolicitacaoGroupByOutputType[P]>
        }
      >
    >


  export type SolicitacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["solicitacao"]>

  export type SolicitacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["solicitacao"]>

  export type SolicitacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["solicitacao"]>

  export type SolicitacaoSelectScalar = {
    id?: boolean
    descricao?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SolicitacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["solicitacao"]>

  export type $SolicitacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Solicitacao"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["solicitacao"]>
    composites: {}
  }

  type SolicitacaoGetPayload<S extends boolean | null | undefined | SolicitacaoDefaultArgs> = $Result.GetResult<Prisma.$SolicitacaoPayload, S>

  type SolicitacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolicitacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolicitacaoCountAggregateInputType | true
    }

  export interface SolicitacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Solicitacao'], meta: { name: 'Solicitacao' } }
    /**
     * Find zero or one Solicitacao that matches the filter.
     * @param {SolicitacaoFindUniqueArgs} args - Arguments to find a Solicitacao
     * @example
     * // Get one Solicitacao
     * const solicitacao = await prisma.solicitacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolicitacaoFindUniqueArgs>(args: SelectSubset<T, SolicitacaoFindUniqueArgs<ExtArgs>>): Prisma__SolicitacaoClient<$Result.GetResult<Prisma.$SolicitacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Solicitacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolicitacaoFindUniqueOrThrowArgs} args - Arguments to find a Solicitacao
     * @example
     * // Get one Solicitacao
     * const solicitacao = await prisma.solicitacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolicitacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, SolicitacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolicitacaoClient<$Result.GetResult<Prisma.$SolicitacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solicitacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitacaoFindFirstArgs} args - Arguments to find a Solicitacao
     * @example
     * // Get one Solicitacao
     * const solicitacao = await prisma.solicitacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolicitacaoFindFirstArgs>(args?: SelectSubset<T, SolicitacaoFindFirstArgs<ExtArgs>>): Prisma__SolicitacaoClient<$Result.GetResult<Prisma.$SolicitacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solicitacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitacaoFindFirstOrThrowArgs} args - Arguments to find a Solicitacao
     * @example
     * // Get one Solicitacao
     * const solicitacao = await prisma.solicitacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolicitacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, SolicitacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolicitacaoClient<$Result.GetResult<Prisma.$SolicitacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Solicitacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Solicitacaos
     * const solicitacaos = await prisma.solicitacao.findMany()
     * 
     * // Get first 10 Solicitacaos
     * const solicitacaos = await prisma.solicitacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solicitacaoWithIdOnly = await prisma.solicitacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolicitacaoFindManyArgs>(args?: SelectSubset<T, SolicitacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Solicitacao.
     * @param {SolicitacaoCreateArgs} args - Arguments to create a Solicitacao.
     * @example
     * // Create one Solicitacao
     * const Solicitacao = await prisma.solicitacao.create({
     *   data: {
     *     // ... data to create a Solicitacao
     *   }
     * })
     * 
     */
    create<T extends SolicitacaoCreateArgs>(args: SelectSubset<T, SolicitacaoCreateArgs<ExtArgs>>): Prisma__SolicitacaoClient<$Result.GetResult<Prisma.$SolicitacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Solicitacaos.
     * @param {SolicitacaoCreateManyArgs} args - Arguments to create many Solicitacaos.
     * @example
     * // Create many Solicitacaos
     * const solicitacao = await prisma.solicitacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolicitacaoCreateManyArgs>(args?: SelectSubset<T, SolicitacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Solicitacaos and returns the data saved in the database.
     * @param {SolicitacaoCreateManyAndReturnArgs} args - Arguments to create many Solicitacaos.
     * @example
     * // Create many Solicitacaos
     * const solicitacao = await prisma.solicitacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Solicitacaos and only return the `id`
     * const solicitacaoWithIdOnly = await prisma.solicitacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolicitacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, SolicitacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Solicitacao.
     * @param {SolicitacaoDeleteArgs} args - Arguments to delete one Solicitacao.
     * @example
     * // Delete one Solicitacao
     * const Solicitacao = await prisma.solicitacao.delete({
     *   where: {
     *     // ... filter to delete one Solicitacao
     *   }
     * })
     * 
     */
    delete<T extends SolicitacaoDeleteArgs>(args: SelectSubset<T, SolicitacaoDeleteArgs<ExtArgs>>): Prisma__SolicitacaoClient<$Result.GetResult<Prisma.$SolicitacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Solicitacao.
     * @param {SolicitacaoUpdateArgs} args - Arguments to update one Solicitacao.
     * @example
     * // Update one Solicitacao
     * const solicitacao = await prisma.solicitacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolicitacaoUpdateArgs>(args: SelectSubset<T, SolicitacaoUpdateArgs<ExtArgs>>): Prisma__SolicitacaoClient<$Result.GetResult<Prisma.$SolicitacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Solicitacaos.
     * @param {SolicitacaoDeleteManyArgs} args - Arguments to filter Solicitacaos to delete.
     * @example
     * // Delete a few Solicitacaos
     * const { count } = await prisma.solicitacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolicitacaoDeleteManyArgs>(args?: SelectSubset<T, SolicitacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicitacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Solicitacaos
     * const solicitacao = await prisma.solicitacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolicitacaoUpdateManyArgs>(args: SelectSubset<T, SolicitacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicitacaos and returns the data updated in the database.
     * @param {SolicitacaoUpdateManyAndReturnArgs} args - Arguments to update many Solicitacaos.
     * @example
     * // Update many Solicitacaos
     * const solicitacao = await prisma.solicitacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Solicitacaos and only return the `id`
     * const solicitacaoWithIdOnly = await prisma.solicitacao.updateManyAndReturn({
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
    updateManyAndReturn<T extends SolicitacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, SolicitacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Solicitacao.
     * @param {SolicitacaoUpsertArgs} args - Arguments to update or create a Solicitacao.
     * @example
     * // Update or create a Solicitacao
     * const solicitacao = await prisma.solicitacao.upsert({
     *   create: {
     *     // ... data to create a Solicitacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Solicitacao we want to update
     *   }
     * })
     */
    upsert<T extends SolicitacaoUpsertArgs>(args: SelectSubset<T, SolicitacaoUpsertArgs<ExtArgs>>): Prisma__SolicitacaoClient<$Result.GetResult<Prisma.$SolicitacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Solicitacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitacaoCountArgs} args - Arguments to filter Solicitacaos to count.
     * @example
     * // Count the number of Solicitacaos
     * const count = await prisma.solicitacao.count({
     *   where: {
     *     // ... the filter for the Solicitacaos we want to count
     *   }
     * })
    **/
    count<T extends SolicitacaoCountArgs>(
      args?: Subset<T, SolicitacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolicitacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Solicitacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SolicitacaoAggregateArgs>(args: Subset<T, SolicitacaoAggregateArgs>): Prisma.PrismaPromise<GetSolicitacaoAggregateType<T>>

    /**
     * Group by Solicitacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitacaoGroupByArgs} args - Group by arguments.
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
      T extends SolicitacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolicitacaoGroupByArgs['orderBy'] }
        : { orderBy?: SolicitacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SolicitacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolicitacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Solicitacao model
   */
  readonly fields: SolicitacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Solicitacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolicitacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Solicitacao model
   */
  interface SolicitacaoFieldRefs {
    readonly id: FieldRef<"Solicitacao", 'Int'>
    readonly descricao: FieldRef<"Solicitacao", 'String'>
    readonly status: FieldRef<"Solicitacao", 'String'>
    readonly createdAt: FieldRef<"Solicitacao", 'DateTime'>
    readonly updatedAt: FieldRef<"Solicitacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Solicitacao findUnique
   */
  export type SolicitacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitacao
     */
    select?: SolicitacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitacao
     */
    omit?: SolicitacaoOmit<ExtArgs> | null
    /**
     * Filter, which Solicitacao to fetch.
     */
    where: SolicitacaoWhereUniqueInput
  }

  /**
   * Solicitacao findUniqueOrThrow
   */
  export type SolicitacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitacao
     */
    select?: SolicitacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitacao
     */
    omit?: SolicitacaoOmit<ExtArgs> | null
    /**
     * Filter, which Solicitacao to fetch.
     */
    where: SolicitacaoWhereUniqueInput
  }

  /**
   * Solicitacao findFirst
   */
  export type SolicitacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitacao
     */
    select?: SolicitacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitacao
     */
    omit?: SolicitacaoOmit<ExtArgs> | null
    /**
     * Filter, which Solicitacao to fetch.
     */
    where?: SolicitacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicitacaos to fetch.
     */
    orderBy?: SolicitacaoOrderByWithRelationInput | SolicitacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solicitacaos.
     */
    cursor?: SolicitacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicitacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicitacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solicitacaos.
     */
    distinct?: SolicitacaoScalarFieldEnum | SolicitacaoScalarFieldEnum[]
  }

  /**
   * Solicitacao findFirstOrThrow
   */
  export type SolicitacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitacao
     */
    select?: SolicitacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitacao
     */
    omit?: SolicitacaoOmit<ExtArgs> | null
    /**
     * Filter, which Solicitacao to fetch.
     */
    where?: SolicitacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicitacaos to fetch.
     */
    orderBy?: SolicitacaoOrderByWithRelationInput | SolicitacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solicitacaos.
     */
    cursor?: SolicitacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicitacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicitacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solicitacaos.
     */
    distinct?: SolicitacaoScalarFieldEnum | SolicitacaoScalarFieldEnum[]
  }

  /**
   * Solicitacao findMany
   */
  export type SolicitacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitacao
     */
    select?: SolicitacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitacao
     */
    omit?: SolicitacaoOmit<ExtArgs> | null
    /**
     * Filter, which Solicitacaos to fetch.
     */
    where?: SolicitacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicitacaos to fetch.
     */
    orderBy?: SolicitacaoOrderByWithRelationInput | SolicitacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Solicitacaos.
     */
    cursor?: SolicitacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicitacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicitacaos.
     */
    skip?: number
    distinct?: SolicitacaoScalarFieldEnum | SolicitacaoScalarFieldEnum[]
  }

  /**
   * Solicitacao create
   */
  export type SolicitacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitacao
     */
    select?: SolicitacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitacao
     */
    omit?: SolicitacaoOmit<ExtArgs> | null
    /**
     * The data needed to create a Solicitacao.
     */
    data: XOR<SolicitacaoCreateInput, SolicitacaoUncheckedCreateInput>
  }

  /**
   * Solicitacao createMany
   */
  export type SolicitacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Solicitacaos.
     */
    data: SolicitacaoCreateManyInput | SolicitacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Solicitacao createManyAndReturn
   */
  export type SolicitacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitacao
     */
    select?: SolicitacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitacao
     */
    omit?: SolicitacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Solicitacaos.
     */
    data: SolicitacaoCreateManyInput | SolicitacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Solicitacao update
   */
  export type SolicitacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitacao
     */
    select?: SolicitacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitacao
     */
    omit?: SolicitacaoOmit<ExtArgs> | null
    /**
     * The data needed to update a Solicitacao.
     */
    data: XOR<SolicitacaoUpdateInput, SolicitacaoUncheckedUpdateInput>
    /**
     * Choose, which Solicitacao to update.
     */
    where: SolicitacaoWhereUniqueInput
  }

  /**
   * Solicitacao updateMany
   */
  export type SolicitacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Solicitacaos.
     */
    data: XOR<SolicitacaoUpdateManyMutationInput, SolicitacaoUncheckedUpdateManyInput>
    /**
     * Filter which Solicitacaos to update
     */
    where?: SolicitacaoWhereInput
    /**
     * Limit how many Solicitacaos to update.
     */
    limit?: number
  }

  /**
   * Solicitacao updateManyAndReturn
   */
  export type SolicitacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitacao
     */
    select?: SolicitacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitacao
     */
    omit?: SolicitacaoOmit<ExtArgs> | null
    /**
     * The data used to update Solicitacaos.
     */
    data: XOR<SolicitacaoUpdateManyMutationInput, SolicitacaoUncheckedUpdateManyInput>
    /**
     * Filter which Solicitacaos to update
     */
    where?: SolicitacaoWhereInput
    /**
     * Limit how many Solicitacaos to update.
     */
    limit?: number
  }

  /**
   * Solicitacao upsert
   */
  export type SolicitacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitacao
     */
    select?: SolicitacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitacao
     */
    omit?: SolicitacaoOmit<ExtArgs> | null
    /**
     * The filter to search for the Solicitacao to update in case it exists.
     */
    where: SolicitacaoWhereUniqueInput
    /**
     * In case the Solicitacao found by the `where` argument doesn't exist, create a new Solicitacao with this data.
     */
    create: XOR<SolicitacaoCreateInput, SolicitacaoUncheckedCreateInput>
    /**
     * In case the Solicitacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolicitacaoUpdateInput, SolicitacaoUncheckedUpdateInput>
  }

  /**
   * Solicitacao delete
   */
  export type SolicitacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitacao
     */
    select?: SolicitacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitacao
     */
    omit?: SolicitacaoOmit<ExtArgs> | null
    /**
     * Filter which Solicitacao to delete.
     */
    where: SolicitacaoWhereUniqueInput
  }

  /**
   * Solicitacao deleteMany
   */
  export type SolicitacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solicitacaos to delete
     */
    where?: SolicitacaoWhereInput
    /**
     * Limit how many Solicitacaos to delete.
     */
    limit?: number
  }

  /**
   * Solicitacao without action
   */
  export type SolicitacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitacao
     */
    select?: SolicitacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitacao
     */
    omit?: SolicitacaoOmit<ExtArgs> | null
  }


  /**
   * Model Agendamento
   */

  export type AggregateAgendamento = {
    _count: AgendamentoCountAggregateOutputType | null
    _avg: AgendamentoAvgAggregateOutputType | null
    _sum: AgendamentoSumAggregateOutputType | null
    _min: AgendamentoMinAggregateOutputType | null
    _max: AgendamentoMaxAggregateOutputType | null
  }

  export type AgendamentoAvgAggregateOutputType = {
    id: number | null
    clienteId: number | null
    petId: number | null
  }

  export type AgendamentoSumAggregateOutputType = {
    id: number | null
    clienteId: number | null
    petId: number | null
  }

  export type AgendamentoMinAggregateOutputType = {
    id: number | null
    data: Date | null
    servico: string | null
    clienteId: number | null
    petId: number | null
  }

  export type AgendamentoMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    servico: string | null
    clienteId: number | null
    petId: number | null
  }

  export type AgendamentoCountAggregateOutputType = {
    id: number
    data: number
    servico: number
    clienteId: number
    petId: number
    _all: number
  }


  export type AgendamentoAvgAggregateInputType = {
    id?: true
    clienteId?: true
    petId?: true
  }

  export type AgendamentoSumAggregateInputType = {
    id?: true
    clienteId?: true
    petId?: true
  }

  export type AgendamentoMinAggregateInputType = {
    id?: true
    data?: true
    servico?: true
    clienteId?: true
    petId?: true
  }

  export type AgendamentoMaxAggregateInputType = {
    id?: true
    data?: true
    servico?: true
    clienteId?: true
    petId?: true
  }

  export type AgendamentoCountAggregateInputType = {
    id?: true
    data?: true
    servico?: true
    clienteId?: true
    petId?: true
    _all?: true
  }

  export type AgendamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agendamento to aggregate.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agendamentos
    **/
    _count?: true | AgendamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgendamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgendamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendamentoMaxAggregateInputType
  }

  export type GetAgendamentoAggregateType<T extends AgendamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateAgendamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgendamento[P]>
      : GetScalarType<T[P], AggregateAgendamento[P]>
  }




  export type AgendamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentoWhereInput
    orderBy?: AgendamentoOrderByWithAggregationInput | AgendamentoOrderByWithAggregationInput[]
    by: AgendamentoScalarFieldEnum[] | AgendamentoScalarFieldEnum
    having?: AgendamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendamentoCountAggregateInputType | true
    _avg?: AgendamentoAvgAggregateInputType
    _sum?: AgendamentoSumAggregateInputType
    _min?: AgendamentoMinAggregateInputType
    _max?: AgendamentoMaxAggregateInputType
  }

  export type AgendamentoGroupByOutputType = {
    id: number
    data: Date
    servico: string
    clienteId: number
    petId: number
    _count: AgendamentoCountAggregateOutputType | null
    _avg: AgendamentoAvgAggregateOutputType | null
    _sum: AgendamentoSumAggregateOutputType | null
    _min: AgendamentoMinAggregateOutputType | null
    _max: AgendamentoMaxAggregateOutputType | null
  }

  type GetAgendamentoGroupByPayload<T extends AgendamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendamentoGroupByOutputType[P]>
            : GetScalarType<T[P], AgendamentoGroupByOutputType[P]>
        }
      >
    >


  export type AgendamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    servico?: boolean
    clienteId?: boolean
    petId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamento"]>

  export type AgendamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    servico?: boolean
    clienteId?: boolean
    petId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamento"]>

  export type AgendamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    servico?: boolean
    clienteId?: boolean
    petId?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamento"]>

  export type AgendamentoSelectScalar = {
    id?: boolean
    data?: boolean
    servico?: boolean
    clienteId?: boolean
    petId?: boolean
  }

  export type AgendamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "servico" | "clienteId" | "petId", ExtArgs["result"]["agendamento"]>
  export type AgendamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type AgendamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }
  export type AgendamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    pet?: boolean | PetDefaultArgs<ExtArgs>
  }

  export type $AgendamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agendamento"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      pet: Prisma.$PetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Date
      servico: string
      clienteId: number
      petId: number
    }, ExtArgs["result"]["agendamento"]>
    composites: {}
  }

  type AgendamentoGetPayload<S extends boolean | null | undefined | AgendamentoDefaultArgs> = $Result.GetResult<Prisma.$AgendamentoPayload, S>

  type AgendamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgendamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgendamentoCountAggregateInputType | true
    }

  export interface AgendamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agendamento'], meta: { name: 'Agendamento' } }
    /**
     * Find zero or one Agendamento that matches the filter.
     * @param {AgendamentoFindUniqueArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgendamentoFindUniqueArgs>(args: SelectSubset<T, AgendamentoFindUniqueArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agendamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgendamentoFindUniqueOrThrowArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgendamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, AgendamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoFindFirstArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgendamentoFindFirstArgs>(args?: SelectSubset<T, AgendamentoFindFirstArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoFindFirstOrThrowArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgendamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, AgendamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agendamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agendamentos
     * const agendamentos = await prisma.agendamento.findMany()
     * 
     * // Get first 10 Agendamentos
     * const agendamentos = await prisma.agendamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agendamentoWithIdOnly = await prisma.agendamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgendamentoFindManyArgs>(args?: SelectSubset<T, AgendamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agendamento.
     * @param {AgendamentoCreateArgs} args - Arguments to create a Agendamento.
     * @example
     * // Create one Agendamento
     * const Agendamento = await prisma.agendamento.create({
     *   data: {
     *     // ... data to create a Agendamento
     *   }
     * })
     * 
     */
    create<T extends AgendamentoCreateArgs>(args: SelectSubset<T, AgendamentoCreateArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agendamentos.
     * @param {AgendamentoCreateManyArgs} args - Arguments to create many Agendamentos.
     * @example
     * // Create many Agendamentos
     * const agendamento = await prisma.agendamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgendamentoCreateManyArgs>(args?: SelectSubset<T, AgendamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agendamentos and returns the data saved in the database.
     * @param {AgendamentoCreateManyAndReturnArgs} args - Arguments to create many Agendamentos.
     * @example
     * // Create many Agendamentos
     * const agendamento = await prisma.agendamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agendamentos and only return the `id`
     * const agendamentoWithIdOnly = await prisma.agendamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgendamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, AgendamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agendamento.
     * @param {AgendamentoDeleteArgs} args - Arguments to delete one Agendamento.
     * @example
     * // Delete one Agendamento
     * const Agendamento = await prisma.agendamento.delete({
     *   where: {
     *     // ... filter to delete one Agendamento
     *   }
     * })
     * 
     */
    delete<T extends AgendamentoDeleteArgs>(args: SelectSubset<T, AgendamentoDeleteArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agendamento.
     * @param {AgendamentoUpdateArgs} args - Arguments to update one Agendamento.
     * @example
     * // Update one Agendamento
     * const agendamento = await prisma.agendamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgendamentoUpdateArgs>(args: SelectSubset<T, AgendamentoUpdateArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agendamentos.
     * @param {AgendamentoDeleteManyArgs} args - Arguments to filter Agendamentos to delete.
     * @example
     * // Delete a few Agendamentos
     * const { count } = await prisma.agendamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgendamentoDeleteManyArgs>(args?: SelectSubset<T, AgendamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agendamentos
     * const agendamento = await prisma.agendamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgendamentoUpdateManyArgs>(args: SelectSubset<T, AgendamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agendamentos and returns the data updated in the database.
     * @param {AgendamentoUpdateManyAndReturnArgs} args - Arguments to update many Agendamentos.
     * @example
     * // Update many Agendamentos
     * const agendamento = await prisma.agendamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agendamentos and only return the `id`
     * const agendamentoWithIdOnly = await prisma.agendamento.updateManyAndReturn({
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
    updateManyAndReturn<T extends AgendamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, AgendamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agendamento.
     * @param {AgendamentoUpsertArgs} args - Arguments to update or create a Agendamento.
     * @example
     * // Update or create a Agendamento
     * const agendamento = await prisma.agendamento.upsert({
     *   create: {
     *     // ... data to create a Agendamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agendamento we want to update
     *   }
     * })
     */
    upsert<T extends AgendamentoUpsertArgs>(args: SelectSubset<T, AgendamentoUpsertArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoCountArgs} args - Arguments to filter Agendamentos to count.
     * @example
     * // Count the number of Agendamentos
     * const count = await prisma.agendamento.count({
     *   where: {
     *     // ... the filter for the Agendamentos we want to count
     *   }
     * })
    **/
    count<T extends AgendamentoCountArgs>(
      args?: Subset<T, AgendamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agendamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgendamentoAggregateArgs>(args: Subset<T, AgendamentoAggregateArgs>): Prisma.PrismaPromise<GetAgendamentoAggregateType<T>>

    /**
     * Group by Agendamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoGroupByArgs} args - Group by arguments.
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
      T extends AgendamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgendamentoGroupByArgs['orderBy'] }
        : { orderBy?: AgendamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgendamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agendamento model
   */
  readonly fields: AgendamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agendamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgendamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pet<T extends PetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PetDefaultArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Agendamento model
   */
  interface AgendamentoFieldRefs {
    readonly id: FieldRef<"Agendamento", 'Int'>
    readonly data: FieldRef<"Agendamento", 'DateTime'>
    readonly servico: FieldRef<"Agendamento", 'String'>
    readonly clienteId: FieldRef<"Agendamento", 'Int'>
    readonly petId: FieldRef<"Agendamento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Agendamento findUnique
   */
  export type AgendamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento findUniqueOrThrow
   */
  export type AgendamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento findFirst
   */
  export type AgendamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agendamentos.
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agendamentos.
     */
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Agendamento findFirstOrThrow
   */
  export type AgendamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agendamentos.
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agendamentos.
     */
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Agendamento findMany
   */
  export type AgendamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamentos to fetch.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agendamentos.
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Agendamento create
   */
  export type AgendamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Agendamento.
     */
    data: XOR<AgendamentoCreateInput, AgendamentoUncheckedCreateInput>
  }

  /**
   * Agendamento createMany
   */
  export type AgendamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agendamentos.
     */
    data: AgendamentoCreateManyInput | AgendamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agendamento createManyAndReturn
   */
  export type AgendamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Agendamentos.
     */
    data: AgendamentoCreateManyInput | AgendamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agendamento update
   */
  export type AgendamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Agendamento.
     */
    data: XOR<AgendamentoUpdateInput, AgendamentoUncheckedUpdateInput>
    /**
     * Choose, which Agendamento to update.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento updateMany
   */
  export type AgendamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agendamentos.
     */
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyInput>
    /**
     * Filter which Agendamentos to update
     */
    where?: AgendamentoWhereInput
    /**
     * Limit how many Agendamentos to update.
     */
    limit?: number
  }

  /**
   * Agendamento updateManyAndReturn
   */
  export type AgendamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * The data used to update Agendamentos.
     */
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyInput>
    /**
     * Filter which Agendamentos to update
     */
    where?: AgendamentoWhereInput
    /**
     * Limit how many Agendamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agendamento upsert
   */
  export type AgendamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Agendamento to update in case it exists.
     */
    where: AgendamentoWhereUniqueInput
    /**
     * In case the Agendamento found by the `where` argument doesn't exist, create a new Agendamento with this data.
     */
    create: XOR<AgendamentoCreateInput, AgendamentoUncheckedCreateInput>
    /**
     * In case the Agendamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgendamentoUpdateInput, AgendamentoUncheckedUpdateInput>
  }

  /**
   * Agendamento delete
   */
  export type AgendamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter which Agendamento to delete.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento deleteMany
   */
  export type AgendamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agendamentos to delete
     */
    where?: AgendamentoWhereInput
    /**
     * Limit how many Agendamentos to delete.
     */
    limit?: number
  }

  /**
   * Agendamento without action
   */
  export type AgendamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
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


  export const PetScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    especie: 'especie',
    raça: 'raça',
    sexo: 'sexo',
    idade: 'idade',
    idcliente: 'idcliente',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    telefone: 'telefone',
    email: 'email',
    endereço: 'endereço',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const FuncionarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    telefone: 'telefone',
    email: 'email',
    endereço: 'endereço',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FuncionarioScalarFieldEnum = (typeof FuncionarioScalarFieldEnum)[keyof typeof FuncionarioScalarFieldEnum]


  export const AtendimentoScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    idpet: 'idpet',
    idfuncionario: 'idfuncionario',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AtendimentoScalarFieldEnum = (typeof AtendimentoScalarFieldEnum)[keyof typeof AtendimentoScalarFieldEnum]


  export const SolicitacaoScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SolicitacaoScalarFieldEnum = (typeof SolicitacaoScalarFieldEnum)[keyof typeof SolicitacaoScalarFieldEnum]


  export const AgendamentoScalarFieldEnum: {
    id: 'id',
    data: 'data',
    servico: 'servico',
    clienteId: 'clienteId',
    petId: 'petId'
  };

  export type AgendamentoScalarFieldEnum = (typeof AgendamentoScalarFieldEnum)[keyof typeof AgendamentoScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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


  export type PetWhereInput = {
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    id?: IntFilter<"Pet"> | number
    nome?: StringFilter<"Pet"> | string
    especie?: StringFilter<"Pet"> | string
    raça?: StringNullableFilter<"Pet"> | string | null
    sexo?: StringFilter<"Pet"> | string
    idade?: IntFilter<"Pet"> | number
    idcliente?: IntFilter<"Pet"> | number
    createdAt?: DateTimeFilter<"Pet"> | Date | string
    updatedAt?: DateTimeFilter<"Pet"> | Date | string
    atendimentos?: AtendimentoListRelationFilter
    agendamentos?: AgendamentoListRelationFilter
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }

  export type PetOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    especie?: SortOrder
    raça?: SortOrderInput | SortOrder
    sexo?: SortOrder
    idade?: SortOrder
    idcliente?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    atendimentos?: AtendimentoOrderByRelationAggregateInput
    agendamentos?: AgendamentoOrderByRelationAggregateInput
    cliente?: ClienteOrderByWithRelationInput
  }

  export type PetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    nome?: StringFilter<"Pet"> | string
    especie?: StringFilter<"Pet"> | string
    raça?: StringNullableFilter<"Pet"> | string | null
    sexo?: StringFilter<"Pet"> | string
    idade?: IntFilter<"Pet"> | number
    idcliente?: IntFilter<"Pet"> | number
    createdAt?: DateTimeFilter<"Pet"> | Date | string
    updatedAt?: DateTimeFilter<"Pet"> | Date | string
    atendimentos?: AtendimentoListRelationFilter
    agendamentos?: AgendamentoListRelationFilter
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }, "id">

  export type PetOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    especie?: SortOrder
    raça?: SortOrderInput | SortOrder
    sexo?: SortOrder
    idade?: SortOrder
    idcliente?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PetCountOrderByAggregateInput
    _avg?: PetAvgOrderByAggregateInput
    _max?: PetMaxOrderByAggregateInput
    _min?: PetMinOrderByAggregateInput
    _sum?: PetSumOrderByAggregateInput
  }

  export type PetScalarWhereWithAggregatesInput = {
    AND?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    OR?: PetScalarWhereWithAggregatesInput[]
    NOT?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pet"> | number
    nome?: StringWithAggregatesFilter<"Pet"> | string
    especie?: StringWithAggregatesFilter<"Pet"> | string
    raça?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    sexo?: StringWithAggregatesFilter<"Pet"> | string
    idade?: IntWithAggregatesFilter<"Pet"> | number
    idcliente?: IntWithAggregatesFilter<"Pet"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nome?: StringFilter<"Cliente"> | string
    telefone?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    endereço?: StringFilter<"Cliente"> | string
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    pets?: PetListRelationFilter
    agendamentos?: AgendamentoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereço?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pets?: PetOrderByRelationAggregateInput
    agendamentos?: AgendamentoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    telefone?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    endereço?: StringFilter<"Cliente"> | string
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    pets?: PetListRelationFilter
    agendamentos?: AgendamentoListRelationFilter
  }, "id">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereço?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    telefone?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringWithAggregatesFilter<"Cliente"> | string
    endereço?: StringWithAggregatesFilter<"Cliente"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type FuncionarioWhereInput = {
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    id?: IntFilter<"Funcionario"> | number
    nome?: StringFilter<"Funcionario"> | string
    telefone?: StringFilter<"Funcionario"> | string
    email?: StringFilter<"Funcionario"> | string
    endereço?: StringFilter<"Funcionario"> | string
    createdAt?: DateTimeFilter<"Funcionario"> | Date | string
    updatedAt?: DateTimeFilter<"Funcionario"> | Date | string
    atendimentos?: AtendimentoListRelationFilter
  }

  export type FuncionarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereço?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    atendimentos?: AtendimentoOrderByRelationAggregateInput
  }

  export type FuncionarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    nome?: StringFilter<"Funcionario"> | string
    telefone?: StringFilter<"Funcionario"> | string
    email?: StringFilter<"Funcionario"> | string
    endereço?: StringFilter<"Funcionario"> | string
    createdAt?: DateTimeFilter<"Funcionario"> | Date | string
    updatedAt?: DateTimeFilter<"Funcionario"> | Date | string
    atendimentos?: AtendimentoListRelationFilter
  }, "id">

  export type FuncionarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereço?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FuncionarioCountOrderByAggregateInput
    _avg?: FuncionarioAvgOrderByAggregateInput
    _max?: FuncionarioMaxOrderByAggregateInput
    _min?: FuncionarioMinOrderByAggregateInput
    _sum?: FuncionarioSumOrderByAggregateInput
  }

  export type FuncionarioScalarWhereWithAggregatesInput = {
    AND?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    OR?: FuncionarioScalarWhereWithAggregatesInput[]
    NOT?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Funcionario"> | number
    nome?: StringWithAggregatesFilter<"Funcionario"> | string
    telefone?: StringWithAggregatesFilter<"Funcionario"> | string
    email?: StringWithAggregatesFilter<"Funcionario"> | string
    endereço?: StringWithAggregatesFilter<"Funcionario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Funcionario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Funcionario"> | Date | string
  }

  export type AtendimentoWhereInput = {
    AND?: AtendimentoWhereInput | AtendimentoWhereInput[]
    OR?: AtendimentoWhereInput[]
    NOT?: AtendimentoWhereInput | AtendimentoWhereInput[]
    id?: IntFilter<"Atendimento"> | number
    tipo?: StringFilter<"Atendimento"> | string
    idpet?: IntFilter<"Atendimento"> | number
    idfuncionario?: IntFilter<"Atendimento"> | number
    createdAt?: DateTimeFilter<"Atendimento"> | Date | string
    updatedAt?: DateTimeFilter<"Atendimento"> | Date | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
    funcionario?: XOR<FuncionarioScalarRelationFilter, FuncionarioWhereInput>
  }

  export type AtendimentoOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    idpet?: SortOrder
    idfuncionario?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pet?: PetOrderByWithRelationInput
    funcionario?: FuncionarioOrderByWithRelationInput
  }

  export type AtendimentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AtendimentoWhereInput | AtendimentoWhereInput[]
    OR?: AtendimentoWhereInput[]
    NOT?: AtendimentoWhereInput | AtendimentoWhereInput[]
    tipo?: StringFilter<"Atendimento"> | string
    idpet?: IntFilter<"Atendimento"> | number
    idfuncionario?: IntFilter<"Atendimento"> | number
    createdAt?: DateTimeFilter<"Atendimento"> | Date | string
    updatedAt?: DateTimeFilter<"Atendimento"> | Date | string
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
    funcionario?: XOR<FuncionarioScalarRelationFilter, FuncionarioWhereInput>
  }, "id">

  export type AtendimentoOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    idpet?: SortOrder
    idfuncionario?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AtendimentoCountOrderByAggregateInput
    _avg?: AtendimentoAvgOrderByAggregateInput
    _max?: AtendimentoMaxOrderByAggregateInput
    _min?: AtendimentoMinOrderByAggregateInput
    _sum?: AtendimentoSumOrderByAggregateInput
  }

  export type AtendimentoScalarWhereWithAggregatesInput = {
    AND?: AtendimentoScalarWhereWithAggregatesInput | AtendimentoScalarWhereWithAggregatesInput[]
    OR?: AtendimentoScalarWhereWithAggregatesInput[]
    NOT?: AtendimentoScalarWhereWithAggregatesInput | AtendimentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Atendimento"> | number
    tipo?: StringWithAggregatesFilter<"Atendimento"> | string
    idpet?: IntWithAggregatesFilter<"Atendimento"> | number
    idfuncionario?: IntWithAggregatesFilter<"Atendimento"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Atendimento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Atendimento"> | Date | string
  }

  export type SolicitacaoWhereInput = {
    AND?: SolicitacaoWhereInput | SolicitacaoWhereInput[]
    OR?: SolicitacaoWhereInput[]
    NOT?: SolicitacaoWhereInput | SolicitacaoWhereInput[]
    id?: IntFilter<"Solicitacao"> | number
    descricao?: StringFilter<"Solicitacao"> | string
    status?: StringFilter<"Solicitacao"> | string
    createdAt?: DateTimeFilter<"Solicitacao"> | Date | string
    updatedAt?: DateTimeFilter<"Solicitacao"> | Date | string
  }

  export type SolicitacaoOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolicitacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SolicitacaoWhereInput | SolicitacaoWhereInput[]
    OR?: SolicitacaoWhereInput[]
    NOT?: SolicitacaoWhereInput | SolicitacaoWhereInput[]
    descricao?: StringFilter<"Solicitacao"> | string
    status?: StringFilter<"Solicitacao"> | string
    createdAt?: DateTimeFilter<"Solicitacao"> | Date | string
    updatedAt?: DateTimeFilter<"Solicitacao"> | Date | string
  }, "id">

  export type SolicitacaoOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SolicitacaoCountOrderByAggregateInput
    _avg?: SolicitacaoAvgOrderByAggregateInput
    _max?: SolicitacaoMaxOrderByAggregateInput
    _min?: SolicitacaoMinOrderByAggregateInput
    _sum?: SolicitacaoSumOrderByAggregateInput
  }

  export type SolicitacaoScalarWhereWithAggregatesInput = {
    AND?: SolicitacaoScalarWhereWithAggregatesInput | SolicitacaoScalarWhereWithAggregatesInput[]
    OR?: SolicitacaoScalarWhereWithAggregatesInput[]
    NOT?: SolicitacaoScalarWhereWithAggregatesInput | SolicitacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Solicitacao"> | number
    descricao?: StringWithAggregatesFilter<"Solicitacao"> | string
    status?: StringWithAggregatesFilter<"Solicitacao"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Solicitacao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Solicitacao"> | Date | string
  }

  export type AgendamentoWhereInput = {
    AND?: AgendamentoWhereInput | AgendamentoWhereInput[]
    OR?: AgendamentoWhereInput[]
    NOT?: AgendamentoWhereInput | AgendamentoWhereInput[]
    id?: IntFilter<"Agendamento"> | number
    data?: DateTimeFilter<"Agendamento"> | Date | string
    servico?: StringFilter<"Agendamento"> | string
    clienteId?: IntFilter<"Agendamento"> | number
    petId?: IntFilter<"Agendamento"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }

  export type AgendamentoOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    servico?: SortOrder
    clienteId?: SortOrder
    petId?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    pet?: PetOrderByWithRelationInput
  }

  export type AgendamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AgendamentoWhereInput | AgendamentoWhereInput[]
    OR?: AgendamentoWhereInput[]
    NOT?: AgendamentoWhereInput | AgendamentoWhereInput[]
    data?: DateTimeFilter<"Agendamento"> | Date | string
    servico?: StringFilter<"Agendamento"> | string
    clienteId?: IntFilter<"Agendamento"> | number
    petId?: IntFilter<"Agendamento"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    pet?: XOR<PetScalarRelationFilter, PetWhereInput>
  }, "id">

  export type AgendamentoOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    servico?: SortOrder
    clienteId?: SortOrder
    petId?: SortOrder
    _count?: AgendamentoCountOrderByAggregateInput
    _avg?: AgendamentoAvgOrderByAggregateInput
    _max?: AgendamentoMaxOrderByAggregateInput
    _min?: AgendamentoMinOrderByAggregateInput
    _sum?: AgendamentoSumOrderByAggregateInput
  }

  export type AgendamentoScalarWhereWithAggregatesInput = {
    AND?: AgendamentoScalarWhereWithAggregatesInput | AgendamentoScalarWhereWithAggregatesInput[]
    OR?: AgendamentoScalarWhereWithAggregatesInput[]
    NOT?: AgendamentoScalarWhereWithAggregatesInput | AgendamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Agendamento"> | number
    data?: DateTimeWithAggregatesFilter<"Agendamento"> | Date | string
    servico?: StringWithAggregatesFilter<"Agendamento"> | string
    clienteId?: IntWithAggregatesFilter<"Agendamento"> | number
    petId?: IntWithAggregatesFilter<"Agendamento"> | number
  }

  export type PetCreateInput = {
    nome: string
    especie: string
    raça?: string | null
    sexo: string
    idade: number
    createdAt?: Date | string
    updatedAt?: Date | string
    atendimentos?: AtendimentoCreateNestedManyWithoutPetInput
    agendamentos?: AgendamentoCreateNestedManyWithoutPetInput
    cliente: ClienteCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateInput = {
    id?: number
    nome: string
    especie: string
    raça?: string | null
    sexo: string
    idade: number
    idcliente: number
    createdAt?: Date | string
    updatedAt?: Date | string
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutPetInput
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    especie?: StringFieldUpdateOperationsInput | string
    raça?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentos?: AtendimentoUpdateManyWithoutPetNestedInput
    agendamentos?: AgendamentoUpdateManyWithoutPetNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    especie?: StringFieldUpdateOperationsInput | string
    raça?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    idcliente?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutPetNestedInput
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateManyInput = {
    id?: number
    nome: string
    especie: string
    raça?: string | null
    sexo: string
    idade: number
    idcliente: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    especie?: StringFieldUpdateOperationsInput | string
    raça?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    especie?: StringFieldUpdateOperationsInput | string
    raça?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    idcliente?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateInput = {
    nome: string
    telefone: string
    email: string
    endereço: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pets?: PetCreateNestedManyWithoutClienteInput
    agendamentos?: AgendamentoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    nome: string
    telefone: string
    email: string
    endereço: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pets?: PetUncheckedCreateNestedManyWithoutClienteInput
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereço?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUpdateManyWithoutClienteNestedInput
    agendamentos?: AgendamentoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereço?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUncheckedUpdateManyWithoutClienteNestedInput
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    nome: string
    telefone: string
    email: string
    endereço: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereço?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereço?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioCreateInput = {
    nome: string
    telefone: string
    email: string
    endereço: string
    createdAt?: Date | string
    updatedAt?: Date | string
    atendimentos?: AtendimentoCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioUncheckedCreateInput = {
    id?: number
    nome: string
    telefone: string
    email: string
    endereço: string
    createdAt?: Date | string
    updatedAt?: Date | string
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereço?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentos?: AtendimentoUpdateManyWithoutFuncionarioNestedInput
  }

  export type FuncionarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereço?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutFuncionarioNestedInput
  }

  export type FuncionarioCreateManyInput = {
    id?: number
    nome: string
    telefone: string
    email: string
    endereço: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuncionarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereço?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereço?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtendimentoCreateInput = {
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pet: PetCreateNestedOneWithoutAtendimentosInput
    funcionario: FuncionarioCreateNestedOneWithoutAtendimentosInput
  }

  export type AtendimentoUncheckedCreateInput = {
    id?: number
    tipo: string
    idpet: number
    idfuncionario: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtendimentoUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: PetUpdateOneRequiredWithoutAtendimentosNestedInput
    funcionario?: FuncionarioUpdateOneRequiredWithoutAtendimentosNestedInput
  }

  export type AtendimentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    idpet?: IntFieldUpdateOperationsInput | number
    idfuncionario?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtendimentoCreateManyInput = {
    id?: number
    tipo: string
    idpet: number
    idfuncionario: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtendimentoUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtendimentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    idpet?: IntFieldUpdateOperationsInput | number
    idfuncionario?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitacaoCreateInput = {
    descricao: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolicitacaoUncheckedCreateInput = {
    id?: number
    descricao: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolicitacaoUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitacaoCreateManyInput = {
    id?: number
    descricao: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolicitacaoUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoCreateInput = {
    data: Date | string
    servico: string
    cliente: ClienteCreateNestedOneWithoutAgendamentosInput
    pet: PetCreateNestedOneWithoutAgendamentosInput
  }

  export type AgendamentoUncheckedCreateInput = {
    id?: number
    data: Date | string
    servico: string
    clienteId: number
    petId: number
  }

  export type AgendamentoUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: StringFieldUpdateOperationsInput | string
    cliente?: ClienteUpdateOneRequiredWithoutAgendamentosNestedInput
    pet?: PetUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type AgendamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    petId?: IntFieldUpdateOperationsInput | number
  }

  export type AgendamentoCreateManyInput = {
    id?: number
    data: Date | string
    servico: string
    clienteId: number
    petId: number
  }

  export type AgendamentoUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: StringFieldUpdateOperationsInput | string
  }

  export type AgendamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
    petId?: IntFieldUpdateOperationsInput | number
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type AtendimentoListRelationFilter = {
    every?: AtendimentoWhereInput
    some?: AtendimentoWhereInput
    none?: AtendimentoWhereInput
  }

  export type AgendamentoListRelationFilter = {
    every?: AgendamentoWhereInput
    some?: AgendamentoWhereInput
    none?: AgendamentoWhereInput
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AtendimentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgendamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PetCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    especie?: SortOrder
    raça?: SortOrder
    sexo?: SortOrder
    idade?: SortOrder
    idcliente?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetAvgOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
    idcliente?: SortOrder
  }

  export type PetMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    especie?: SortOrder
    raça?: SortOrder
    sexo?: SortOrder
    idade?: SortOrder
    idcliente?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    especie?: SortOrder
    raça?: SortOrder
    sexo?: SortOrder
    idade?: SortOrder
    idcliente?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PetSumOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
    idcliente?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type PetListRelationFilter = {
    every?: PetWhereInput
    some?: PetWhereInput
    none?: PetWhereInput
  }

  export type PetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereço?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereço?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereço?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FuncionarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereço?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FuncionarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FuncionarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereço?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FuncionarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    endereço?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FuncionarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PetScalarRelationFilter = {
    is?: PetWhereInput
    isNot?: PetWhereInput
  }

  export type FuncionarioScalarRelationFilter = {
    is?: FuncionarioWhereInput
    isNot?: FuncionarioWhereInput
  }

  export type AtendimentoCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    idpet?: SortOrder
    idfuncionario?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AtendimentoAvgOrderByAggregateInput = {
    id?: SortOrder
    idpet?: SortOrder
    idfuncionario?: SortOrder
  }

  export type AtendimentoMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    idpet?: SortOrder
    idfuncionario?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AtendimentoMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    idpet?: SortOrder
    idfuncionario?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AtendimentoSumOrderByAggregateInput = {
    id?: SortOrder
    idpet?: SortOrder
    idfuncionario?: SortOrder
  }

  export type SolicitacaoCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolicitacaoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SolicitacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolicitacaoMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolicitacaoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AgendamentoCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    servico?: SortOrder
    clienteId?: SortOrder
    petId?: SortOrder
  }

  export type AgendamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    petId?: SortOrder
  }

  export type AgendamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    servico?: SortOrder
    clienteId?: SortOrder
    petId?: SortOrder
  }

  export type AgendamentoMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    servico?: SortOrder
    clienteId?: SortOrder
    petId?: SortOrder
  }

  export type AgendamentoSumOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    petId?: SortOrder
  }

  export type AtendimentoCreateNestedManyWithoutPetInput = {
    create?: XOR<AtendimentoCreateWithoutPetInput, AtendimentoUncheckedCreateWithoutPetInput> | AtendimentoCreateWithoutPetInput[] | AtendimentoUncheckedCreateWithoutPetInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutPetInput | AtendimentoCreateOrConnectWithoutPetInput[]
    createMany?: AtendimentoCreateManyPetInputEnvelope
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type AgendamentoCreateNestedManyWithoutPetInput = {
    create?: XOR<AgendamentoCreateWithoutPetInput, AgendamentoUncheckedCreateWithoutPetInput> | AgendamentoCreateWithoutPetInput[] | AgendamentoUncheckedCreateWithoutPetInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutPetInput | AgendamentoCreateOrConnectWithoutPetInput[]
    createMany?: AgendamentoCreateManyPetInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type ClienteCreateNestedOneWithoutPetsInput = {
    create?: XOR<ClienteCreateWithoutPetsInput, ClienteUncheckedCreateWithoutPetsInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPetsInput
    connect?: ClienteWhereUniqueInput
  }

  export type AtendimentoUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<AtendimentoCreateWithoutPetInput, AtendimentoUncheckedCreateWithoutPetInput> | AtendimentoCreateWithoutPetInput[] | AtendimentoUncheckedCreateWithoutPetInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutPetInput | AtendimentoCreateOrConnectWithoutPetInput[]
    createMany?: AtendimentoCreateManyPetInputEnvelope
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type AgendamentoUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<AgendamentoCreateWithoutPetInput, AgendamentoUncheckedCreateWithoutPetInput> | AgendamentoCreateWithoutPetInput[] | AgendamentoUncheckedCreateWithoutPetInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutPetInput | AgendamentoCreateOrConnectWithoutPetInput[]
    createMany?: AgendamentoCreateManyPetInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AtendimentoUpdateManyWithoutPetNestedInput = {
    create?: XOR<AtendimentoCreateWithoutPetInput, AtendimentoUncheckedCreateWithoutPetInput> | AtendimentoCreateWithoutPetInput[] | AtendimentoUncheckedCreateWithoutPetInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutPetInput | AtendimentoCreateOrConnectWithoutPetInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutPetInput | AtendimentoUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: AtendimentoCreateManyPetInputEnvelope
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutPetInput | AtendimentoUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutPetInput | AtendimentoUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type AgendamentoUpdateManyWithoutPetNestedInput = {
    create?: XOR<AgendamentoCreateWithoutPetInput, AgendamentoUncheckedCreateWithoutPetInput> | AgendamentoCreateWithoutPetInput[] | AgendamentoUncheckedCreateWithoutPetInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutPetInput | AgendamentoCreateOrConnectWithoutPetInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutPetInput | AgendamentoUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: AgendamentoCreateManyPetInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutPetInput | AgendamentoUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutPetInput | AgendamentoUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type ClienteUpdateOneRequiredWithoutPetsNestedInput = {
    create?: XOR<ClienteCreateWithoutPetsInput, ClienteUncheckedCreateWithoutPetsInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPetsInput
    upsert?: ClienteUpsertWithoutPetsInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutPetsInput, ClienteUpdateWithoutPetsInput>, ClienteUncheckedUpdateWithoutPetsInput>
  }

  export type AtendimentoUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<AtendimentoCreateWithoutPetInput, AtendimentoUncheckedCreateWithoutPetInput> | AtendimentoCreateWithoutPetInput[] | AtendimentoUncheckedCreateWithoutPetInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutPetInput | AtendimentoCreateOrConnectWithoutPetInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutPetInput | AtendimentoUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: AtendimentoCreateManyPetInputEnvelope
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutPetInput | AtendimentoUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutPetInput | AtendimentoUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type AgendamentoUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<AgendamentoCreateWithoutPetInput, AgendamentoUncheckedCreateWithoutPetInput> | AgendamentoCreateWithoutPetInput[] | AgendamentoUncheckedCreateWithoutPetInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutPetInput | AgendamentoCreateOrConnectWithoutPetInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutPetInput | AgendamentoUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: AgendamentoCreateManyPetInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutPetInput | AgendamentoUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutPetInput | AgendamentoUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type PetCreateNestedManyWithoutClienteInput = {
    create?: XOR<PetCreateWithoutClienteInput, PetUncheckedCreateWithoutClienteInput> | PetCreateWithoutClienteInput[] | PetUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PetCreateOrConnectWithoutClienteInput | PetCreateOrConnectWithoutClienteInput[]
    createMany?: PetCreateManyClienteInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type AgendamentoCreateNestedManyWithoutClienteInput = {
    create?: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput> | AgendamentoCreateWithoutClienteInput[] | AgendamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutClienteInput | AgendamentoCreateOrConnectWithoutClienteInput[]
    createMany?: AgendamentoCreateManyClienteInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type PetUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<PetCreateWithoutClienteInput, PetUncheckedCreateWithoutClienteInput> | PetCreateWithoutClienteInput[] | PetUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PetCreateOrConnectWithoutClienteInput | PetCreateOrConnectWithoutClienteInput[]
    createMany?: PetCreateManyClienteInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type AgendamentoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput> | AgendamentoCreateWithoutClienteInput[] | AgendamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutClienteInput | AgendamentoCreateOrConnectWithoutClienteInput[]
    createMany?: AgendamentoCreateManyClienteInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type PetUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PetCreateWithoutClienteInput, PetUncheckedCreateWithoutClienteInput> | PetCreateWithoutClienteInput[] | PetUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PetCreateOrConnectWithoutClienteInput | PetCreateOrConnectWithoutClienteInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutClienteInput | PetUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PetCreateManyClienteInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutClienteInput | PetUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PetUpdateManyWithWhereWithoutClienteInput | PetUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type AgendamentoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput> | AgendamentoCreateWithoutClienteInput[] | AgendamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutClienteInput | AgendamentoCreateOrConnectWithoutClienteInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutClienteInput | AgendamentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AgendamentoCreateManyClienteInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutClienteInput | AgendamentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutClienteInput | AgendamentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type PetUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PetCreateWithoutClienteInput, PetUncheckedCreateWithoutClienteInput> | PetCreateWithoutClienteInput[] | PetUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PetCreateOrConnectWithoutClienteInput | PetCreateOrConnectWithoutClienteInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutClienteInput | PetUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PetCreateManyClienteInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutClienteInput | PetUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PetUpdateManyWithWhereWithoutClienteInput | PetUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type AgendamentoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput> | AgendamentoCreateWithoutClienteInput[] | AgendamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutClienteInput | AgendamentoCreateOrConnectWithoutClienteInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutClienteInput | AgendamentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AgendamentoCreateManyClienteInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutClienteInput | AgendamentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutClienteInput | AgendamentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type AtendimentoCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<AtendimentoCreateWithoutFuncionarioInput, AtendimentoUncheckedCreateWithoutFuncionarioInput> | AtendimentoCreateWithoutFuncionarioInput[] | AtendimentoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutFuncionarioInput | AtendimentoCreateOrConnectWithoutFuncionarioInput[]
    createMany?: AtendimentoCreateManyFuncionarioInputEnvelope
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type AtendimentoUncheckedCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<AtendimentoCreateWithoutFuncionarioInput, AtendimentoUncheckedCreateWithoutFuncionarioInput> | AtendimentoCreateWithoutFuncionarioInput[] | AtendimentoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutFuncionarioInput | AtendimentoCreateOrConnectWithoutFuncionarioInput[]
    createMany?: AtendimentoCreateManyFuncionarioInputEnvelope
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
  }

  export type AtendimentoUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<AtendimentoCreateWithoutFuncionarioInput, AtendimentoUncheckedCreateWithoutFuncionarioInput> | AtendimentoCreateWithoutFuncionarioInput[] | AtendimentoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutFuncionarioInput | AtendimentoCreateOrConnectWithoutFuncionarioInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutFuncionarioInput | AtendimentoUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: AtendimentoCreateManyFuncionarioInputEnvelope
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutFuncionarioInput | AtendimentoUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutFuncionarioInput | AtendimentoUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type AtendimentoUncheckedUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<AtendimentoCreateWithoutFuncionarioInput, AtendimentoUncheckedCreateWithoutFuncionarioInput> | AtendimentoCreateWithoutFuncionarioInput[] | AtendimentoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: AtendimentoCreateOrConnectWithoutFuncionarioInput | AtendimentoCreateOrConnectWithoutFuncionarioInput[]
    upsert?: AtendimentoUpsertWithWhereUniqueWithoutFuncionarioInput | AtendimentoUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: AtendimentoCreateManyFuncionarioInputEnvelope
    set?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    disconnect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    delete?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    connect?: AtendimentoWhereUniqueInput | AtendimentoWhereUniqueInput[]
    update?: AtendimentoUpdateWithWhereUniqueWithoutFuncionarioInput | AtendimentoUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: AtendimentoUpdateManyWithWhereWithoutFuncionarioInput | AtendimentoUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
  }

  export type PetCreateNestedOneWithoutAtendimentosInput = {
    create?: XOR<PetCreateWithoutAtendimentosInput, PetUncheckedCreateWithoutAtendimentosInput>
    connectOrCreate?: PetCreateOrConnectWithoutAtendimentosInput
    connect?: PetWhereUniqueInput
  }

  export type FuncionarioCreateNestedOneWithoutAtendimentosInput = {
    create?: XOR<FuncionarioCreateWithoutAtendimentosInput, FuncionarioUncheckedCreateWithoutAtendimentosInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutAtendimentosInput
    connect?: FuncionarioWhereUniqueInput
  }

  export type PetUpdateOneRequiredWithoutAtendimentosNestedInput = {
    create?: XOR<PetCreateWithoutAtendimentosInput, PetUncheckedCreateWithoutAtendimentosInput>
    connectOrCreate?: PetCreateOrConnectWithoutAtendimentosInput
    upsert?: PetUpsertWithoutAtendimentosInput
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutAtendimentosInput, PetUpdateWithoutAtendimentosInput>, PetUncheckedUpdateWithoutAtendimentosInput>
  }

  export type FuncionarioUpdateOneRequiredWithoutAtendimentosNestedInput = {
    create?: XOR<FuncionarioCreateWithoutAtendimentosInput, FuncionarioUncheckedCreateWithoutAtendimentosInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutAtendimentosInput
    upsert?: FuncionarioUpsertWithoutAtendimentosInput
    connect?: FuncionarioWhereUniqueInput
    update?: XOR<XOR<FuncionarioUpdateToOneWithWhereWithoutAtendimentosInput, FuncionarioUpdateWithoutAtendimentosInput>, FuncionarioUncheckedUpdateWithoutAtendimentosInput>
  }

  export type ClienteCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<ClienteCreateWithoutAgendamentosInput, ClienteUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAgendamentosInput
    connect?: ClienteWhereUniqueInput
  }

  export type PetCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<PetCreateWithoutAgendamentosInput, PetUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: PetCreateOrConnectWithoutAgendamentosInput
    connect?: PetWhereUniqueInput
  }

  export type ClienteUpdateOneRequiredWithoutAgendamentosNestedInput = {
    create?: XOR<ClienteCreateWithoutAgendamentosInput, ClienteUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAgendamentosInput
    upsert?: ClienteUpsertWithoutAgendamentosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutAgendamentosInput, ClienteUpdateWithoutAgendamentosInput>, ClienteUncheckedUpdateWithoutAgendamentosInput>
  }

  export type PetUpdateOneRequiredWithoutAgendamentosNestedInput = {
    create?: XOR<PetCreateWithoutAgendamentosInput, PetUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: PetCreateOrConnectWithoutAgendamentosInput
    upsert?: PetUpsertWithoutAgendamentosInput
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutAgendamentosInput, PetUpdateWithoutAgendamentosInput>, PetUncheckedUpdateWithoutAgendamentosInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type AtendimentoCreateWithoutPetInput = {
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    funcionario: FuncionarioCreateNestedOneWithoutAtendimentosInput
  }

  export type AtendimentoUncheckedCreateWithoutPetInput = {
    id?: number
    tipo: string
    idfuncionario: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtendimentoCreateOrConnectWithoutPetInput = {
    where: AtendimentoWhereUniqueInput
    create: XOR<AtendimentoCreateWithoutPetInput, AtendimentoUncheckedCreateWithoutPetInput>
  }

  export type AtendimentoCreateManyPetInputEnvelope = {
    data: AtendimentoCreateManyPetInput | AtendimentoCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type AgendamentoCreateWithoutPetInput = {
    data: Date | string
    servico: string
    cliente: ClienteCreateNestedOneWithoutAgendamentosInput
  }

  export type AgendamentoUncheckedCreateWithoutPetInput = {
    id?: number
    data: Date | string
    servico: string
    clienteId: number
  }

  export type AgendamentoCreateOrConnectWithoutPetInput = {
    where: AgendamentoWhereUniqueInput
    create: XOR<AgendamentoCreateWithoutPetInput, AgendamentoUncheckedCreateWithoutPetInput>
  }

  export type AgendamentoCreateManyPetInputEnvelope = {
    data: AgendamentoCreateManyPetInput | AgendamentoCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type ClienteCreateWithoutPetsInput = {
    nome: string
    telefone: string
    email: string
    endereço: string
    createdAt?: Date | string
    updatedAt?: Date | string
    agendamentos?: AgendamentoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutPetsInput = {
    id?: number
    nome: string
    telefone: string
    email: string
    endereço: string
    createdAt?: Date | string
    updatedAt?: Date | string
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutPetsInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutPetsInput, ClienteUncheckedCreateWithoutPetsInput>
  }

  export type AtendimentoUpsertWithWhereUniqueWithoutPetInput = {
    where: AtendimentoWhereUniqueInput
    update: XOR<AtendimentoUpdateWithoutPetInput, AtendimentoUncheckedUpdateWithoutPetInput>
    create: XOR<AtendimentoCreateWithoutPetInput, AtendimentoUncheckedCreateWithoutPetInput>
  }

  export type AtendimentoUpdateWithWhereUniqueWithoutPetInput = {
    where: AtendimentoWhereUniqueInput
    data: XOR<AtendimentoUpdateWithoutPetInput, AtendimentoUncheckedUpdateWithoutPetInput>
  }

  export type AtendimentoUpdateManyWithWhereWithoutPetInput = {
    where: AtendimentoScalarWhereInput
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyWithoutPetInput>
  }

  export type AtendimentoScalarWhereInput = {
    AND?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
    OR?: AtendimentoScalarWhereInput[]
    NOT?: AtendimentoScalarWhereInput | AtendimentoScalarWhereInput[]
    id?: IntFilter<"Atendimento"> | number
    tipo?: StringFilter<"Atendimento"> | string
    idpet?: IntFilter<"Atendimento"> | number
    idfuncionario?: IntFilter<"Atendimento"> | number
    createdAt?: DateTimeFilter<"Atendimento"> | Date | string
    updatedAt?: DateTimeFilter<"Atendimento"> | Date | string
  }

  export type AgendamentoUpsertWithWhereUniqueWithoutPetInput = {
    where: AgendamentoWhereUniqueInput
    update: XOR<AgendamentoUpdateWithoutPetInput, AgendamentoUncheckedUpdateWithoutPetInput>
    create: XOR<AgendamentoCreateWithoutPetInput, AgendamentoUncheckedCreateWithoutPetInput>
  }

  export type AgendamentoUpdateWithWhereUniqueWithoutPetInput = {
    where: AgendamentoWhereUniqueInput
    data: XOR<AgendamentoUpdateWithoutPetInput, AgendamentoUncheckedUpdateWithoutPetInput>
  }

  export type AgendamentoUpdateManyWithWhereWithoutPetInput = {
    where: AgendamentoScalarWhereInput
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyWithoutPetInput>
  }

  export type AgendamentoScalarWhereInput = {
    AND?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
    OR?: AgendamentoScalarWhereInput[]
    NOT?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
    id?: IntFilter<"Agendamento"> | number
    data?: DateTimeFilter<"Agendamento"> | Date | string
    servico?: StringFilter<"Agendamento"> | string
    clienteId?: IntFilter<"Agendamento"> | number
    petId?: IntFilter<"Agendamento"> | number
  }

  export type ClienteUpsertWithoutPetsInput = {
    update: XOR<ClienteUpdateWithoutPetsInput, ClienteUncheckedUpdateWithoutPetsInput>
    create: XOR<ClienteCreateWithoutPetsInput, ClienteUncheckedCreateWithoutPetsInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutPetsInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutPetsInput, ClienteUncheckedUpdateWithoutPetsInput>
  }

  export type ClienteUpdateWithoutPetsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereço?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendamentos?: AgendamentoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutPetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereço?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type PetCreateWithoutClienteInput = {
    nome: string
    especie: string
    raça?: string | null
    sexo: string
    idade: number
    createdAt?: Date | string
    updatedAt?: Date | string
    atendimentos?: AtendimentoCreateNestedManyWithoutPetInput
    agendamentos?: AgendamentoCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutClienteInput = {
    id?: number
    nome: string
    especie: string
    raça?: string | null
    sexo: string
    idade: number
    createdAt?: Date | string
    updatedAt?: Date | string
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutPetInput
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutClienteInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutClienteInput, PetUncheckedCreateWithoutClienteInput>
  }

  export type PetCreateManyClienteInputEnvelope = {
    data: PetCreateManyClienteInput | PetCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type AgendamentoCreateWithoutClienteInput = {
    data: Date | string
    servico: string
    pet: PetCreateNestedOneWithoutAgendamentosInput
  }

  export type AgendamentoUncheckedCreateWithoutClienteInput = {
    id?: number
    data: Date | string
    servico: string
    petId: number
  }

  export type AgendamentoCreateOrConnectWithoutClienteInput = {
    where: AgendamentoWhereUniqueInput
    create: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput>
  }

  export type AgendamentoCreateManyClienteInputEnvelope = {
    data: AgendamentoCreateManyClienteInput | AgendamentoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type PetUpsertWithWhereUniqueWithoutClienteInput = {
    where: PetWhereUniqueInput
    update: XOR<PetUpdateWithoutClienteInput, PetUncheckedUpdateWithoutClienteInput>
    create: XOR<PetCreateWithoutClienteInput, PetUncheckedCreateWithoutClienteInput>
  }

  export type PetUpdateWithWhereUniqueWithoutClienteInput = {
    where: PetWhereUniqueInput
    data: XOR<PetUpdateWithoutClienteInput, PetUncheckedUpdateWithoutClienteInput>
  }

  export type PetUpdateManyWithWhereWithoutClienteInput = {
    where: PetScalarWhereInput
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyWithoutClienteInput>
  }

  export type PetScalarWhereInput = {
    AND?: PetScalarWhereInput | PetScalarWhereInput[]
    OR?: PetScalarWhereInput[]
    NOT?: PetScalarWhereInput | PetScalarWhereInput[]
    id?: IntFilter<"Pet"> | number
    nome?: StringFilter<"Pet"> | string
    especie?: StringFilter<"Pet"> | string
    raça?: StringNullableFilter<"Pet"> | string | null
    sexo?: StringFilter<"Pet"> | string
    idade?: IntFilter<"Pet"> | number
    idcliente?: IntFilter<"Pet"> | number
    createdAt?: DateTimeFilter<"Pet"> | Date | string
    updatedAt?: DateTimeFilter<"Pet"> | Date | string
  }

  export type AgendamentoUpsertWithWhereUniqueWithoutClienteInput = {
    where: AgendamentoWhereUniqueInput
    update: XOR<AgendamentoUpdateWithoutClienteInput, AgendamentoUncheckedUpdateWithoutClienteInput>
    create: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput>
  }

  export type AgendamentoUpdateWithWhereUniqueWithoutClienteInput = {
    where: AgendamentoWhereUniqueInput
    data: XOR<AgendamentoUpdateWithoutClienteInput, AgendamentoUncheckedUpdateWithoutClienteInput>
  }

  export type AgendamentoUpdateManyWithWhereWithoutClienteInput = {
    where: AgendamentoScalarWhereInput
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyWithoutClienteInput>
  }

  export type AtendimentoCreateWithoutFuncionarioInput = {
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pet: PetCreateNestedOneWithoutAtendimentosInput
  }

  export type AtendimentoUncheckedCreateWithoutFuncionarioInput = {
    id?: number
    tipo: string
    idpet: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtendimentoCreateOrConnectWithoutFuncionarioInput = {
    where: AtendimentoWhereUniqueInput
    create: XOR<AtendimentoCreateWithoutFuncionarioInput, AtendimentoUncheckedCreateWithoutFuncionarioInput>
  }

  export type AtendimentoCreateManyFuncionarioInputEnvelope = {
    data: AtendimentoCreateManyFuncionarioInput | AtendimentoCreateManyFuncionarioInput[]
    skipDuplicates?: boolean
  }

  export type AtendimentoUpsertWithWhereUniqueWithoutFuncionarioInput = {
    where: AtendimentoWhereUniqueInput
    update: XOR<AtendimentoUpdateWithoutFuncionarioInput, AtendimentoUncheckedUpdateWithoutFuncionarioInput>
    create: XOR<AtendimentoCreateWithoutFuncionarioInput, AtendimentoUncheckedCreateWithoutFuncionarioInput>
  }

  export type AtendimentoUpdateWithWhereUniqueWithoutFuncionarioInput = {
    where: AtendimentoWhereUniqueInput
    data: XOR<AtendimentoUpdateWithoutFuncionarioInput, AtendimentoUncheckedUpdateWithoutFuncionarioInput>
  }

  export type AtendimentoUpdateManyWithWhereWithoutFuncionarioInput = {
    where: AtendimentoScalarWhereInput
    data: XOR<AtendimentoUpdateManyMutationInput, AtendimentoUncheckedUpdateManyWithoutFuncionarioInput>
  }

  export type PetCreateWithoutAtendimentosInput = {
    nome: string
    especie: string
    raça?: string | null
    sexo: string
    idade: number
    createdAt?: Date | string
    updatedAt?: Date | string
    agendamentos?: AgendamentoCreateNestedManyWithoutPetInput
    cliente: ClienteCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateWithoutAtendimentosInput = {
    id?: number
    nome: string
    especie: string
    raça?: string | null
    sexo: string
    idade: number
    idcliente: number
    createdAt?: Date | string
    updatedAt?: Date | string
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutAtendimentosInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutAtendimentosInput, PetUncheckedCreateWithoutAtendimentosInput>
  }

  export type FuncionarioCreateWithoutAtendimentosInput = {
    nome: string
    telefone: string
    email: string
    endereço: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuncionarioUncheckedCreateWithoutAtendimentosInput = {
    id?: number
    nome: string
    telefone: string
    email: string
    endereço: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuncionarioCreateOrConnectWithoutAtendimentosInput = {
    where: FuncionarioWhereUniqueInput
    create: XOR<FuncionarioCreateWithoutAtendimentosInput, FuncionarioUncheckedCreateWithoutAtendimentosInput>
  }

  export type PetUpsertWithoutAtendimentosInput = {
    update: XOR<PetUpdateWithoutAtendimentosInput, PetUncheckedUpdateWithoutAtendimentosInput>
    create: XOR<PetCreateWithoutAtendimentosInput, PetUncheckedCreateWithoutAtendimentosInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutAtendimentosInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutAtendimentosInput, PetUncheckedUpdateWithoutAtendimentosInput>
  }

  export type PetUpdateWithoutAtendimentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    especie?: StringFieldUpdateOperationsInput | string
    raça?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendamentos?: AgendamentoUpdateManyWithoutPetNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateWithoutAtendimentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    especie?: StringFieldUpdateOperationsInput | string
    raça?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    idcliente?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutPetNestedInput
  }

  export type FuncionarioUpsertWithoutAtendimentosInput = {
    update: XOR<FuncionarioUpdateWithoutAtendimentosInput, FuncionarioUncheckedUpdateWithoutAtendimentosInput>
    create: XOR<FuncionarioCreateWithoutAtendimentosInput, FuncionarioUncheckedCreateWithoutAtendimentosInput>
    where?: FuncionarioWhereInput
  }

  export type FuncionarioUpdateToOneWithWhereWithoutAtendimentosInput = {
    where?: FuncionarioWhereInput
    data: XOR<FuncionarioUpdateWithoutAtendimentosInput, FuncionarioUncheckedUpdateWithoutAtendimentosInput>
  }

  export type FuncionarioUpdateWithoutAtendimentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereço?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioUncheckedUpdateWithoutAtendimentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereço?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateWithoutAgendamentosInput = {
    nome: string
    telefone: string
    email: string
    endereço: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pets?: PetCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutAgendamentosInput = {
    id?: number
    nome: string
    telefone: string
    email: string
    endereço: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pets?: PetUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutAgendamentosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutAgendamentosInput, ClienteUncheckedCreateWithoutAgendamentosInput>
  }

  export type PetCreateWithoutAgendamentosInput = {
    nome: string
    especie: string
    raça?: string | null
    sexo: string
    idade: number
    createdAt?: Date | string
    updatedAt?: Date | string
    atendimentos?: AtendimentoCreateNestedManyWithoutPetInput
    cliente: ClienteCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateWithoutAgendamentosInput = {
    id?: number
    nome: string
    especie: string
    raça?: string | null
    sexo: string
    idade: number
    idcliente: number
    createdAt?: Date | string
    updatedAt?: Date | string
    atendimentos?: AtendimentoUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutAgendamentosInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutAgendamentosInput, PetUncheckedCreateWithoutAgendamentosInput>
  }

  export type ClienteUpsertWithoutAgendamentosInput = {
    update: XOR<ClienteUpdateWithoutAgendamentosInput, ClienteUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<ClienteCreateWithoutAgendamentosInput, ClienteUncheckedCreateWithoutAgendamentosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutAgendamentosInput, ClienteUncheckedUpdateWithoutAgendamentosInput>
  }

  export type ClienteUpdateWithoutAgendamentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereço?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutAgendamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    endereço?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type PetUpsertWithoutAgendamentosInput = {
    update: XOR<PetUpdateWithoutAgendamentosInput, PetUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<PetCreateWithoutAgendamentosInput, PetUncheckedCreateWithoutAgendamentosInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutAgendamentosInput, PetUncheckedUpdateWithoutAgendamentosInput>
  }

  export type PetUpdateWithoutAgendamentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    especie?: StringFieldUpdateOperationsInput | string
    raça?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentos?: AtendimentoUpdateManyWithoutPetNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateWithoutAgendamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    especie?: StringFieldUpdateOperationsInput | string
    raça?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    idcliente?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutPetNestedInput
  }

  export type AtendimentoCreateManyPetInput = {
    id?: number
    tipo: string
    idfuncionario: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendamentoCreateManyPetInput = {
    id?: number
    data: Date | string
    servico: string
    clienteId: number
  }

  export type AtendimentoUpdateWithoutPetInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    funcionario?: FuncionarioUpdateOneRequiredWithoutAtendimentosNestedInput
  }

  export type AtendimentoUncheckedUpdateWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    idfuncionario?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtendimentoUncheckedUpdateManyWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    idfuncionario?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoUpdateWithoutPetInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: StringFieldUpdateOperationsInput | string
    cliente?: ClienteUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type AgendamentoUncheckedUpdateWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
  }

  export type AgendamentoUncheckedUpdateManyWithoutPetInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: StringFieldUpdateOperationsInput | string
    clienteId?: IntFieldUpdateOperationsInput | number
  }

  export type PetCreateManyClienteInput = {
    id?: number
    nome: string
    especie: string
    raça?: string | null
    sexo: string
    idade: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendamentoCreateManyClienteInput = {
    id?: number
    data: Date | string
    servico: string
    petId: number
  }

  export type PetUpdateWithoutClienteInput = {
    nome?: StringFieldUpdateOperationsInput | string
    especie?: StringFieldUpdateOperationsInput | string
    raça?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentos?: AtendimentoUpdateManyWithoutPetNestedInput
    agendamentos?: AgendamentoUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    especie?: StringFieldUpdateOperationsInput | string
    raça?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimentos?: AtendimentoUncheckedUpdateManyWithoutPetNestedInput
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    especie?: StringFieldUpdateOperationsInput | string
    raça?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoUpdateWithoutClienteInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: StringFieldUpdateOperationsInput | string
    pet?: PetUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type AgendamentoUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: StringFieldUpdateOperationsInput | string
    petId?: IntFieldUpdateOperationsInput | number
  }

  export type AgendamentoUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: StringFieldUpdateOperationsInput | string
    petId?: IntFieldUpdateOperationsInput | number
  }

  export type AtendimentoCreateManyFuncionarioInput = {
    id?: number
    tipo: string
    idpet: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtendimentoUpdateWithoutFuncionarioInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pet?: PetUpdateOneRequiredWithoutAtendimentosNestedInput
  }

  export type AtendimentoUncheckedUpdateWithoutFuncionarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    idpet?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtendimentoUncheckedUpdateManyWithoutFuncionarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    idpet?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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