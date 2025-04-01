/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Error {
  status: number;
  error: string;
  detail: string;
}

export interface Artwork {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** Whether this document should be boosted in search */
  is_boosted?: any;
  /** The name of this resource */
  title?: any;
  /** Alternate names for this work */
  alt_titles?: any;
  /** Metadata about the image referenced by `image_id`. Currently, all thumbnails are IIIF images. You must build your own image URLs using IIIF Image API conventions. See our API documentation for more details. */
  thumbnail?: any;
  /** Unique identifier assigned to the artwork upon acquisition */
  main_reference_number?: any;
  /** Approx. number of times this artwork was viewed on our website since Jan 1st, 2010 */
  pageviews?: any;
  /** Approx. number of times this artwork was viewed on our website over the past three months */
  pageviews_recent?: any;
  /** Whether the artwork hasn't been visited on our website very much */
  has_not_been_viewed_much?: any;
  /** Manual indication of what rank this artwork should take in search results. Noncontiguous. */
  boost_rank?: any;
  /** The year of the period of time associated with the creation of this work */
  date_start?: any;
  /** The year of the period of time associated with the creation of this work */
  date_end?: any;
  /** Readable, free-text description of the period of time associated with the creation of this work. This might include date terms like Dynasty, Era etc. Written by curators and editors in house style, and is the preferred field for display on websites and apps.  */
  date_display?: any;
  /** Readable, text qualifer to the dates provided for this record. */
  date_qualifier_title?: any;
  /** Unique identifier of the qualifer to the dates provided for this record. */
  date_qualifier_id?: any;
  /** Readable description of the creator of this work. Includes artist names, nationality and lifespan dates */
  artist_display?: any;
  /** The location where the creation, design, or production of the work took place, or the original location of the work */
  place_of_origin?: any;
  /** Longer explanation describing the work */
  description?: any;
  /** Short explanation describing the work */
  short_description?: any;
  /** The size, shape, scale, and dimensions of the work. May include multiple dimensions like overall, frame, or dimension for each section of a work. Free-form text formatted in a house style. */
  dimensions?: any;
  /** The height, width, depth, and/or diameter of each section of the work in centimeters */
  dimensions_detail?: any;
  /** The substances or materials used in the creation of a work */
  medium_display?: any;
  /** A description of distinguishing or identifying physical markings that are on the work */
  inscriptions?: any;
  /** Brief statement indicating how the work came into the collection */
  credit_line?: any;
  /** Brief text listing all the catalogues raisonnés which include this work. This isn't an exhaustive list of publications where the work has been mentioned. For that, see `publication_history`. */
  catalogue_display?: any;
  /** Bibliographic list of all the places this work has been published */
  publication_history?: any;
  /** List of all the places this work has been exhibited */
  exhibition_history?: any;
  /** Ownership/collecting history of the work. May include names of owners, dates, and possibly methods of transfer of ownership. Free-form text formatted in a house style. */
  provenance_text?: any;
  /** Edition number if the work is one of many */
  edition?: any;
  /** Indicator of how much metadata on the work in published. Web Basic is the least amount, Web Everything is the greatest. */
  publishing_verification_level?: any;
  /** An internal department id we use for analytics. Does not correspond to departments on the website. */
  internal_department_id?: any;
  /** The fiscal year in which the work was acquired. */
  fiscal_year?: any;
  /** The fiscal year in which the work was deaccessioned. */
  fiscal_year_deaccession?: any;
  /** Whether the work is in the public domain, meaning it was created before copyrights existed or has left the copyright term */
  is_public_domain?: any;
  /** Whether images of the work are allowed to be displayed in a zoomable interface. */
  is_zoomable?: any;
  /** The maximum size of the window the image is allowed to be viewed in, in pixels. */
  max_zoom_window_size?: any;
  /** Statement notifying how the work is protected by copyright. Applies to the work itself, not image or other related assets. */
  copyright_notice?: any;
  /** Whether this artwork has any associated microsites, digital publications, or documents tagged as multimedia */
  has_multimedia_resources?: any;
  /** Whether this artwork has any documents tagged as educational */
  has_educational_resources?: any;
  /** Whether this artwork is enhanced with 3D models, 360 image sequences, Mirador views, etc. */
  has_advanced_imaging?: any;
  /** Unbounded positive float representing an abstract measure of colorfulness. */
  colorfulness?: any;
  /** Dominant color of this artwork in HSL */
  color?: any;
  /** Latitude coordinate of the location of this work in our galleries */
  latitude?: any;
  /** Longitude coordinate of the location of this work in our galleries */
  longitude?: any;
  /** Latitude and longitude coordinates of the location of this work in our galleries */
  latlon?: any;
  /** Whether the work is on display */
  is_on_view?: any;
  /** If an artwork is on loan, this contains details about the loan */
  on_loan_display?: any;
  /** The location of this work in our museum */
  gallery_title?: any;
  /** Unique identifier of the location of this work in our museum */
  gallery_id?: any;
  /** Unique identifier of this work in the nomisma coin database */
  nomisma_id?: any;
  /** The kind of object or work (e.g. Painting, Sculpture, Book) */
  artwork_type_title?: any;
  /** Unique identifier of the kind of object or work */
  artwork_type_id?: any;
  /** Name of the curatorial department that this work belongs to */
  department_title?: any;
  /** Unique identifier of the curatorial department that this work belongs to */
  department_id?: any;
  /** Unique identifier of the preferred artist/culture associated with this work */
  artist_id?: any;
  /** Name of the preferred artist/culture associated with this work */
  artist_title?: any;
  /** Unique identifiers of the non-preferred artists/cultures associated with this work */
  alt_artist_ids?: any;
  /** Unique identifier of all artist/cultures associated with this work */
  artist_ids?: any;
  /** Names of all artist/cultures associated with this work */
  artist_titles?: any;
  /** Unique identifiers of the categories this work is a part of */
  category_ids?: any;
  /** Names of the categories this artwork is a part of */
  category_titles?: any;
  /** The names of the taxonomy tags for this work */
  term_titles?: any;
  /** Unique identifier of the preferred style term for this work */
  style_id?: any;
  /** The name of the preferred style term for this work */
  style_title?: any;
  /** Unique identifiers of all other non-preferred style terms for this work */
  alt_style_ids?: any;
  /** Unique identifiers of all style terms for this work */
  style_ids?: any;
  /** The names of all style terms related to this artwork */
  style_titles?: any;
  /** Unique identifier of the preferred classification term for this work */
  classification_id?: any;
  /** The name of the preferred classification term for this work */
  classification_title?: any;
  /** Unique identifiers of all other non-preferred classification terms for this work */
  alt_classification_ids?: any;
  /** Unique identifiers of all classification terms for this work */
  classification_ids?: any;
  /** The names of all classification terms related to this artwork */
  classification_titles?: any;
  /** Unique identifier of the preferred subject term for this work */
  subject_id?: any;
  /** Unique identifiers of all other non-preferred subject terms for this work */
  alt_subject_ids?: any;
  /** Unique identifiers of all subject terms for this work */
  subject_ids?: any;
  /** The names of all subject terms related to this artwork */
  subject_titles?: any;
  /** Unique identifier of the preferred material term for this work */
  material_id?: any;
  /** Unique identifiers of all other non-preferred material terms for this work */
  alt_material_ids?: any;
  /** Unique identifiers of all material terms for this work */
  material_ids?: any;
  /** The names of all material terms related to this artwork */
  material_titles?: any;
  /** Unique identifier of the preferred technique term for this work */
  technique_id?: any;
  /** Unique identifiers of all other non-preferred technique terms for this work */
  alt_technique_ids?: any;
  /** Unique identifiers of all technique terms for this work */
  technique_ids?: any;
  /** The names of all technique terms related to this artwork */
  technique_titles?: any;
  /** The names of all thematic publish categories related to this artwork */
  theme_titles?: any;
  /** Unique identifier of the preferred image to use to represent this work */
  image_id?: any;
  /** Unique identifiers of all non-preferred images of this work. */
  alt_image_ids?: any;
  /** Unique identifiers of assets that serve as documentation for this artwork */
  document_ids?: any;
  /** Unique identifiers of the audio about this work */
  sound_ids?: any;
  /** Unique identifiers of the videos about this work */
  video_ids?: any;
  /** Unique identifiers of the texts about this work */
  text_ids?: any;
  /** Unique identifiers of the digital publication chapters this work in included in */
  section_ids?: any;
  /** Names of the digital publication chapters this work is included in */
  section_titles?: any;
  /** Unique identifiers of the microsites this work is a part of */
  site_ids?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface Agent {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** Sortable name for this agent, typically with last name first. */
  sort_title?: any;
  /** Alternate names for this agent */
  alt_titles?: any;
  /** Whether the agent is an artist. Solely based on whether the agent is related to an artwork record. */
  is_artist?: any;
  /** The year this agent was born */
  birth_date?: any;
  /** The year this agent died */
  death_date?: any;
  /** A biographical description of the agent */
  description?: any;
  /** Unique identifier of this agent in Getty's ULAN */
  ulan_id?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface Place {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** Latitude coordinate of the center of the room */
  latitude?: any;
  /** Longitude coordinate of the center of the room */
  longitude?: any;
  /** Reconciled identifier of this object in the Getty's Thesauraus of Geographic Names (TGN) */
  tgn_id?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface Gallery {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** Latitude coordinate of the center of the room */
  latitude?: any;
  /** Longitude coordinate of the center of the room */
  longitude?: any;
  /** Reconciled identifier of this object in the Getty's Thesauraus of Geographic Names (TGN) */
  tgn_id?: any;
  /** Whether the gallery is currently closed */
  is_closed?: any;
  /** The gallery's room number. For "Gallery 100A", this would be "100A". */
  number?: any;
  /** The level the gallery is on, e.g., 1, 2, 3, or LL */
  floor?: any;
  /** Latitude and longitude coordinates of the center of the room */
  latlon?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface Exhibition {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** Is this exhibition currently featured on our website? */
  is_featured?: any;
  /** Numering position represnting the order in which this exhibition is featured on the website */
  position?: any;
  /** Is this exhibition currently published on our website? Only relevant for non-past exhibitions. */
  is_published?: any;
  /** Brief explanation of what this exhibition is */
  short_description?: any;
  /** URL to this exhibition on our website */
  web_url?: any;
  /** URL to the hero image from the website */
  image_url?: any;
  /** Whether the exhibition is open or closed */
  status?: any;
  /** Date the exhibition opened at the Art Institute of Chicago */
  aic_start_at?: any;
  /** Date the exhibition closed at the Art Institute of Chicago */
  aic_end_at?: any;
  /** Unique identifier of the gallery that mainly housed the exhibition */
  gallery_id?: any;
  /** The name of the gallery that mainly housed the exhibition */
  gallery_title?: any;
  /** Unique identifiers of the artworks that were part of the exhibition */
  artwork_ids?: any;
  /** Names of the artworks that were part of the exhibition */
  artwork_titles?: any;
  /** Unique identifiers of the artist agent records representing who was shown in the exhibition */
  artist_ids?: any;
  /** Unique identifiers of the microsites this exhibition is a part of */
  site_ids?: any;
  /** Unique identifier of the preferred image to use to represent this exhibition */
  image_id?: any;
  /** Unique identifiers of all non-preferred images of this exhibition. */
  alt_image_ids?: any;
  /** Unique identifiers of assets that serve as documentation for this exhibition */
  document_ids?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface AgentType {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface AgentRole {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface ArtworkPlaceQualifier {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface ArtworkDateQualifier {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface ArtworkType {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** Identifier of reconciled (most similar) term in the Getty's Art and Architecture Thesaurus (AAT) */
  aat_id?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface CategoryTerm {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** Takes one of the following values: classification, material, technique, style, subject, department, theme */
  subtype?: any;
  /** Unique identifier of this category's parent */
  parent_id?: any;
  /** Identifier of reconciled (most similar) term in the Getty's Art and Architecture Thesaurus (AAT) */
  aat_id?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface Image {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** Unique UUID of this resource in LAKE, our DAMS. */
  lake_guid?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** Type always takes one of the following values: image, sound, text, video */
  type?: any;
  /** Alternative text for the asset to describe it to people with low or no vision */
  alt_text?: any;
  /** Text of or URL to the contents of this asset */
  content?: any;
  /** Whether this resource is considered to be multimedia */
  is_multimedia_resource?: any;
  /** Whether this resource is considered to be educational */
  is_educational_resource?: any;
  /** Whether this resource is considered to be educational */
  is_teacher_resource?: any;
  /** Asset-specific copyright information */
  credit_line?: any;
  /** Arbitrary unique identifier that changes when the binary file gets updated */
  content_e_tag?: any;
  /** IIIF URL of this image */
  iiif_url?: any;
  /** Native width of the image */
  width?: any;
  /** Native height of the image */
  height?: any;
  /** Low-quality image placeholder (LQIP). Currently a 5x5-constrained, base64-encoded GIF. */
  lqip?: any;
  /** Unbounded positive float representing an abstract measure of colorfulness. */
  colorfulness?: any;
  /** Dominant color of this image in HSL */
  color?: any;
  /** Image hashes: aHash, dHash, pHash, wHash */
  fingerprint?: any;
  /** Image hash generated using ahash algorithm with 64 boolean subfields */
  ahash?: any;
  /** Image hash generated using phash algorithm with 64 boolean subfields */
  phash?: any;
  /** Unique identifiers of the artworks associated with this asset */
  artwork_ids?: any;
  /** Names of the artworks associated with this asset */
  artwork_titles?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface Video {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** Unique UUID of this resource in LAKE, our DAMS. */
  lake_guid?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** Type always takes one of the following values: image, sound, text, video */
  type?: any;
  /** Alternative text for the asset to describe it to people with low or no vision */
  alt_text?: any;
  /** Text of or URL to the contents of this asset */
  content?: any;
  /** Whether this resource is considered to be multimedia */
  is_multimedia_resource?: any;
  /** Whether this resource is considered to be educational */
  is_educational_resource?: any;
  /** Whether this resource is considered to be educational */
  is_teacher_resource?: any;
  /** Asset-specific copyright information */
  credit_line?: any;
  /** Arbitrary unique identifier that changes when the binary file gets updated */
  content_e_tag?: any;
  /** Unique identifiers of the artworks associated with this asset */
  artwork_ids?: any;
  /** Names of the artworks associated with this asset */
  artwork_titles?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface Sound {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** Name of this mobile audio file – derived from the artwork and tour titles */
  title?: any;
  /** URL to the audio file */
  web_url?: any;
  /** Text transcription of the audio file */
  transcript?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface Text {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** Unique UUID of this resource in LAKE, our DAMS. */
  lake_guid?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** Type always takes one of the following values: image, sound, text, video */
  type?: any;
  /** Alternative text for the asset to describe it to people with low or no vision */
  alt_text?: any;
  /** Text of or URL to the contents of this asset */
  content?: any;
  /** Whether this resource is considered to be multimedia */
  is_multimedia_resource?: any;
  /** Whether this resource is considered to be educational */
  is_educational_resource?: any;
  /** Whether this resource is considered to be educational */
  is_teacher_resource?: any;
  /** Asset-specific copyright information */
  credit_line?: any;
  /** Arbitrary unique identifier that changes when the binary file gets updated */
  content_e_tag?: any;
  /** Unique identifiers of the artworks associated with this asset */
  artwork_ids?: any;
  /** Names of the artworks associated with this asset */
  artwork_titles?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface Product {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** Numeric product identification code of a machine-readable barcode, when the customer sku differs from our internal one */
  external_sku?: any;
  /** URL of an image for this product */
  image_url?: any;
  /** URL of this product in the shop */
  web_url?: any;
  /** Explanation of what this product is */
  description?: any;
  /** Explanation of what this product is */
  price_display?: any;
  /** Number indicating how much the least expensive variant of a product cost before a sale */
  min_compare_at_price?: any;
  /** Number indicating how much the most expensive variant of a product cost before a sale */
  max_compare_at_price?: any;
  /** Number indicating how much the least expensive variant of a product costs right now */
  min_current_price?: any;
  /** Number indicating how much the most expensive variant of a product costs right now */
  max_current_price?: any;
  /** Unique identifiers of the artists associated with this product */
  artist_ids?: any;
  /** Unique identifiers of the artworks associated with this product */
  artwork_ids?: any;
  /** Unique identifiers of the exhibitions associated with this product */
  exhibition_ids?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface Tour {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** The main image for the tour */
  image?: any;
  /** Explanation of what the tour is */
  description?: any;
  /** Text introducing the tour */
  intro?: any;
  /** Number representing this tour's sort order */
  weight?: any;
  /** Link to the audio file of the introduction */
  intro_link?: any;
  /** Transcript of the introduction audio to the tour */
  intro_transcript?: any;
  /** Names of the artworks featured in this tour's tour stops */
  artwork_titles?: any;
  /** Names of the artists of the artworks featured in this tour's tour stops */
  artist_titles?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface Publication {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** URL to the publication */
  web_url?: any;
  /** Unique identifiers of the sections of this publication */
  section_ids?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface Section {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** URL to the section */
  web_url?: any;
  /** An accession number parsed from the title or tombstone */
  accession?: any;
  /** Unique identifier of the page on the website that represents the publication this section belongs to */
  generic_page_id?: any;
  /** Unique identifier of the artwork with which this section is associated */
  artwork_id?: any;
  /** Name of the publication this section belongs to */
  publication_title?: any;
  /** Unique identifier of the publication this section belongs to */
  publication_id?: any;
  /** Content of this section in plaintext */
  content?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface Site {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** Explanation of what this site is */
  description?: any;
  /** URL to this site */
  web_url?: any;
  /** Unique identifier of the exhibitions this site is associated with */
  exhibition_ids?: any;
  /** Names of the exhibitions this site is associated with */
  exhibition_titles?: any;
  /** Unique identifiers of the artworks this site is associated with */
  artwork_ids?: any;
  /** Names of the artworks this site is associated with */
  artwork_titles?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface Event {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** The name of this event formatted with HTML (optional) */
  title_display?: any;
  /** The URL of an image representing this page */
  image_url?: any;
  /** Text displayed with the hero image on the event */
  hero_caption?: any;
  /** Brief description of the event */
  short_description?: any;
  /** Brief description of the event displayed below the title */
  header_description?: any;
  /** One-sentence description of the event displayed in listings */
  list_description?: any;
  /** All copytext of the event */
  description?: any;
  /** Where the event takes place */
  location?: any;
  /** Unique identifier indicating the preferred type of this event */
  event_type_id?: any;
  /** Unique identifiers indicating the alternate types of this event */
  alt_event_type_ids?: any;
  /** Unique identifier indicating the preferred audience for this event */
  audience_id?: any;
  /** Unique identifiers indicating the alternate audiences for this event */
  alt_audience_ids?: any;
  /** Unique identifiers indicating the programs this event is a part of */
  program_ids?: any;
  /** Titles of the programs this event is a part of */
  program_titles?: any;
  /** Whether a ticket is required to attend the event */
  is_ticketed?: any;
  /** Unique identifier of the event in the ticketing system this website event is tied to */
  ticketed_event_id?: any;
  /** The URL to the sales site for this event */
  rsvp_link?: any;
  /** The text used on the ticket/registration button */
  buy_button_text?: any;
  /** Additional text below the ticket/registration button */
  buy_button_caption?: any;
  /** Whether registration is required to attend the event */
  is_registration_required?: any;
  /** Whether the event is exclusive to members of the museum */
  is_member_exclusive?: any;
  /** Whether the event is sold out */
  is_sold_out?: any;
  /** Whether the event is free */
  is_free?: any;
  /** Whether the event is private */
  is_private?: any;
  /** Whether admission to the museum is required to attend this event */
  is_admission_required?: any;
  /** Whether the event is to be held after the museum closes */
  is_after_hours?: any;
  /** Whether the buy tickets button is hidden on the website event page */
  is_sales_button_hidden?: any;
  /** Whether the event is being held virtually */
  is_virtual_event?: any;
  /** URL to the virtual event */
  virtual_event_url?: any;
  /** Passcode to access the virtual event */
  virtual_event_passcode?: any;
  /** The date the event begins */
  start_date?: any;
  /** The date the event ends */
  end_date?: any;
  /** The time the event starts */
  start_time?: any;
  /** The time the event ends */
  end_time?: any;
  /** A readable display of the event dates */
  date_display?: any;
  /** The time the doors open for this event */
  door_time?: any;
  /** Number indicating the type of layout this event page uses */
  layout_type?: any;
  /** A string used in the URL for this event */
  slug?: any;
  /** Which entrance to use for this event */
  entrance?: any;
  /** URL to the membership signup page via this event */
  join_url?: any;
  /** URL to the survey associated with this event */
  survey_url?: any;
  /** Unique identifier of the host (cf. event programs) that is presenting this event */
  event_host_id?: any;
  /** Unique identifier of the host (cf. event programs) that is presenting this event */
  event_host_title?: any;
  /** Editor-specified list of tags to aid in internal search */
  search_tags?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface EventOccurrence {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** The name of this event formatted with HTML (optional) */
  title_display?: any;
  /** Identifier of the master event of which this is an occurrence */
  event_id?: any;
  /** Brief description of the event */
  short_description?: any;
  /** Description of the event */
  description?: any;
  /** The URL of an image representing this page */
  image_url?: any;
  /** Whether the event is private. Private events should be omitted from listings. */
  is_private?: any;
  /** The date the event occurrence begins */
  start_at?: any;
  /** The date the event occurrence ends */
  end_at?: any;
  /** Where the event takes place */
  location?: any;
  /** The URL to the sales site or an RSVP link for this event */
  button_url?: any;
  /** The text used on the ticket/registration button */
  button_text?: any;
  /** Additional text below the ticket/registration button */
  button_caption?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface EventProgram {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** Whether this program represents an affiliate group */
  is_affiliate_group?: any;
  /** Whether this program represents an event host */
  is_event_host?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface Article {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** The text of the article */
  copy?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface Highlight {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** The text of the highlight description */
  copy?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface StaticPage {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** The URL to this page on our website */
  web_url?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface GenericPage {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** The URL to this page on our website */
  web_url?: any;
  /** The text of the page */
  copy?: any;
  /** Editor-specified list of tags to aid in internal search */
  search_tags?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface PressRelease {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** The URL to this page on our website */
  web_url?: any;
  /** The text of the page */
  copy?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface EducatorResource {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** The URL to this page on our website */
  web_url?: any;
  /** The text of the page */
  copy?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface DigitalPublication {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** The URL to this page on our website */
  web_url?: any;
  /** The text of the page */
  copy?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface DigitalPublicationArticle {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** The URL to this article on our website */
  web_url?: any;
  /** The text of the article */
  copy?: any;
  /** A display-friendly text of the authors of this article */
  author_display?: any;
  /** Unique identifier of the digital publication this article belongs to */
  digital_publication_id?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface PrintedPublication {
  /** Unique identifier of this resource. Taken from the source system. */
  id?: any;
  /** REST API resource type or endpoint */
  api_model?: any;
  /** REST API link for this resource */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** The URL to this page on our website */
  web_url?: any;
  /** The text of the page */
  copy?: any;
  /** Internal field to power the `/autocomplete` endpoint. Do not use directly. */
  suggest_autocomplete_boosted?: any;
  /** Internal field to power the `/autosuggest` endpoint. Do not use directly. */
  suggest_autocomplete_all?: any;
  /** Date and time the resource was updated in the source system */
  source_updated_at?: any;
  /** Date and time the record was updated in the aggregator database */
  updated_at?: any;
  /** Date and time the record was updated in the aggregator search index */
  timestamp?: any;
}

export interface SearchResult {
  /** Search index ranking of the result */
  _score?: any;
  /** Unique identifier within the search index */
  id?: any;
  /** API unique identifier */
  api_id?: any;
  /** Name of the model the resource represents */
  api_model?: any;
  /** URL to this recource in the API */
  api_link?: any;
  /** The name of this resource */
  title?: any;
  /** Date this record was last updated in the API */
  timestamp?: any;
  /** Whether this record has been flagged to be boosted */
  is_boosted?: any;
  /** Metadata on the image representing this record */
  thumbnail?: any;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api.artic.edu/api/v1";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Art Institution of Chicago API
 * @version 1.13
 * @license
 * @termsOfService https://www.artic.edu/terms/terms-and-conditions
 * @baseUrl https://api.artic.edu/api/v1
 * @externalDocs https://api.artic.edu
 * @contact <engineering@artic.edu>
 *
 * An API for an aggregator of Art Institute of Chicago public data. This documentation was generated by `php artisan docs:swagger` on 2025-03-12 21:32:07
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  artworks = {
    /**
     * No description
     *
     * @tags artworks, collections
     * @name ArtworksList
     * @summary A list of all artworks sorted by last updated date in descending order.
     * @request GET:/artworks
     */
    artworksList: (params: RequestParams = {}) =>
      this.request<Artwork[], Error>({
        path: `/artworks`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags artworks, collections, search
     * @name SearchList
     * @summary Search artworks data in the aggregator. Artworks in the groups of essentials are boosted so they'll show up higher in results.
     * @request GET:/artworks/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/artworks/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags artworks, collections
     * @name ArtworksDetail
     * @summary A single artwork by the given identifier. {id} is the identifier from our collections management system.
     * @request GET:/artworks/{id}
     */
    artworksDetail: (id: string, params: RequestParams = {}) =>
      this.request<Artwork[], Error>({
        path: `/artworks/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  agents = {
    /**
     * No description
     *
     * @tags agents, collections
     * @name AgentsList
     * @summary A list of all agents sorted by last updated date in descending order.
     * @request GET:/agents
     */
    agentsList: (params: RequestParams = {}) =>
      this.request<Agent[], Error>({
        path: `/agents`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags agents, collections, search
     * @name SearchList
     * @summary Search agents data in the aggregator.
     * @request GET:/agents/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/agents/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags agents, collections
     * @name AgentsDetail
     * @summary A single agent by the given identifier. {id} is the identifier from our collections management system.
     * @request GET:/agents/{id}
     */
    agentsDetail: (id: string, params: RequestParams = {}) =>
      this.request<Agent[], Error>({
        path: `/agents/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  artists = {
    /**
     * No description
     *
     * @tags agents, collections
     * @name ArtistsList
     * @summary A list of all artists sorted by last updated date in descending order.
     * @request GET:/artists
     */
    artistsList: (params: RequestParams = {}) =>
      this.request<Agent[], Error>({
        path: `/artists`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags agents, collections
     * @name ArtistsDetail
     * @summary A single artist by the given identifier. {id} is the identifier from our collections management system.
     * @request GET:/artists/{id}
     */
    artistsDetail: (id: string, params: RequestParams = {}) =>
      this.request<Agent[], Error>({
        path: `/artists/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  places = {
    /**
     * No description
     *
     * @tags places, collections
     * @name PlacesList
     * @summary A list of all places sorted by last updated date in descending order.
     * @request GET:/places
     */
    placesList: (params: RequestParams = {}) =>
      this.request<Place[], Error>({
        path: `/places`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags places, collections, search
     * @name SearchList
     * @summary Search places data in the aggregator.
     * @request GET:/places/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/places/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags places, collections
     * @name PlacesDetail
     * @summary A single place by the given identifier. {id} is the identifier from our collections management system.
     * @request GET:/places/{id}
     */
    placesDetail: (id: string, params: RequestParams = {}) =>
      this.request<Place[], Error>({
        path: `/places/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  galleries = {
    /**
     * No description
     *
     * @tags galleries, collections
     * @name GalleriesList
     * @summary A list of all galleries sorted by last updated date in descending order.
     * @request GET:/galleries
     */
    galleriesList: (params: RequestParams = {}) =>
      this.request<Gallery[], Error>({
        path: `/galleries`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags galleries, collections, search
     * @name SearchList
     * @summary Search galleries data in the aggregator.
     * @request GET:/galleries/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/galleries/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags galleries, collections
     * @name GalleriesDetail
     * @summary A single gallery by the given identifier. {id} is the identifier from our collections management system.
     * @request GET:/galleries/{id}
     */
    galleriesDetail: (id: string, params: RequestParams = {}) =>
      this.request<Gallery[], Error>({
        path: `/galleries/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  exhibitions = {
    /**
     * No description
     *
     * @tags exhibitions, collections
     * @name ExhibitionsList
     * @summary A list of all exhibitions sorted by last updated date in descending order.
     * @request GET:/exhibitions
     */
    exhibitionsList: (params: RequestParams = {}) =>
      this.request<Exhibition[], Error>({
        path: `/exhibitions`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags exhibitions, collections, search
     * @name SearchList
     * @summary Search exhibitions data in the aggregator.
     * @request GET:/exhibitions/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/exhibitions/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags exhibitions, collections
     * @name ExhibitionsDetail
     * @summary A single exhibition by the given identifier. {id} is the identifier from our collections management system.
     * @request GET:/exhibitions/{id}
     */
    exhibitionsDetail: (id: string, params: RequestParams = {}) =>
      this.request<Exhibition[], Error>({
        path: `/exhibitions/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  agentTypes = {
    /**
     * No description
     *
     * @tags agent-types, collections
     * @name AgentTypesList
     * @summary A list of all agent-types sorted by last updated date in descending order.
     * @request GET:/agent-types
     */
    agentTypesList: (params: RequestParams = {}) =>
      this.request<AgentType[], Error>({
        path: `/agent-types`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags agent-types, collections
     * @name AgentTypesDetail
     * @summary A single agent-type by the given identifier. {id} is the identifier from our collections management system.
     * @request GET:/agent-types/{id}
     */
    agentTypesDetail: (id: string, params: RequestParams = {}) =>
      this.request<AgentType[], Error>({
        path: `/agent-types/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  agentRoles = {
    /**
     * No description
     *
     * @tags agent-roles, collections
     * @name AgentRolesList
     * @summary A list of all agent-roles sorted by last updated date in descending order.
     * @request GET:/agent-roles
     */
    agentRolesList: (params: RequestParams = {}) =>
      this.request<AgentRole[], Error>({
        path: `/agent-roles`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags agent-roles, collections
     * @name AgentRolesDetail
     * @summary A single agent-role by the given identifier. {id} is the identifier from our collections management system.
     * @request GET:/agent-roles/{id}
     */
    agentRolesDetail: (id: string, params: RequestParams = {}) =>
      this.request<AgentRole[], Error>({
        path: `/agent-roles/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  artworkPlaceQualifiers = {
    /**
     * No description
     *
     * @tags artwork-place-qualifiers, collections
     * @name ArtworkPlaceQualifiersList
     * @summary A list of all artwork-place-qualifiers sorted by last updated date in descending order.
     * @request GET:/artwork-place-qualifiers
     */
    artworkPlaceQualifiersList: (params: RequestParams = {}) =>
      this.request<ArtworkPlaceQualifier[], Error>({
        path: `/artwork-place-qualifiers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags artwork-place-qualifiers, collections
     * @name ArtworkPlaceQualifiersDetail
     * @summary A single artwork-place-qualifier by the given identifier. {id} is the identifier from our collections management system.
     * @request GET:/artwork-place-qualifiers/{id}
     */
    artworkPlaceQualifiersDetail: (id: string, params: RequestParams = {}) =>
      this.request<ArtworkPlaceQualifier[], Error>({
        path: `/artwork-place-qualifiers/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  artworkDateQualifiers = {
    /**
     * No description
     *
     * @tags artwork-date-qualifiers, collections
     * @name ArtworkDateQualifiersList
     * @summary A list of all artwork-date-qualifiers sorted by last updated date in descending order.
     * @request GET:/artwork-date-qualifiers
     */
    artworkDateQualifiersList: (params: RequestParams = {}) =>
      this.request<ArtworkDateQualifier[], Error>({
        path: `/artwork-date-qualifiers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags artwork-date-qualifiers, collections
     * @name ArtworkDateQualifiersDetail
     * @summary A single artwork-date-qualifier by the given identifier. {id} is the identifier from our collections management system.
     * @request GET:/artwork-date-qualifiers/{id}
     */
    artworkDateQualifiersDetail: (id: string, params: RequestParams = {}) =>
      this.request<ArtworkDateQualifier[], Error>({
        path: `/artwork-date-qualifiers/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  artworkTypes = {
    /**
     * No description
     *
     * @tags artwork-types, collections
     * @name ArtworkTypesList
     * @summary A list of all artwork-types sorted by last updated date in descending order.
     * @request GET:/artwork-types
     */
    artworkTypesList: (params: RequestParams = {}) =>
      this.request<ArtworkType[], Error>({
        path: `/artwork-types`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags artwork-types, collections
     * @name ArtworkTypesDetail
     * @summary A single artwork-type by the given identifier. {id} is the identifier from our collections management system.
     * @request GET:/artwork-types/{id}
     */
    artworkTypesDetail: (id: string, params: RequestParams = {}) =>
      this.request<ArtworkType[], Error>({
        path: `/artwork-types/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  categoryTerms = {
    /**
     * No description
     *
     * @tags category-terms, collections
     * @name CategoryTermsList
     * @summary A list of all category-terms sorted by last updated date in descending order.
     * @request GET:/category-terms
     */
    categoryTermsList: (params: RequestParams = {}) =>
      this.request<CategoryTerm[], Error>({
        path: `/category-terms`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags category-terms, collections, search
     * @name SearchList
     * @summary Search category-terms data in the aggregator.
     * @request GET:/category-terms/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/category-terms/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags category-terms, collections
     * @name CategoryTermsDetail
     * @summary A single category-term by the given identifier. {id} is the identifier from our collections management system.
     * @request GET:/category-terms/{id}
     */
    categoryTermsDetail: (id: string, params: RequestParams = {}) =>
      this.request<CategoryTerm[], Error>({
        path: `/category-terms/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  images = {
    /**
     * No description
     *
     * @tags images, collections
     * @name ImagesList
     * @summary A list of all images sorted by last updated date in descending order.
     * @request GET:/images
     */
    imagesList: (params: RequestParams = {}) =>
      this.request<Image[], Error>({
        path: `/images`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags images, collections, search
     * @name SearchList
     * @summary Search images data in the aggregator.
     * @request GET:/images/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/images/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags images, collections
     * @name ImagesDetail
     * @summary A single image by the given identifier. {id} is the identifier from our collections management system.
     * @request GET:/images/{id}
     */
    imagesDetail: (id: string, params: RequestParams = {}) =>
      this.request<Image[], Error>({
        path: `/images/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  videos = {
    /**
     * No description
     *
     * @tags videos, collections
     * @name VideosList
     * @summary A list of all videos sorted by last updated date in descending order.
     * @request GET:/videos
     */
    videosList: (params: RequestParams = {}) =>
      this.request<Video[], Error>({
        path: `/videos`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags videos, collections, search
     * @name SearchList
     * @summary Search videos data in the aggregator.
     * @request GET:/videos/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/videos/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags videos, collections
     * @name VideosDetail
     * @summary A single video by the given identifier. {id} is the identifier from our collections management system.
     * @request GET:/videos/{id}
     */
    videosDetail: (id: string, params: RequestParams = {}) =>
      this.request<Video[], Error>({
        path: `/videos/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  sounds = {
    /**
     * No description
     *
     * @tags sounds, collections
     * @name SoundsList
     * @summary A list of all sounds sorted by last updated date in descending order.
     * @request GET:/sounds
     */
    soundsList: (params: RequestParams = {}) =>
      this.request<Sound[], Error>({
        path: `/sounds`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags sounds, collections, search
     * @name SearchList
     * @summary Search sounds data in the aggregator.
     * @request GET:/sounds/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/sounds/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags sounds, collections
     * @name SoundsDetail
     * @summary A single sound by the given identifier. {id} is the identifier from our collections management system.
     * @request GET:/sounds/{id}
     */
    soundsDetail: (id: string, params: RequestParams = {}) =>
      this.request<Sound[], Error>({
        path: `/sounds/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  texts = {
    /**
     * No description
     *
     * @tags texts, collections
     * @name TextsList
     * @summary A list of all texts sorted by last updated date in descending order.
     * @request GET:/texts
     */
    textsList: (params: RequestParams = {}) =>
      this.request<Text[], Error>({
        path: `/texts`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags texts, collections, search
     * @name SearchList
     * @summary Search texts data in the aggregator.
     * @request GET:/texts/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/texts/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags texts, collections
     * @name TextsDetail
     * @summary A single text by the given identifier. {id} is the identifier from our collections management system.
     * @request GET:/texts/{id}
     */
    textsDetail: (id: string, params: RequestParams = {}) =>
      this.request<Text[], Error>({
        path: `/texts/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  products = {
    /**
     * No description
     *
     * @tags products, shop
     * @name ProductsList
     * @summary A list of all products sorted by last updated date in descending order.
     * @request GET:/products
     */
    productsList: (params: RequestParams = {}) =>
      this.request<Product[], Error>({
        path: `/products`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags products, shop, search
     * @name SearchList
     * @summary Search products data in the aggregator.
     * @request GET:/products/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/products/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags products, shop
     * @name ProductsDetail
     * @summary A single product by the given identifier.
     * @request GET:/products/{id}
     */
    productsDetail: (id: string, params: RequestParams = {}) =>
      this.request<Product[], Error>({
        path: `/products/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  tours = {
    /**
     * No description
     *
     * @tags tours, mobile
     * @name ToursList
     * @summary A list of all tours sorted by last updated date in descending order.
     * @request GET:/tours
     */
    toursList: (params: RequestParams = {}) =>
      this.request<Tour[], Error>({
        path: `/tours`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tours, mobile, search
     * @name SearchList
     * @summary Search tours data in the aggregator.
     * @request GET:/tours/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/tours/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tours, mobile
     * @name ToursDetail
     * @summary A single tour by the given identifier.
     * @request GET:/tours/{id}
     */
    toursDetail: (id: string, params: RequestParams = {}) =>
      this.request<Tour[], Error>({
        path: `/tours/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  mobileSounds = {
    /**
     * No description
     *
     * @tags mobile-sounds, mobile
     * @name MobileSoundsList
     * @summary A list of all mobile-sounds sorted by last updated date in descending order.
     * @request GET:/mobile-sounds
     */
    mobileSoundsList: (params: RequestParams = {}) =>
      this.request<Sound[], Error>({
        path: `/mobile-sounds`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags mobile-sounds, mobile, search
     * @name SearchList
     * @summary Search mobile-sounds data in the aggregator.
     * @request GET:/mobile-sounds/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/mobile-sounds/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags mobile-sounds, mobile
     * @name MobileSoundsDetail
     * @summary A single mobile-sound by the given identifier.
     * @request GET:/mobile-sounds/{id}
     */
    mobileSoundsDetail: (id: string, params: RequestParams = {}) =>
      this.request<Sound[], Error>({
        path: `/mobile-sounds/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  publications = {
    /**
     * No description
     *
     * @tags publications, dsc
     * @name PublicationsList
     * @summary A list of all publications sorted by last updated date in descending order.
     * @request GET:/publications
     */
    publicationsList: (params: RequestParams = {}) =>
      this.request<Publication[], Error>({
        path: `/publications`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags publications, dsc, search
     * @name SearchList
     * @summary Search publications data in the aggregator.
     * @request GET:/publications/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/publications/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags publications, dsc
     * @name PublicationsDetail
     * @summary A single publication by the given identifier.
     * @request GET:/publications/{id}
     */
    publicationsDetail: (id: string, params: RequestParams = {}) =>
      this.request<Publication[], Error>({
        path: `/publications/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  sections = {
    /**
     * No description
     *
     * @tags sections, dsc
     * @name SectionsList
     * @summary A list of all sections sorted by last updated date in descending order.
     * @request GET:/sections
     */
    sectionsList: (params: RequestParams = {}) =>
      this.request<Section[], Error>({
        path: `/sections`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags sections, dsc, search
     * @name SearchList
     * @summary Search sections data in the aggregator.
     * @request GET:/sections/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/sections/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags sections, dsc
     * @name SectionsDetail
     * @summary A single section by the given identifier.
     * @request GET:/sections/{id}
     */
    sectionsDetail: (id: string, params: RequestParams = {}) =>
      this.request<Section[], Error>({
        path: `/sections/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  sites = {
    /**
     * No description
     *
     * @tags sites,
     * @name SitesList
     * @summary A list of all sites sorted by last updated date in descending order.
     * @request GET:/sites
     */
    sitesList: (params: RequestParams = {}) =>
      this.request<Site[], Error>({
        path: `/sites`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags sites, , search
     * @name SearchList
     * @summary Search sites data in the aggregator.
     * @request GET:/sites/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/sites/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags sites,
     * @name SitesDetail
     * @summary A single site by the given identifier.
     * @request GET:/sites/{id}
     */
    sitesDetail: (id: string, params: RequestParams = {}) =>
      this.request<Site[], Error>({
        path: `/sites/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  events = {
    /**
     * No description
     *
     * @tags events, web
     * @name EventsList
     * @summary A list of all events sorted by last updated date in descending order.
     * @request GET:/events
     */
    eventsList: (params: RequestParams = {}) =>
      this.request<Event[], Error>({
        path: `/events`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags events, web, search
     * @name SearchList
     * @summary Search events data in the aggregator.
     * @request GET:/events/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/events/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags events, web
     * @name EventsDetail
     * @summary A single event by the given identifier.
     * @request GET:/events/{id}
     */
    eventsDetail: (id: string, params: RequestParams = {}) =>
      this.request<Event[], Error>({
        path: `/events/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  eventOccurrences = {
    /**
     * No description
     *
     * @tags event-occurrences, web
     * @name EventOccurrencesList
     * @summary A list of all event-occurrences sorted by last updated date in descending order.
     * @request GET:/event-occurrences
     */
    eventOccurrencesList: (params: RequestParams = {}) =>
      this.request<EventOccurrence[], Error>({
        path: `/event-occurrences`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags event-occurrences, web, search
     * @name SearchList
     * @summary Search event-occurrences data in the aggregator.
     * @request GET:/event-occurrences/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/event-occurrences/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags event-occurrences, web
     * @name EventOccurrencesDetail
     * @summary A single event-occurrence by the given identifier.
     * @request GET:/event-occurrences/{id}
     */
    eventOccurrencesDetail: (id: string, params: RequestParams = {}) =>
      this.request<EventOccurrence[], Error>({
        path: `/event-occurrences/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  eventPrograms = {
    /**
     * No description
     *
     * @tags event-programs, web
     * @name EventProgramsList
     * @summary A list of all event-programs sorted by last updated date in descending order.
     * @request GET:/event-programs
     */
    eventProgramsList: (params: RequestParams = {}) =>
      this.request<EventProgram[], Error>({
        path: `/event-programs`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags event-programs, web, search
     * @name SearchList
     * @summary Search event-programs data in the aggregator.
     * @request GET:/event-programs/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/event-programs/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags event-programs, web
     * @name EventProgramsDetail
     * @summary A single event-program by the given identifier.
     * @request GET:/event-programs/{id}
     */
    eventProgramsDetail: (id: string, params: RequestParams = {}) =>
      this.request<EventProgram[], Error>({
        path: `/event-programs/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  articles = {
    /**
     * No description
     *
     * @tags articles, web
     * @name ArticlesList
     * @summary A list of all articles sorted by last updated date in descending order.
     * @request GET:/articles
     */
    articlesList: (params: RequestParams = {}) =>
      this.request<Article[], Error>({
        path: `/articles`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags articles, web, search
     * @name SearchList
     * @summary Search articles data in the aggregator.
     * @request GET:/articles/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/articles/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags articles, web
     * @name ArticlesDetail
     * @summary A single article by the given identifier.
     * @request GET:/articles/{id}
     */
    articlesDetail: (id: string, params: RequestParams = {}) =>
      this.request<Article[], Error>({
        path: `/articles/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  highlights = {
    /**
     * No description
     *
     * @tags highlights, web
     * @name HighlightsList
     * @summary A list of all highlights sorted by last updated date in descending order.
     * @request GET:/highlights
     */
    highlightsList: (params: RequestParams = {}) =>
      this.request<Highlight[], Error>({
        path: `/highlights`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags highlights, web, search
     * @name SearchList
     * @summary Search highlights data in the aggregator.
     * @request GET:/highlights/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/highlights/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags highlights, web
     * @name HighlightsDetail
     * @summary A single highlight by the given identifier.
     * @request GET:/highlights/{id}
     */
    highlightsDetail: (id: string, params: RequestParams = {}) =>
      this.request<Highlight[], Error>({
        path: `/highlights/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  staticPages = {
    /**
     * No description
     *
     * @tags static-pages, web
     * @name StaticPagesList
     * @summary A list of all static-pages sorted by last updated date in descending order.
     * @request GET:/static-pages
     */
    staticPagesList: (params: RequestParams = {}) =>
      this.request<StaticPage[], Error>({
        path: `/static-pages`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags static-pages, web, search
     * @name SearchList
     * @summary Search static-pages data in the aggregator.
     * @request GET:/static-pages/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/static-pages/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags static-pages, web
     * @name StaticPagesDetail
     * @summary A single static-page by the given identifier.
     * @request GET:/static-pages/{id}
     */
    staticPagesDetail: (id: string, params: RequestParams = {}) =>
      this.request<StaticPage[], Error>({
        path: `/static-pages/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  genericPages = {
    /**
     * No description
     *
     * @tags generic-pages, web
     * @name GenericPagesList
     * @summary A list of all generic-pages sorted by last updated date in descending order.
     * @request GET:/generic-pages
     */
    genericPagesList: (params: RequestParams = {}) =>
      this.request<GenericPage[], Error>({
        path: `/generic-pages`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags generic-pages, web, search
     * @name SearchList
     * @summary Search generic-pages data in the aggregator.
     * @request GET:/generic-pages/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/generic-pages/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags generic-pages, web
     * @name GenericPagesDetail
     * @summary A single generic-page by the given identifier.
     * @request GET:/generic-pages/{id}
     */
    genericPagesDetail: (id: string, params: RequestParams = {}) =>
      this.request<GenericPage[], Error>({
        path: `/generic-pages/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  pressReleases = {
    /**
     * No description
     *
     * @tags press-releases, web
     * @name PressReleasesList
     * @summary A list of all press-releases sorted by last updated date in descending order.
     * @request GET:/press-releases
     */
    pressReleasesList: (params: RequestParams = {}) =>
      this.request<PressRelease[], Error>({
        path: `/press-releases`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags press-releases, web, search
     * @name SearchList
     * @summary Search press-releases data in the aggregator.
     * @request GET:/press-releases/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/press-releases/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags press-releases, web
     * @name PressReleasesDetail
     * @summary A single press-release by the given identifier.
     * @request GET:/press-releases/{id}
     */
    pressReleasesDetail: (id: string, params: RequestParams = {}) =>
      this.request<PressRelease[], Error>({
        path: `/press-releases/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  educatorResources = {
    /**
     * No description
     *
     * @tags educator-resources, web
     * @name EducatorResourcesList
     * @summary A list of all educator-resources sorted by last updated date in descending order.
     * @request GET:/educator-resources
     */
    educatorResourcesList: (params: RequestParams = {}) =>
      this.request<EducatorResource[], Error>({
        path: `/educator-resources`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags educator-resources, web, search
     * @name SearchList
     * @summary Search educator-resources data in the aggregator.
     * @request GET:/educator-resources/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/educator-resources/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags educator-resources, web
     * @name EducatorResourcesDetail
     * @summary A single educator-resource by the given identifier.
     * @request GET:/educator-resources/{id}
     */
    educatorResourcesDetail: (id: string, params: RequestParams = {}) =>
      this.request<EducatorResource[], Error>({
        path: `/educator-resources/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  digitalPublications = {
    /**
     * No description
     *
     * @tags digital-publications, web
     * @name DigitalPublicationsList
     * @summary A list of all digital-publications sorted by last updated date in descending order.
     * @request GET:/digital-publications
     */
    digitalPublicationsList: (params: RequestParams = {}) =>
      this.request<DigitalPublication[], Error>({
        path: `/digital-publications`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags digital-publications, web, search
     * @name SearchList
     * @summary Search digital-publications data in the aggregator.
     * @request GET:/digital-publications/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/digital-publications/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags digital-publications, web
     * @name DigitalPublicationsDetail
     * @summary A single digital-publication by the given identifier.
     * @request GET:/digital-publications/{id}
     */
    digitalPublicationsDetail: (id: string, params: RequestParams = {}) =>
      this.request<DigitalPublication[], Error>({
        path: `/digital-publications/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  digitalPublicationArticles = {
    /**
     * No description
     *
     * @tags digital-publication-articles, web
     * @name DigitalPublicationArticlesList
     * @summary A list of all digital-publication-articles sorted by last updated date in descending order.
     * @request GET:/digital-publication-articles
     */
    digitalPublicationArticlesList: (params: RequestParams = {}) =>
      this.request<DigitalPublicationArticle[], Error>({
        path: `/digital-publication-articles`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags digital-publication-articles, web, search
     * @name SearchList
     * @summary Search digital-publication-articles data in the aggregator.
     * @request GET:/digital-publication-articles/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/digital-publication-articles/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags digital-publication-articles, web
     * @name DigitalPublicationArticlesDetail
     * @summary A single digital-publication-article by the given identifier.
     * @request GET:/digital-publication-articles/{id}
     */
    digitalPublicationArticlesDetail: (id: string, params: RequestParams = {}) =>
      this.request<DigitalPublicationArticle[], Error>({
        path: `/digital-publication-articles/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  printedPublications = {
    /**
     * No description
     *
     * @tags printed-publications, web
     * @name PrintedPublicationsList
     * @summary A list of all printed-publications sorted by last updated date in descending order.
     * @request GET:/printed-publications
     */
    printedPublicationsList: (params: RequestParams = {}) =>
      this.request<PrintedPublication[], Error>({
        path: `/printed-publications`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags printed-publications, web, search
     * @name SearchList
     * @summary Search printed-publications data in the aggregator.
     * @request GET:/printed-publications/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/printed-publications/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags printed-publications, web
     * @name PrintedPublicationsDetail
     * @summary A single printed-publication by the given identifier.
     * @request GET:/printed-publications/{id}
     */
    printedPublicationsDetail: (id: string, params: RequestParams = {}) =>
      this.request<PrintedPublication[], Error>({
        path: `/printed-publications/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  search = {
    /**
     * No description
     *
     * @tags search
     * @name SearchList
     * @summary Search all data in the aggregator
     * @request GET:/search
     */
    searchList: (
      query?: {
        /** Your search query */
        q?: string;
        /** For complex queries, you can pass Elasticsearch domain syntax queries here */
        query?: string;
        /** Used in conjunction with `query` */
        sort?: string;
        /** Starting point of results. Pagination via Elasticsearch conventions */
        from?: string;
        /** Number of results to return. Pagination via Elasticsearch conventions */
        size?: string;
        /** A comma-separated list of 'count' aggregation facets to include in the results. */
        facets?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResult[], Error>({
        path: `/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
}
