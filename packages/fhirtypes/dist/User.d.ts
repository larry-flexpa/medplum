/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { Meta } from './Meta';
import { Project } from './Project';
import { Reference } from './Reference';

/**
 * Representation of a human user of the system.
 */
export interface User {

  /**
   * This is a User resource
   */
  readonly resourceType: 'User';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * The first name or given name of the user. This is the value as entered
   * when the user is created. It is used to populate the profile resource.
   */
  firstName?: string;

  /**
   * The last name or family name of the user. This is the value as entered
   * when the user is created. It is used to populate the profile resource.
   */
  lastName?: string;

  /**
   * The email address that uniquely identifies the user.
   */
  email?: string;

  /**
   * Whether the system has verified that the user has access to the email
   * address.
   */
  emailVerified?: boolean;

  /**
   * DEPRECATED
   */
  admin?: boolean;

  /**
   * Encrypted hash of the user's password.
   */
  passwordHash?: string;

  /**
   * Optional project if the user only exists for the project. This is used
   * for the project-specific user database.
   */
  project?: Reference<Project>;
}
