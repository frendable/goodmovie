/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Movie: { // root type
    adult?: boolean | null; // Boolean
    backdrop_path?: string | null; // String
    genre_ids?: Array<string | null> | null; // [String]
    id?: number | null; // Int
    original_language?: string | null; // String
    original_title?: string | null; // String
    overview?: string | null; // String
    popularity?: number | null; // Float
    poster_path?: string | null; // String
    release_date?: string | null; // String
    title?: string | null; // String
    video?: boolean | null; // Boolean
    vote_average?: number | null; // Float
    vote_count?: number | null; // Int
  }
  MovieList: { // root type
    page?: number | null; // Int
    results?: Array<NexusGenRootTypes['Movie'] | null> | null; // [Movie]
    total_pages?: number | null; // Int
    total_results?: number | null; // Int
  }
  Mutation: {};
  Query: {};
  Review: { // root type
    comment?: string | null; // String
    createdDate?: NexusGenScalars['DateTime'] | null; // DateTime
    id?: number | null; // Int
    movieId?: number | null; // Int
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Movie: { // field return type
    adult: boolean | null; // Boolean
    backdrop_path: string | null; // String
    genre_ids: Array<string | null> | null; // [String]
    id: number | null; // Int
    original_language: string | null; // String
    original_title: string | null; // String
    overview: string | null; // String
    popularity: number | null; // Float
    poster_path: string | null; // String
    release_date: string | null; // String
    title: string | null; // String
    video: boolean | null; // Boolean
    vote_average: number | null; // Float
    vote_count: number | null; // Int
  }
  MovieList: { // field return type
    page: number | null; // Int
    results: Array<NexusGenRootTypes['Movie'] | null> | null; // [Movie]
    total_pages: number | null; // Int
    total_results: number | null; // Int
  }
  Mutation: { // field return type
    deleteReviewMutation: NexusGenRootTypes['Review'] | null; // Review
    reviewMutation: NexusGenRootTypes['Review'] | null; // Review
  }
  Query: { // field return type
    popularMovieQuery: NexusGenRootTypes['MovieList'] | null; // MovieList
    reviewQuery: Array<NexusGenRootTypes['Review'] | null> | null; // [Review]
    trendingMovieQuery: NexusGenRootTypes['MovieList'] | null; // MovieList
  }
  Review: { // field return type
    comment: string | null; // String
    createdDate: NexusGenScalars['DateTime'] | null; // DateTime
    id: number | null; // Int
    movieId: number | null; // Int
  }
}

export interface NexusGenFieldTypeNames {
  Movie: { // field return type name
    adult: 'Boolean'
    backdrop_path: 'String'
    genre_ids: 'String'
    id: 'Int'
    original_language: 'String'
    original_title: 'String'
    overview: 'String'
    popularity: 'Float'
    poster_path: 'String'
    release_date: 'String'
    title: 'String'
    video: 'Boolean'
    vote_average: 'Float'
    vote_count: 'Int'
  }
  MovieList: { // field return type name
    page: 'Int'
    results: 'Movie'
    total_pages: 'Int'
    total_results: 'Int'
  }
  Mutation: { // field return type name
    deleteReviewMutation: 'Review'
    reviewMutation: 'Review'
  }
  Query: { // field return type name
    popularMovieQuery: 'MovieList'
    reviewQuery: 'Review'
    trendingMovieQuery: 'MovieList'
  }
  Review: { // field return type name
    comment: 'String'
    createdDate: 'DateTime'
    id: 'Int'
    movieId: 'Int'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    deleteReviewMutation: { // args
      reviewId: number; // Int!
    }
    reviewMutation: { // args
      comment: string; // String!
      movieId: number; // Int!
    }
  }
  Query: {
    popularMovieQuery: { // args
      page: number; // Int!
    }
    reviewQuery: { // args
      movieId: number; // Int!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}