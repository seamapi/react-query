/* eslint-disable */
/*
 * GENERATED FILE. DO NOT EDIT.
 * EXPERIMENTAL React Query endpoint manifest ABI.
 * Source: @seamapi/types/connect + experimental/fixtures/branch-openapi.json (omitUndocumented: false)
 */
import type { EndpointManifest } from '../endpoint-manifest.js'

type RequireAtLeastOne<T, K extends keyof T = keyof T> = K extends keyof T
  ? Required<Pick<T, K>> & Partial<Omit<T, K>>
  : never

export const seamEndpointManifestAbiVersion = 1 as const

interface ResourceAccessCode {
  access_code_id: string
  code: string | null
  common_code_key: string | null
  created_at: string
  device_id: string
  dormakaba_oracode_metadata?: {
    is_cancellable?: boolean
    is_early_checkin_able?: boolean
    is_extendable?: boolean
    is_overridable?: boolean
    site_name?: string
    stay_id?: number
    user_level_id?: string
    user_level_name?: string | null
  } | null
  ends_at?: string | null
  errors: Array<
    | {
        created_at?: string
        error_code: 'provider_issue'
        is_access_code_error: boolean
        message: string
      }
    | {
        created_at?: string
        error_code: 'failed_to_set_on_device'
        is_access_code_error: boolean
        message: string
      }
    | {
        created_at?: string
        error_code: 'failed_to_remove_from_device'
        is_access_code_error: boolean
        message: string
      }
    | {
        created_at?: string
        error_code: 'duplicate_code_on_device'
        is_access_code_error: boolean
        managed_access_code_id?: string
        message: string
        unmanaged_access_code_id?: string
      }
    | {
        created_at?: string
        error_code: 'no_space_for_access_code_on_device'
        is_access_code_error: boolean
        message: string
      }
    | {
        change_type?: 'modified' | 'removed'
        created_at?: string
        error_code: 'conflicting_external_modification'
        is_access_code_error: boolean
        message: string
        modified_fields?: Array<{
          field: string
          from: string | null
          to: string | null
        }>
      }
    | {
        created_at?: string
        error_code: 'access_code_inactive'
        is_access_code_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'account_disconnected'
        is_connected_account_error: boolean
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'salto_ks_subscription_limit_exceeded'
        is_connected_account_error: boolean
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'insufficient_permissions'
        is_connected_account_error: boolean
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'dormakaba_sites_disconnected'
        is_connected_account_error: boolean
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'device_offline'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'device_removed'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'hub_disconnected'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'device_disconnected'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'empty_backup_access_code_pool'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'august_lock_not_authorized'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'missing_device_credentials'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'auxiliary_heat_running'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'subscription_required'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'bridge_disconnected'
        is_bridge_error?: boolean
        is_connected_account_error?: boolean
        message: string
      }
  >
  is_backup?: boolean
  is_backup_access_code_available: boolean
  is_external_modification_allowed: boolean
  is_managed: boolean
  is_offline_access_code: boolean
  is_one_time_use: boolean
  is_scheduled_on_device?: boolean
  is_waiting_for_code_assignment?: boolean
  name: string | null
  pending_mutations: Array<
    | { created_at: string; message: string; mutation_code: 'creating' }
    | {
        created_at: string
        message: string
        mutation_code: 'deferring_creation'
        scheduled_at: string
      }
    | { created_at: string; message: string; mutation_code: 'deleting' }
    | {
        created_at: string
        from: { code: string | null }
        message: string
        mutation_code: 'updating_code'
        to: { code: string | null }
      }
    | {
        created_at: string
        from: { name: string | null }
        message: string
        mutation_code: 'updating_name'
        to: { name: string | null }
      }
    | {
        created_at: string
        from: { ends_at: string | null; starts_at: string | null }
        message: string
        mutation_code: 'updating_time_frame'
        to: { ends_at: string | null; starts_at: string | null }
      }
  >
  pulled_backup_access_code_id?: string | null
  starts_at?: string | null
  status: 'setting' | 'set' | 'unset' | 'removing' | 'unknown'
  type: 'time_bound' | 'ongoing'
  warnings: Array<
    | {
        created_at?: string
        message: string
        warning_code: 'code_rotates_periodically'
      }
    | {
        created_at?: string
        message: string
        warning_code: 'time_frame_adjusted_for_unknown_time_zone'
      }
    | {
        change_type?: 'modified' | 'removed'
        created_at?: string
        message: string
        modified_fields?: Array<{
          field: string
          from: string | null
          to: string | null
        }>
        warning_code: 'external_modification_in_effect'
      }
    | {
        created_at?: string
        message: string
        warning_code: 'delay_in_setting_on_device'
      }
    | {
        created_at?: string
        message: string
        warning_code: 'delay_in_removing_from_device'
      }
    | {
        created_at?: string
        message: string
        warning_code: 'third_party_integration_detected'
      }
    | {
        created_at?: string
        message: string
        warning_code: 'igloo_algopin_must_be_used_within_24_hours'
      }
    | {
        created_at?: string
        message: string
        warning_code: 'management_transferred'
      }
    | {
        created_at?: string
        message: string
        warning_code: 'using_backup_access_code'
      }
    | { created_at?: string; message: string; warning_code: 'being_deleted' }
    | {
        created_at?: string
        message: string
        warning_code: 'unknown_issue_with_access_code'
      }
  >
  workspace_id: string
}

interface ResourceAccessGrant {
  access_grant_id: string
  access_grant_key?: string
  access_method_ids: Array<string>
  client_session_token?: string
  created_at: string
  customization_profile_id?: string
  display_name: string
  display_status: string
  ends_at: string | null
  errors: Array<{
    created_at: string
    error_code: 'cannot_create_requested_access_methods'
    message: string
    missing_device_ids?: Array<string>
  }>
  instant_key_url?: string
  location_ids: Array<string>
  name: string | null
  pending_mutations: Array<
    | {
        created_at: string
        from: { device_ids: Array<string> }
        message: string
        mutation_code: 'updating_spaces'
        to: { common_code_key?: string | null; device_ids: Array<string> }
      }
    | {
        access_method_ids: Array<string>
        created_at: string
        from: { ends_at: string | null; starts_at: string | null }
        message: string
        mutation_code: 'updating_access_times'
        to: { ends_at: string | null; starts_at: string | null }
      }
  >
  requested_access_methods: Array<{
    code?: string
    created_access_method_ids: Array<string>
    created_at: string
    display_name: string
    instant_key_max_use_count?: number
    mode: 'code' | 'card' | 'mobile_key' | 'cloud_key'
  }>
  reservation_key?: string
  space_ids: Array<string>
  starts_at: string
  user_identity_id: string
  warnings: Array<
    | { created_at: string; message: string; warning_code: 'being_deleted' }
    | {
        created_at: string
        message: string
        warning_code: 'underprovisioned_access'
      }
    | {
        created_at: string
        failed_devices?: Array<{
          device_id: string
          error_code: string
          message: string
        }>
        message: string
        warning_code: 'overprovisioned_access'
      }
    | {
        access_method_ids: Array<string>
        created_at: string
        message: string
        warning_code: 'updating_access_times'
      }
    | {
        created_at: string
        device_id: string
        message: string
        new_code: string
        original_code: string
        warning_code: 'requested_code_unavailable'
      }
    | {
        created_at: string
        device_id: string
        message: string
        warning_code: 'device_does_not_support_access_codes'
      }
    | {
        created_at: string
        device_id: string
        message: string
        reason:
          | 'duration_exceeds_max'
          | 'times_do_not_match_slots'
          | 'ongoing_not_supported'
        warning_code: 'device_time_constraints_violated'
      }
  >
  workspace_id: string
}

interface ResourceAccessMethod {
  access_method_id: string
  client_session_token?: string
  code?: string | null
  created_at: string
  customization_profile_id?: string
  display_name: string
  display_status: string
  errors: Array<{
    created_at: string
    error_code: 'failed_to_issue'
    message: string
  }>
  instant_key_url?: string
  is_assignment_required?: boolean
  is_encoding_required?: boolean
  is_issued: boolean
  is_ready_for_assignment?: boolean
  is_ready_for_encoding?: boolean
  issued_at: string | null
  mode: 'code' | 'card' | 'mobile_key' | 'cloud_key'
  pending_mutations: Array<
    | {
        created_at: string
        from: { device_ids: Array<string> }
        message: string
        mutation_code: 'provisioning_access'
        to: { device_ids: Array<string> }
      }
    | {
        created_at: string
        from: { device_ids: Array<string> }
        message: string
        mutation_code: 'revoking_access'
        to: { device_ids: Array<string> }
      }
    | {
        created_at: string
        from: { ends_at: string | null; starts_at: string | null }
        message: string
        mutation_code: 'updating_access_times'
        to: { ends_at: string | null; starts_at: string | null }
      }
  >
  warnings: Array<
    | { created_at: string; message: string; warning_code: 'being_deleted' }
    | {
        created_at: string
        message: string
        warning_code: 'updating_access_times'
      }
    | {
        created_at: string
        message: string
        original_access_method_id?: string
        warning_code: 'pulled_backup_access_code'
      }
    | { created_at: string; message: string; warning_code: 'delay_in_issuing' }
  >
  workspace_id: string
}

interface ResourceAcsAccessGroup {
  access_group_type:
    | 'pti_unit'
    | 'pti_access_level'
    | 'salto_ks_access_group'
    | 'brivo_group'
    | 'salto_space_group'
    | 'dormakaba_community_access_group'
    | 'dormakaba_ambiance_access_group'
    | 'avigilon_alta_group'
    | 'kisi_access_group'
    | 'akiles_member_group'
  access_group_type_display_name: string
  access_schedule?: { ends_at: string | null; starts_at: string }
  acs_access_group_id: string
  acs_system_id: string
  connected_account_id: string
  created_at: string
  display_name: string
  errors: Array<{
    created_at: string
    error_code: 'failed_to_create_on_acs_system'
    message: string
  }>
  external_type:
    | 'pti_unit'
    | 'pti_access_level'
    | 'salto_ks_access_group'
    | 'brivo_group'
    | 'salto_space_group'
    | 'dormakaba_community_access_group'
    | 'dormakaba_ambiance_access_group'
    | 'avigilon_alta_group'
    | 'kisi_access_group'
    | 'akiles_member_group'
  external_type_display_name: string
  is_managed: boolean
  name: string
  pending_mutations: Array<
    | { created_at: string; message: string; mutation_code: 'creating' }
    | { created_at: string; message: string; mutation_code: 'deleting' }
    | {
        created_at: string
        message: string
        mutation_code: 'deferring_deletion'
      }
    | {
        created_at: string
        from: { name?: string | null }
        message: string
        mutation_code: 'updating_group_information'
        to: { name?: string | null }
      }
    | {
        created_at: string
        from: { ends_at: string | null; starts_at: string | null }
        message: string
        mutation_code: 'updating_access_schedule'
        to: { ends_at: string | null; starts_at: string | null }
      }
    | {
        created_at: string
        from: { acs_user_id: string | null }
        message: string
        mutation_code: 'updating_user_membership'
        to: { acs_user_id: string | null }
      }
    | {
        created_at: string
        from: { acs_entrance_id: string | null }
        message: string
        mutation_code: 'updating_entrance_membership'
        to: { acs_entrance_id: string | null }
      }
    | {
        acs_user_id: string
        created_at: string
        message: string
        mutation_code: 'deferring_user_membership_update'
        variant: 'adding' | 'removing'
      }
  >
  warnings: Array<{
    created_at: string
    message: string
    warning_code: 'unknown_issue_with_acs_access_group' | 'being_deleted'
  }>
  workspace_id: string
}

interface ResourceAcsCredential {
  access_method: 'code' | 'card' | 'mobile_key' | 'cloud_key'
  acs_credential_id: string
  acs_credential_pool_id?: string
  acs_system_id: string
  acs_user_id?: string
  akiles_metadata?: { member_pin_id?: string }
  assa_abloy_vostio_metadata?: {
    auto_join?: boolean
    door_names?: Array<string>
    endpoint_id?: string
    key_id?: string
    key_issuing_request_id?: string
    override_guest_acs_entrance_ids?: Array<string>
  }
  card_number?: string | null
  code?: string | null
  connected_account_id: string
  created_at: string
  display_name: string
  ends_at?: string
  errors: Array<{ created_at: string; error_code: string; message: string }>
  external_type?:
    | 'pti_card'
    | 'brivo_credential'
    | 'hid_credential'
    | 'visionline_card'
    | 'salto_ks_credential'
    | 'assa_abloy_vostio_key'
    | 'salto_space_key'
    | 'latch_access'
    | 'dormakaba_ambiance_credential'
    | 'hotek_card'
    | 'salto_ks_tag'
    | 'avigilon_alta_credential'
    | 'kisi_credential'
    | 'akiles_credential'
  external_type_display_name?: string
  is_issued?: boolean
  is_latest_desired_state_synced_with_provider?: boolean | null
  is_managed: boolean
  is_multi_phone_sync_credential?: boolean
  is_one_time_use?: boolean
  issued_at?: string | null
  latest_desired_state_synced_with_provider_at?: string | null
  parent_acs_credential_id?: string
  starts_at?: string
  user_identity_id?: string
  visionline_metadata?: {
    auto_join?: boolean
    card_function_type?: 'guest' | 'staff'
    card_id?: string
    common_acs_entrance_ids?: Array<string>
    credential_id?: string
    guest_acs_entrance_ids?: Array<string>
    is_valid?: boolean
    joiner_acs_credential_ids?: Array<string>
  }
  warnings: Array<
    | {
        created_at: string
        message: string
        warning_code: 'waiting_to_be_issued'
      }
    | {
        created_at: string
        message: string
        warning_code: 'schedule_externally_modified'
      }
    | { created_at: string; message: string; warning_code: 'schedule_modified' }
    | { created_at: string; message: string; warning_code: 'being_deleted' }
    | {
        created_at: string
        message: string
        warning_code: 'unknown_issue_with_acs_credential'
      }
    | {
        created_at: string
        message: string
        warning_code: 'needs_to_be_reissued'
      }
    | {
        created_at: string
        message: string
        new_code: string
        original_code: string
        warning_code: 'requested_code_unavailable'
      }
  >
  workspace_id: string
}

interface ResourceAcsCredentialPool {
  acs_credential_pool_id: string
  acs_system_id: string
  created_at: string
  display_name: string
  external_type: 'hid_part_number'
  external_type_display_name: string
  workspace_id: string
}

interface ResourceAcsCredentialProvisioningAutomation {
  acs_credential_provisioning_automation_id: string
  created_at: string
  credential_manager_acs_system_id: string
  user_identity_id: string
  workspace_id: string
}

interface ResourceAcsEncoder {
  acs_encoder_id: string
  acs_system_id: string
  connected_account_id: string
  created_at: string
  display_name: string
  errors: Array<{
    created_at: string
    error_code: 'acs_encoder_removed'
    message: string
  }>
  workspace_id: string
}

interface ResourceAcsEntrance {
  acs_entrance_id: string
  acs_system_id: string
  akiles_metadata?: {
    actions?: Array<{ id?: string; name?: string }>
    gadget_id?: string
    site_id?: string
    site_name?: string
  }
  assa_abloy_vostio_metadata?: {
    door_name?: string
    door_number?: number
    door_type?: 'CommonDoor' | 'EntranceDoor' | 'GuestDoor' | 'Elevator'
    pms_id?: string
    stand_open?: boolean
  }
  avigilon_alta_metadata?: {
    entry_name?: string
    entry_relays_total_count?: number
    org_name?: string
    site_id?: number
    site_name?: string
    zone_id?: number
    zone_name?: string
  }
  brivo_metadata?: {
    access_point_id?: string
    site_id?: number
    site_name?: string
  }
  can_belong_to_reservation?: boolean
  can_unlock_with_card?: boolean
  can_unlock_with_cloud_key?: boolean
  can_unlock_with_code?: boolean
  can_unlock_with_mobile_key?: boolean
  connected_account_id: string
  created_at: string
  display_name: string
  dormakaba_ambiance_metadata?: { access_point_name?: string }
  dormakaba_community_metadata?: { access_point_profile?: string }
  errors: Array<{ created_at: string; error_code: string; message: string }>
  hotek_metadata?: {
    common_area_name?: string
    common_area_number?: string
    room_number?: string
  }
  is_locked?: boolean
  latch_metadata?: {
    accessibility_type?: string
    door_name?: string
    door_type?: string
    is_connected?: boolean
  }
  salto_ks_metadata?: {
    battery_level?: string
    door_name?: string
    intrusion_alarm?: boolean
    left_open_alarm?: boolean
    lock_type?: string
    locked_state?: string
    online?: boolean
    privacy_mode?: boolean
  }
  salto_space_metadata?: {
    audit_on_keys?: boolean
    door_description?: string
    door_id?: string
    door_name?: string
    room_description?: string
    room_name?: string
  }
  space_ids: Array<string>
  visionline_metadata?: {
    door_category?:
      'entrance' | 'guest' | 'elevator reader' | 'common' | 'common (PMS)'
    door_name?: string
    profiles?: Array<{
      visionline_door_profile_id?: string
      visionline_door_profile_type?: 'BLE' | 'commonDoor' | 'touch'
    }>
  }
  warnings: Array<
    | {
        created_at: string
        message: string
        warning_code: 'salto_ks_entrance_access_code_support_removed'
      }
    | {
        created_at: string
        message: string
        warning_code: 'entrance_shares_zone'
      }
    | {
        created_at: string
        message: string
        warning_code: 'entrance_setup_required'
      }
    | {
        created_at: string
        message: string
        warning_code: 'salto_ks_privacy_mode'
      }
    | { created_at: string; message: string; warning_code: 'privacy_mode' }
  >
}

interface ResourceAcsSystem {
  acs_access_group_count?: number
  acs_system_id: string
  acs_user_count?: number
  connected_account_id: string
  connected_account_ids: Array<string>
  created_at: string
  default_credential_manager_acs_system_id?: string | null
  errors: Array<
    | {
        created_at: string
        error_code: 'seam_bridge_disconnected'
        message: string
      }
    | {
        created_at: string
        error_code: 'bridge_disconnected'
        is_bridge_error?: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'visionline_instance_unreachable'
        message: string
      }
    | {
        created_at: string
        error_code: 'salto_ks_subscription_limit_exceeded'
        message: string
      }
    | {
        created_at: string
        error_code: 'insufficient_permissions'
        message: string
      }
    | {
        created_at: string
        error_code: 'acs_system_disconnected'
        message: string
      }
    | {
        created_at: string
        error_code: 'account_disconnected'
        message: string
      }
    | {
        created_at: string
        error_code: 'salto_ks_certification_expired'
        message: string
      }
    | {
        created_at: string
        error_code: 'provider_service_unavailable'
        message: string
      }
  >
  external_type?:
    | 'pti_site'
    | 'avigilon_alta_org'
    | 'salto_ks_site'
    | 'salto_space_system'
    | 'brivo_account'
    | 'hid_credential_manager_organization'
    | 'visionline_system'
    | 'assa_abloy_credential_service'
    | 'latch_building'
    | 'dormakaba_community_site'
    | 'dormakaba_ambiance_site'
    | 'legic_connect_credential_service'
    | 'assa_abloy_vostio'
    | 'assa_abloy_vostio_credential_service'
    | 'hotek_site'
    | 'kisi_organization'
    | 'akiles_organization'
  external_type_display_name?: string
  image_alt_text: string
  image_url: string
  is_credential_manager: boolean
  location: { time_zone: string | null }
  name: string
  system_type?:
    | 'pti_site'
    | 'avigilon_alta_org'
    | 'salto_ks_site'
    | 'salto_space_system'
    | 'brivo_account'
    | 'hid_credential_manager_organization'
    | 'visionline_system'
    | 'assa_abloy_credential_service'
    | 'latch_building'
    | 'dormakaba_community_site'
    | 'dormakaba_ambiance_site'
    | 'legic_connect_credential_service'
    | 'assa_abloy_vostio'
    | 'assa_abloy_vostio_credential_service'
    | 'hotek_site'
    | 'kisi_organization'
    | 'akiles_organization'
  system_type_display_name?: string
  visionline_metadata?: {
    lan_address?: string
    mobile_access_uuid?: string
    system_id?: string
  }
  warnings: Array<
    | {
        created_at: string
        message: string
        warning_code: 'salto_ks_subscription_limit_almost_reached'
      }
    | {
        created_at: string
        message: string
        misconfigured_acs_entrance_ids?: Array<string>
        warning_code: 'time_zone_does_not_match_location'
      }
    | { created_at: string; message: string; warning_code: 'setup_required' }
    | {
        created_at: string
        message: string
        warning_code: 'unknown_issue_with_acs_system'
      }
  >
  workspace_id: string
}

interface ResourceAcsUser {
  access_schedule?: { ends_at: string | null; starts_at: string }
  acs_system_id: string
  acs_user_id: string
  connected_account_id: string
  created_at: string
  display_name: string
  email?: string
  email_address?: string
  errors: Array<
    | { created_at: string; error_code: 'deleted_externally'; message: string }
    | {
        created_at: string
        error_code: 'salto_ks_subscription_limit_exceeded'
        message: string
      }
    | {
        created_at: string
        error_code: 'failed_to_create_on_acs_system'
        message: string
      }
    | {
        created_at: string
        error_code: 'failed_to_update_on_acs_system'
        message: string
      }
    | {
        created_at: string
        error_code: 'failed_to_delete_on_acs_system'
        message: string
      }
    | {
        created_at: string
        error_code: 'latch_conflict_with_resident_user'
        message: string
      }
  >
  external_type?:
    | 'pti_user'
    | 'brivo_user'
    | 'hid_credential_manager_user'
    | 'salto_site_user'
    | 'latch_user'
    | 'dormakaba_community_user'
    | 'salto_space_user'
    | 'avigilon_alta_user'
    | 'kisi_user'
  external_type_display_name?: string
  full_name?: string
  hid_acs_system_id?: string
  is_managed: boolean
  is_suspended?: boolean
  last_successful_sync_at: string | null
  pending_mutations?: Array<
    | { created_at: string; message: string; mutation_code: 'creating' }
    | { created_at: string; message: string; mutation_code: 'deleting' }
    | {
        created_at: string
        message: string
        mutation_code: 'deferring_creation'
        scheduled_at?: string | null
      }
    | {
        created_at: string
        from: {
          email_address?: string | null
          full_name?: string | null
          phone_number?: string | null
        }
        message: string
        mutation_code: 'updating_user_information'
        to: {
          email_address?: string | null
          full_name?: string | null
          phone_number?: string | null
        }
      }
    | {
        created_at: string
        from: { ends_at: string | null; starts_at: string | null }
        message: string
        mutation_code: 'updating_access_schedule'
        to: { ends_at: string | null; starts_at: string | null }
      }
    | {
        created_at: string
        from: { is_suspended: boolean }
        message: string
        mutation_code: 'updating_suspension_state'
        to: { is_suspended: boolean }
      }
    | {
        created_at: string
        from: { acs_access_group_id: string | null }
        message: string
        mutation_code: 'updating_group_membership'
        to: { acs_access_group_id: string | null }
      }
    | {
        acs_access_group_id: string
        created_at: string
        message: string
        mutation_code: 'deferring_group_membership_update'
        variant: 'adding' | 'removing'
      }
    | {
        created_at: string
        from: { acs_credential_id: string | null }
        message: string
        mutation_code: 'updating_credential_assignment'
        to: { acs_credential_id: string | null }
      }
  >
  phone_number?: string
  salto_ks_metadata?: { is_subscribed?: boolean }
  salto_space_metadata?: { audit_openings?: boolean; user_id?: string }
  user_identity_email_address?: string | null
  user_identity_full_name?: string | null
  user_identity_id?: string
  user_identity_phone_number?: string | null
  warnings: Array<
    | { created_at: string; message: string; warning_code: 'being_deleted' }
    | {
        created_at: string
        message: string
        warning_code: 'salto_ks_user_not_subscribed'
      }
    | { created_at: string; message: string; warning_code: 'acs_user_inactive' }
    | {
        created_at: string
        message: string
        warning_code: 'unknown_issue_with_acs_user'
      }
    | {
        created_at: string
        message: string
        warning_code: 'latch_resident_user'
      }
  >
  workspace_id: string
}

interface ResourceBridgeClientSession {
  bridge_client_machine_identifier_key: string
  bridge_client_name: string
  bridge_client_session_id: string
  bridge_client_session_token: string
  bridge_client_time_zone: string
  created_at: string
  errors: Array<
    | {
        can_tailscale_proxy_reach_bridge: boolean | null
        can_tailscale_proxy_reach_tailscale_network: boolean | null
        created_at: string
        error_code: 'bridge_lan_unreachable'
        is_bridge_socks_server_healthy: boolean | null
        is_tailscale_proxy_reachable: boolean | null
        is_tailscale_proxy_socks_server_healthy: boolean | null
        message: string
      }
    | {
        created_at: string
        error_code: 'no_communication_from_bridge'
        message: string
      }
  >
  pairing_code: string
  pairing_code_expires_at: string
  tailscale_auth_key: string | null
  tailscale_hostname: string
  telemetry_token: string | null
  telemetry_token_expires_at: string | null
  telemetry_url: string | null
}

interface ResourceBridgeConnectedSystems {
  acs_system_display_name: string
  acs_system_id: string
  bridge_created_at: string
  bridge_id: string
  connected_account_created_at: string
  connected_account_id: string
  workspace_display_name: string
  workspace_id: string
}

interface ResourceClientSession {
  client_session_id: string
  connect_webview_ids: Array<string>
  connected_account_ids: Array<string>
  created_at: string
  customer_key?: string
  device_count: number
  expires_at: string
  token: string
  user_identifier_key: string | null
  user_identity_id?: string
  user_identity_ids: Array<string>
  workspace_id: string
}

interface ResourceConnectWebview {
  accepted_capabilities: Array<
    'lock' | 'thermostat' | 'noise_sensor' | 'access_control' | 'camera'
  >
  accepted_devices: Array<string>
  accepted_providers: Array<string>
  any_device_allowed: boolean
  any_provider_allowed: boolean
  authorized_at: string | null
  automatically_manage_new_devices: boolean
  connect_webview_id: string
  connected_account_id: string | null
  created_at: string
  custom_metadata: Record<string, unknown>
  custom_redirect_failure_url: string | null
  custom_redirect_url: string | null
  customer_key?: string
  device_selection_mode: 'none' | 'single' | 'multiple'
  login_successful: boolean
  selected_provider: string | null
  status: 'pending' | 'failed' | 'authorized'
  url: string
  wait_for_device_creation: boolean
  workspace_id: string
}

interface ResourceConnectedAccount {
  accepted_capabilities: Array<
    'lock' | 'thermostat' | 'noise_sensor' | 'access_control' | 'camera'
  >
  account_type?: string
  account_type_display_name: string
  automatically_manage_new_devices: boolean
  connected_account_id: string
  created_at?: string
  custom_metadata: Record<string, unknown>
  customer_key?: string
  default_checkin_time?: string
  default_checkout_time?: string
  display_name: string
  errors: Array<
    | {
        created_at: string
        error_code: 'account_disconnected'
        is_bridge_error?: boolean
        is_connected_account_error?: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'bridge_disconnected'
        is_bridge_error?: boolean
        is_connected_account_error?: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'salto_ks_subscription_limit_exceeded'
        is_bridge_error?: boolean
        is_connected_account_error?: boolean
        message: string
        salto_ks_metadata: {
          sites?: Array<{
            site_id?: string
            site_name?: string
            site_user_subscription_limit?: number
            subscribed_site_user_count?: number
          }>
        }
      }
    | {
        created_at: string
        error_code: 'dormakaba_sites_disconnected'
        is_bridge_error?: boolean
        is_connected_account_error?: boolean
        message: string
      }
  >
  ical_feed_origin?: string
  ical_url?: string
  image_url?: string
  time_zone?: string
  user_identifier?: {
    api_url?: string
    email?: string
    exclusive?: boolean
    phone?: string
    username?: string
  }
  warnings: Array<
    | {
        created_at: string
        message: string
        warning_code: 'scheduled_maintenance_window'
      }
    | {
        created_at: string
        message: string
        warning_code: 'unknown_issue_with_connected_account'
      }
    | {
        created_at: string
        message: string
        salto_ks_metadata: {
          sites?: Array<{
            site_id?: string
            site_name?: string
            site_user_subscription_limit?: number
            subscribed_site_user_count?: number
          }>
        }
        warning_code: 'salto_ks_subscription_limit_almost_reached'
      }
    | {
        created_at: string
        message: string
        warning_code: 'account_reauthorization_requested'
      }
    | { created_at: string; message: string; warning_code: 'being_deleted' }
    | {
        created_at: string
        message: string
        warning_code: 'provider_service_unavailable'
      }
    | { created_at: string; message: string; warning_code: 'setup_required' }
    | {
        created_at: string
        message: string
        warning_code: 'dormakaba_sites_unapproved'
      }
  >
}

interface ResourceCustomer {
  created_at: string
  customer_key: string
  workspace_id: string
}

interface ResourceCustomerPortal {
  created_at: string
  customer_key: string
  expires_at: string
  url: string
  workspace_id: string
}

interface ResourceCustomizationProfile {
  created_at: string
  customer_portal_theme?: {
    font_family?: string
    mono_font_family?: string
    primary_color?: string
    primary_foreground_color?: string
    secondary_color?: string
    secondary_foreground_color?: string
  }
  customization_profile_id: string
  logo_url?: string
  message_overrides?: Record<string, unknown>
  name: string | null
  primary_color?: string
  secondary_color?: string
  workspace_id: string
}

interface ResourceDevice {
  can_configure_auto_lock?: boolean
  can_hvac_cool?: boolean
  can_hvac_heat?: boolean
  can_hvac_heat_cool?: boolean
  can_program_offline_access_codes?: boolean
  can_program_online_access_codes?: boolean
  can_program_thermostat_programs_as_different_each_day?: boolean
  can_program_thermostat_programs_as_same_each_day?: boolean
  can_program_thermostat_programs_as_weekday_weekend?: boolean
  can_remotely_lock?: boolean
  can_remotely_unlock?: boolean
  can_run_thermostat_programs?: boolean
  can_simulate_connection?: boolean
  can_simulate_disconnection?: boolean
  can_simulate_hub_connection?: boolean
  can_simulate_hub_disconnection?: boolean
  can_simulate_paid_subscription?: boolean
  can_simulate_removal?: boolean
  can_turn_off_hvac?: boolean
  can_unlock_with_code?: boolean
  capabilities_supported: Array<
    | 'access_code'
    | 'lock'
    | 'noise_detection'
    | 'thermostat'
    | 'battery'
    | 'phone'
  >
  connected_account_id: string
  created_at: string
  custom_metadata: Record<string, unknown>
  device_id: string
  device_manufacturer?: {
    display_name: string
    image_url?: string
    manufacturer: string
  }
  device_provider?: {
    device_provider_name: string
    display_name: string
    image_url?: string
    provider_category: string
  }
  device_type:
    | 'akuvox_lock'
    | 'august_lock'
    | 'brivo_access_point'
    | 'butterflymx_panel'
    | 'avigilon_alta_entry'
    | 'doorking_lock'
    | 'genie_door'
    | 'igloo_lock'
    | 'linear_lock'
    | 'lockly_lock'
    | 'kwikset_lock'
    | 'nuki_lock'
    | 'salto_lock'
    | 'schlage_lock'
    | 'smartthings_lock'
    | 'wyze_lock'
    | 'yale_lock'
    | 'two_n_intercom'
    | 'controlbyweb_device'
    | 'ttlock_lock'
    | 'igloohome_lock'
    | 'four_suites_door'
    | 'dormakaba_oracode_door'
    | 'tedee_lock'
    | 'akiles_lock'
    | 'ultraloq_lock'
    | 'yacan_lock'
    | 'keyincode_lock'
    | 'omnitec_lock'
    | 'kisi_lock'
    | 'aqara_lock'
    | 'keynest_key'
    | 'noiseaware_activity_zone'
    | 'minut_sensor'
    | 'ecobee_thermostat'
    | 'nest_thermostat'
    | 'honeywell_resideo_thermostat'
    | 'tado_thermostat'
    | 'sensi_thermostat'
    | 'smartthings_thermostat'
    | 'ios_phone'
    | 'android_phone'
    | 'ring_camera'
  display_name: string
  errors: Array<
    | {
        created_at: string
        error_code: 'account_disconnected'
        is_connected_account_error: boolean
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'salto_ks_subscription_limit_exceeded'
        is_connected_account_error: boolean
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'insufficient_permissions'
        is_connected_account_error: boolean
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'dormakaba_sites_disconnected'
        is_connected_account_error: boolean
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'device_offline'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'device_removed'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'hub_disconnected'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'device_disconnected'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'empty_backup_access_code_pool'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'august_lock_not_authorized'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'missing_device_credentials'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'auxiliary_heat_running'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'subscription_required'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'bridge_disconnected'
        is_bridge_error?: boolean
        is_connected_account_error?: boolean
        message: string
      }
  >
  is_managed: boolean
  location?: {
    location_name?: string
    room_name?: string
    time_zone?: string
    timezone?: string
  }
  nickname?: string
  properties: {
    accessory_keypad?: { battery?: { level: number }; is_connected: boolean }
    appearance: { name: string }
    battery?: { level: number; status: 'critical' | 'low' | 'good' | 'full' }
    battery_level?: number
    currently_triggering_noise_threshold_ids?: Array<string>
    has_direct_power?: boolean
    image_alt_text?: string
    image_url?: string
    manufacturer?: string
    model: {
      accessory_keypad_supported?: boolean
      can_connect_accessory_keypad?: boolean
      display_name: string
      has_built_in_keypad?: boolean
      manufacturer_display_name: string
      offline_access_codes_supported?: boolean
      online_access_codes_supported?: boolean
    }
    name: string
    noise_level_decibels?: number
    offline_access_codes_enabled?: boolean
    online: boolean
    online_access_codes_enabled?: boolean
    serial_number?: string
    supports_accessory_keypad?: boolean
    supports_offline_access_codes?: boolean
    assa_abloy_credential_service_metadata?: {
      endpoints?: Array<{ endpoint_id?: string; is_active?: boolean }>
      has_active_endpoint?: boolean
    }
    salto_space_credential_service_metadata?: { has_active_phone?: boolean }
    akiles_metadata?: {
      _member_group_id?: string
      gadget_id?: string
      gadget_name?: string
      product_name?: string
    }
    aqara_metadata?: {
      device_name?: string
      did?: string
      firmware_version?: string | null
      model?: string
      model_type?: number
      parent_did?: string
      position_id?: string | null
      time_zone?: string | null
    }
    assa_abloy_vostio_metadata?: { encoder_name?: string }
    august_metadata?: {
      has_keypad?: boolean
      house_id?: string
      house_name?: string
      keypad_battery_level?: string
      lock_id?: string
      lock_name?: string
      model?: string
    }
    avigilon_alta_metadata?: {
      entry_name?: string
      entry_relays_total_count?: number
      org_name?: string
      site_id?: number
      site_name?: string
      zone_id?: number
      zone_name?: string
    }
    brivo_metadata?: { activation_enabled?: boolean; device_name?: string }
    controlbyweb_metadata?: {
      device_id?: string
      device_name?: string
      relay_name?: string | null
    }
    dormakaba_oracode_metadata?: {
      device_id?: string
      door_id?: number
      door_is_wireless?: boolean
      door_name?: string
      iana_timezone?: string
      predefined_time_slots?: Array<{
        check_in_time?: string
        check_out_time?: string
        dormakaba_oracode_user_level_id?: string
        dormakaba_oracode_user_level_prefix?: number
        is_24_hour?: boolean
        is_biweekly_mode?: boolean
        is_master?: boolean
        is_one_shot?: boolean
        name?: string
        prefix?: number
      }>
      site_id?: number | null
      site_name?: string
    }
    ecobee_metadata?: { device_name?: string; ecobee_device_id?: string }
    four_suites_metadata?: {
      device_id?: number
      device_name?: string
      reclose_delay_in_seconds?: number
    }
    genie_metadata?: { device_name?: string; door_name?: string }
    honeywell_resideo_metadata?: {
      device_name?: string
      honeywell_resideo_device_id?: string
    }
    igloo_metadata?: { bridge_id?: string; device_id?: string; model?: string }
    igloohome_metadata?: {
      bridge_id?: string
      bridge_name?: string
      device_id?: string
      device_name?: string
      is_accessory_keypad_linked_to_bridge?: boolean
      keypad_id?: string
    }
    keynest_metadata?: {
      address?: string | null
      current_or_last_store_id?: number
      current_status?: string | null
      current_user_company?: string | null
      current_user_email?: string | null
      current_user_name?: string | null
      current_user_phone_number?: string | null
      default_office_id?: number
      device_name?: string
      fob_id?: number
      handover_method?: string | null
      has_photo?: boolean
      is_quadient_locker?: boolean
      key_id?: string
      key_notes?: string | null
      keynest_app_user?: string | null
      last_movement?: string
      property_id?: string | null
      property_postcode?: string | null
      status_type?: string
      subscription_plan?: string
    }
    kisi_metadata?: {
      description?: string | null
      lock_id?: number
      lock_name?: string
      place_name?: string | null
    }
    korelock_metadata?: {
      device_id?: string
      device_name?: string
      firmware_version?: string
      location_id?: string | null
      model_code?: string
      serial_number?: string
      wifi_signal_strength?: number
    }
    kwikset_metadata?: {
      device_id?: string
      device_name?: string
      model_number?: string
    }
    lockly_metadata?: {
      device_id?: string
      device_name?: string
      model?: string
    }
    minut_metadata?: {
      device_id?: string
      device_name?: string
      latest_sensor_values?: {
        accelerometer_z?: { time?: string; value?: number }
        humidity?: { time?: string; value?: number }
        pressure?: { time?: string; value?: number }
        sound?: { time?: string; value?: number }
        temperature?: { time?: string; value?: number }
      }
    }
    nest_metadata?: {
      device_custom_name?: string
      device_name?: string
      display_name?: string
      nest_device_id?: string
      nest_structure_id?: string
      structure_name?: string
    }
    noiseaware_metadata?: {
      device_id?: string
      device_model?: 'indoor' | 'outdoor'
      device_name?: string
      noise_level_decibel?: number
      noise_level_nrs?: number
    }
    nuki_metadata?: {
      device_id?: string
      device_name?: string
      keypad_2_paired?: boolean
      keypad_battery_critical?: boolean
      keypad_paired?: boolean
    }
    omnitec_metadata?: {
      has_gateway?: boolean
      lock_alias?: string
      lock_id?: number
      lock_mac?: string
      lock_name?: string
      time_zone?: string | null
      timezone_raw_offset_ms?: number
    }
    ring_metadata?: { device_id?: string; device_name?: string }
    salto_ks_metadata?: {
      battery_level?: string
      customer_reference?: string
      has_custom_pin_subscription?: boolean
      lock_id?: string
      lock_type?: string
      locked_state?: string
      model?: string
      site_id?: string
      site_name?: string
    }
    salto_metadata?: {
      battery_level?: string
      customer_reference?: string
      lock_id?: string
      lock_type?: string
      locked_state?: string
      model?: string
      site_id?: string
      site_name?: string
    }
    schlage_metadata?: {
      device_id?: string
      device_name?: string
      model?: string
    }
    seam_bridge_metadata?: {
      device_num?: number
      name?: string
      unlock_method?: 'bridge' | 'doorking'
    }
    sensi_metadata?: {
      device_id?: string
      device_name?: string
      dual_setpoints_not_supported?: boolean
      enforced_setpoint_range_celsius?: Array<number>
      product_type?: string
    }
    smartthings_metadata?: {
      device_id?: string
      device_name?: string
      location_id?: string
      model?: string
    }
    tado_metadata?: { device_type?: string; serial_no?: string }
    tedee_metadata?: {
      bridge_id?: number
      bridge_name?: string
      device_id?: number
      device_model?: string
      device_name?: string
      keypad_id?: number
      serial_number?: string
    }
    ttlock_metadata?: {
      feature_value?: string
      features?: {
        auto_lock_time_config?: boolean
        incomplete_keyboard_passcode?: boolean
        lock_command?: boolean
        passcode?: boolean
        passcode_management?: boolean
        unlock_via_gateway?: boolean
        wifi?: boolean
      }
      has_gateway?: boolean
      lock_alias?: string
      lock_id?: number
      timezone_raw_offset_ms?: number | null
      wireless_keypads?: Array<{
        wireless_keypad_id?: number
        wireless_keypad_name?: string
      }>
    }
    two_n_metadata?: { device_id?: number; device_name?: string }
    ultraloq_metadata?: {
      device_id?: string
      device_name?: string
      device_type?: string
      time_zone?: string | null
    }
    visionline_metadata?: { encoder_id?: string }
    wyze_metadata?: {
      device_id?: string
      device_info_model?: string
      device_name?: string
      keypad_uuid?: string
      locker_status_hardlock?: number
      product_model?: string
      product_name?: string
      product_type?: string
    }
    yacan_metadata?: {
      device_id?: string
      device_name?: string
      device_type?: string
      serial_number?: string
    }
    _experimental_supported_code_from_access_codes_lengths?: Array<number>
    auto_lock_delay_seconds?: number
    auto_lock_enabled?: boolean
    backup_access_code_pool_enabled?: boolean
    code_constraints?: Array<{
      constraint_type:
        | 'no_zeros'
        | 'cannot_start_with_12'
        | 'no_triple_consecutive_ints'
        | 'cannot_specify_pin_code'
        | 'pin_code_matches_existing_set'
        | 'start_date_in_future'
        | 'no_ascending_or_descending_sequence'
        | 'at_least_three_unique_digits'
        | 'cannot_contain_089'
        | 'cannot_contain_0789'
        | 'unique_first_four_digits'
        | 'no_all_same_digits'
        | 'name_length'
        | 'name_must_be_unique'
      max_length?: number
      min_length?: number
    }>
    door_open?: boolean
    has_native_entry_events?: boolean
    keypad_battery?: { level: number }
    locked?: boolean
    max_active_codes_supported?: number
    offline_time_frame_options?: Array<{
      display_name: string
      end_date_recurrence_rule?: string
      matching_start_end_time?: boolean
      max_duration?: string
      min_duration?: string
      start_date_recurrence_rule?: string
      time_pairs?: Array<{
        display_name: string
        end_time: string
        start_time: string
      }>
      time_zone?: string
    }>
    online_time_frame_options?: Array<{
      display_name: string
      end_date_recurrence_rule?: string
      matching_start_end_time?: boolean
      max_duration?: string
      min_duration?: string
      start_date_recurrence_rule?: string
      time_pairs?: Array<{
        display_name: string
        end_time: string
        start_time: string
      }>
      time_zone?: string
    }>
    supported_code_lengths?: Array<number>
    supports_backup_access_code_pool?: boolean
    active_thermostat_schedule?: {
      climate_preset_key: string
      created_at: string
      device_id: string
      ends_at: string
      errors: Array<{ created_at: string; error_code: string; message: string }>
      is_override_allowed?: boolean
      max_override_period_minutes?: number | null
      name: string | null
      starts_at: string
      thermostat_schedule_id: string
      workspace_id: string
    } | null
    active_thermostat_schedule_id?: string | null
    available_climate_preset_modes?: Array<
      'home' | 'away' | 'wake' | 'sleep' | 'occupied' | 'unoccupied'
    >
    available_climate_presets?: Array<{
      can_delete: boolean
      can_edit: boolean
      can_use_with_thermostat_daily_programs: boolean
      climate_preset_key: string
      climate_preset_mode?:
        'home' | 'away' | 'wake' | 'sleep' | 'occupied' | 'unoccupied'
      cooling_set_point_celsius?: number
      cooling_set_point_fahrenheit?: number
      display_name: string
      ecobee_metadata?: {
        climate_ref?: string
        is_optimized?: boolean
        owner?: 'user' | 'system'
      }
      fan_mode_setting?: 'auto' | 'on' | 'circulate'
      heating_set_point_celsius?: number
      heating_set_point_fahrenheit?: number
      hvac_mode_setting?: 'off' | 'heat' | 'cool' | 'heat_cool' | 'eco'
      manual_override_allowed: boolean
      name?: string | null
    }>
    available_fan_mode_settings?: Array<'auto' | 'on' | 'circulate'>
    available_hvac_mode_settings?: Array<
      'off' | 'heat' | 'cool' | 'heat_cool' | 'eco'
    >
    current_climate_setting?: {
      can_delete?: boolean
      can_edit?: boolean
      can_use_with_thermostat_daily_programs?: boolean
      climate_preset_key?: string
      climate_preset_mode?:
        'home' | 'away' | 'wake' | 'sleep' | 'occupied' | 'unoccupied'
      cooling_set_point_celsius?: number
      cooling_set_point_fahrenheit?: number
      display_name?: string
      ecobee_metadata?: {
        climate_ref?: string
        is_optimized?: boolean
        owner?: 'user' | 'system'
      }
      fan_mode_setting?: 'auto' | 'on' | 'circulate'
      heating_set_point_celsius?: number
      heating_set_point_fahrenheit?: number
      hvac_mode_setting?: 'off' | 'heat' | 'cool' | 'heat_cool' | 'eco'
      manual_override_allowed?: boolean
      name?: string | null
    }
    default_climate_setting?: {
      can_delete?: boolean
      can_edit?: boolean
      can_use_with_thermostat_daily_programs?: boolean
      climate_preset_key?: string
      climate_preset_mode?:
        'home' | 'away' | 'wake' | 'sleep' | 'occupied' | 'unoccupied'
      cooling_set_point_celsius?: number
      cooling_set_point_fahrenheit?: number
      display_name?: string
      ecobee_metadata?: {
        climate_ref?: string
        is_optimized?: boolean
        owner?: 'user' | 'system'
      }
      fan_mode_setting?: 'auto' | 'on' | 'circulate'
      heating_set_point_celsius?: number
      heating_set_point_fahrenheit?: number
      hvac_mode_setting?: 'off' | 'heat' | 'cool' | 'heat_cool' | 'eco'
      manual_override_allowed?: boolean
      name?: string | null
    }
    fallback_climate_preset_key?: string | null
    fan_mode_setting?: 'auto' | 'on' | 'circulate'
    is_cooling?: boolean
    is_fan_running?: boolean
    is_heating?: boolean
    is_temporary_manual_override_active?: boolean
    max_cooling_set_point_celsius?: number
    max_cooling_set_point_fahrenheit?: number
    max_heating_set_point_celsius?: number
    max_heating_set_point_fahrenheit?: number
    max_thermostat_daily_program_periods_per_day?: number
    max_unique_climate_presets_per_thermostat_weekly_program?: number
    min_cooling_set_point_celsius?: number
    min_cooling_set_point_fahrenheit?: number
    min_heating_cooling_delta_celsius?: number
    min_heating_cooling_delta_fahrenheit?: number
    min_heating_set_point_celsius?: number
    min_heating_set_point_fahrenheit?: number
    relative_humidity?: number
    temperature_celsius?: number
    temperature_fahrenheit?: number
    temperature_threshold?: {
      lower_limit_celsius: number | null
      lower_limit_fahrenheit: number | null
      upper_limit_celsius: number | null
      upper_limit_fahrenheit: number | null
    }
    thermostat_daily_program_period_precision_minutes?: number
    thermostat_daily_programs?: Array<{
      created_at: string
      device_id: string
      name: string | null
      periods: Array<{ climate_preset_key: string; starts_at_time: string }>
      thermostat_daily_program_id: string
      workspace_id: string
    }>
    thermostat_weekly_program?: {
      created_at: string
      friday_program_id: string | null
      monday_program_id: string | null
      saturday_program_id: string | null
      sunday_program_id: string | null
      thursday_program_id: string | null
      tuesday_program_id: string | null
      wednesday_program_id: string | null
    } | null
  }
  space_ids: Array<string>
  warnings: Array<
    | {
        created_at: string
        message: string
        warning_code: 'partial_backup_access_code_pool'
      }
    | {
        created_at: string
        message: string
        warning_code: 'many_active_backup_codes'
      }
    | {
        created_at: string
        message: string
        warning_code: 'third_party_integration_detected'
      }
    | {
        created_at: string
        message: string
        warning_code: 'ttlock_lock_gateway_unlocking_not_enabled'
      }
    | {
        created_at: string
        message: string
        warning_code: 'ttlock_weak_gateway_signal'
      }
    | { created_at: string; message: string; warning_code: 'power_saving_mode' }
    | {
        created_at: string
        message: string
        warning_code: 'temperature_threshold_exceeded'
      }
    | {
        created_at: string
        message: string
        warning_code: 'device_communication_degraded'
      }
    | {
        created_at: string
        message: string
        warning_code: 'scheduled_maintenance_window'
      }
    | {
        created_at: string
        message: string
        warning_code: 'device_has_flaky_connection'
      }
    | {
        created_at: string
        message: string
        warning_code: 'salto_ks_office_mode'
      }
    | {
        created_at: string
        message: string
        warning_code: 'salto_ks_privacy_mode'
      }
    | { created_at: string; message: string; warning_code: 'privacy_mode' }
    | {
        created_at: string
        message: string
        warning_code: 'salto_ks_subscription_limit_almost_reached'
      }
    | {
        created_at: string
        message: string
        warning_code: 'salto_ks_lock_access_code_support_removed'
      }
    | {
        created_at: string
        message: string
        warning_code: 'unknown_issue_with_phone'
      }
    | {
        created_at: string
        message: string
        warning_code: 'lockly_time_zone_not_configured'
      }
    | {
        created_at: string
        message: string
        warning_code: 'ultraloq_time_zone_unknown'
      }
    | { created_at: string; message: string; warning_code: 'time_zone_unknown' }
    | {
        created_at: string
        message: string
        warning_code: 'time_zone_mismatch'
      }
    | {
        created_at: string
        message: string
        warning_code: 'two_n_device_missing_timezone'
      }
    | {
        created_at: string
        message: string
        warning_code: 'hub_required_for_additional_capabilities'
      }
    | { created_at: string; message: string; warning_code: 'provider_issue' }
    | {
        created_at: string
        message: string
        warning_code: 'keynest_unsupported_locker'
      }
    | {
        created_at: string
        message: string
        warning_code: 'accessory_keypad_setup_required'
      }
    | {
        created_at: string
        message: string
        warning_code: 'unreliable_online_status'
      }
    | {
        active_access_code_count: number
        created_at: string
        max_active_access_code_count: number
        message: string
        warning_code: 'max_access_codes_reached'
      }
  >
  workspace_id: string
}

interface ResourceDeviceProvider {
  can_configure_auto_lock?: boolean
  can_hvac_cool?: boolean
  can_hvac_heat?: boolean
  can_hvac_heat_cool?: boolean
  can_program_offline_access_codes?: boolean
  can_program_online_access_codes?: boolean
  can_program_thermostat_programs_as_different_each_day?: boolean
  can_program_thermostat_programs_as_same_each_day?: boolean
  can_program_thermostat_programs_as_weekday_weekend?: boolean
  can_remotely_lock?: boolean
  can_remotely_unlock?: boolean
  can_run_thermostat_programs?: boolean
  can_simulate_connection?: boolean
  can_simulate_disconnection?: boolean
  can_simulate_hub_connection?: boolean
  can_simulate_hub_disconnection?: boolean
  can_simulate_paid_subscription?: boolean
  can_simulate_removal?: boolean
  can_turn_off_hvac?: boolean
  can_unlock_with_code?: boolean
  device_provider_name:
    | 'hotek'
    | 'dormakaba_community'
    | 'legic_connect'
    | 'akuvox'
    | 'august'
    | 'avigilon_alta'
    | 'brivo'
    | 'butterflymx'
    | 'schlage'
    | 'smartthings'
    | 'yale'
    | 'genie'
    | 'doorking'
    | 'salto'
    | 'salto_ks'
    | 'salto_ks_accept'
    | 'lockly'
    | 'ttlock'
    | 'linear'
    | 'noiseaware'
    | 'nuki'
    | 'igloo'
    | 'kwikset'
    | 'minut'
    | 'my_2n'
    | 'controlbyweb'
    | 'nest'
    | 'igloohome'
    | 'ecobee'
    | 'four_suites'
    | 'dormakaba_oracode'
    | 'pti'
    | 'wyze'
    | 'seam_passport'
    | 'visionline'
    | 'assa_abloy_credential_service'
    | 'tedee'
    | 'honeywell_resideo'
    | 'first_alert'
    | 'latch'
    | 'akiles'
    | 'assa_abloy_vostio'
    | 'assa_abloy_vostio_credential_service'
    | 'tado'
    | 'salto_space'
    | 'sensi'
    | 'keynest'
    | 'korelock'
    | 'keyincode'
    | 'dormakaba_ambiance'
    | 'ultraloq'
    | 'yacan'
    | 'dusaw'
    | 'sifely'
    | 'thirty_three_lock'
    | 'ring'
    | 'ical'
    | 'lodgify'
    | 'hostaway'
    | 'guesty'
    | 'acuity_scheduling'
    | 'omnitec'
    | 'kisi'
    | 'aqara'
  display_name: string
  image_url: string
  provider_categories: Array<
    | 'stable'
    | 'consumer_smartlocks'
    | 'beta'
    | 'thermostats'
    | 'noise_sensors'
    | 'access_control_systems'
    | 'cameras'
    | 'connectors'
  >
}

interface ResourceEnrollmentAutomation {
  created_at: string
  credential_manager_acs_system_id: string
  enrollment_automation_id: string
  user_identity_id: string
  workspace_id: string
}

interface ResourceEvent {
  acs_entrance_ids: Array<string>
  created_at: string
  device_ids: Array<string>
  event_description?: string
  event_id: string
  event_type: 'space.deleted'
  occurred_at: string
  space_id: string
  space_key?: string
  workspace_id: string
}

interface ResourceInstantKey {
  client_session_id: string
  created_at: string
  customization?: {
    logo_url?: string
    primary_color?: string
    secondary_color?: string
  }
  customization_profile_id?: string
  expires_at: string
  instant_key_id: string
  instant_key_url: string
  user_identity_id: string
  workspace_id: string
}

interface ResourceMagicLink {
  created_at: string
  customer_key: string
  expires_at: string
  url: string
  workspace_id: string
}

interface ResourceNoiseThreshold {
  device_id: string
  ends_daily_at: string
  name: string
  noise_threshold_decibels: number
  noise_threshold_id: string
  noise_threshold_nrs?: number
  starts_daily_at: string
}

interface ResourcePhone {
  created_at: string
  custom_metadata: Record<string, unknown>
  device_id: string
  device_type: 'ios_phone' | 'android_phone'
  display_name: string
  errors: Array<{ created_at: string; error_code: string; message: string }>
  nickname?: string
  properties: {
    assa_abloy_credential_service_metadata?: {
      endpoints?: Array<{ endpoint_id?: string; is_active?: boolean }>
      has_active_endpoint?: boolean
    }
    salto_space_credential_service_metadata?: { has_active_phone?: boolean }
  }
  warnings: Array<{ created_at: string; message: string; warning_code: string }>
  workspace_id: string
}

interface ResourcePhoneSession {
  is_sandbox_workspace: boolean
  provider_sessions: Array<{
    acs_credentials: Array<{
      access_method: 'code' | 'card' | 'mobile_key' | 'cloud_key'
      acs_credential_id: string | null
      acs_credential_pool_id?: string
      acs_entrances: Array<{
        acs_entrance_id: string
        acs_system_id: string
        akiles_metadata?: {
          actions?: Array<{ id?: string; name?: string }>
          gadget_id?: string
          site_id?: string
          site_name?: string
        }
        assa_abloy_vostio_metadata?: {
          door_name?: string
          door_number?: number
          door_type?: 'CommonDoor' | 'EntranceDoor' | 'GuestDoor' | 'Elevator'
          pms_id?: string
          stand_open?: boolean
        }
        avigilon_alta_metadata?: {
          entry_name?: string
          entry_relays_total_count?: number
          org_name?: string
          site_id?: number
          site_name?: string
          zone_id?: number
          zone_name?: string
        }
        brivo_metadata?: {
          access_point_id?: string
          site_id?: number
          site_name?: string
        }
        can_belong_to_reservation?: boolean
        can_unlock_with_card?: boolean
        can_unlock_with_cloud_key?: boolean
        can_unlock_with_code?: boolean
        can_unlock_with_mobile_key?: boolean
        connected_account_id: string
        created_at: string
        display_name: string
        dormakaba_ambiance_metadata?: { access_point_name?: string }
        dormakaba_community_metadata?: { access_point_profile?: string }
        errors: Array<{
          created_at: string
          error_code: string
          message: string
        }>
        hotek_metadata?: {
          common_area_name?: string
          common_area_number?: string
          room_number?: string
        }
        is_locked?: boolean
        latch_metadata?: {
          accessibility_type?: string
          door_name?: string
          door_type?: string
          is_connected?: boolean
        }
        salto_ks_metadata?: {
          battery_level?: string
          door_name?: string
          intrusion_alarm?: boolean
          left_open_alarm?: boolean
          lock_type?: string
          locked_state?: string
          online?: boolean
          privacy_mode?: boolean
        }
        salto_space_metadata?: {
          audit_on_keys?: boolean
          door_description?: string
          door_id?: string
          door_name?: string
          room_description?: string
          room_name?: string
        }
        space_ids: Array<string>
        visionline_metadata?: {
          door_category?:
            'entrance' | 'guest' | 'elevator reader' | 'common' | 'common (PMS)'
          door_name?: string
          profiles?: Array<{
            visionline_door_profile_id?: string
            visionline_door_profile_type?: 'BLE' | 'commonDoor' | 'touch'
          }>
        }
        warnings: Array<{
          created_at: string
          message: string
          warning_code:
            | 'salto_ks_entrance_access_code_support_removed'
            | 'entrance_shares_zone'
            | 'entrance_setup_required'
            | 'salto_ks_privacy_mode'
            | 'privacy_mode'
        }>
      }>
      acs_system_id: string
      acs_user_id?: string
      akiles_metadata?: { member_pin_id?: string }
      assa_abloy_vostio_metadata?: {
        auto_join?: boolean
        door_names?: Array<string>
        endpoint_id?: string
        key_id?: string
        key_issuing_request_id?: string
        override_guest_acs_entrance_ids?: Array<string>
      }
      card_number?: string | null
      code?: string | null
      connected_account_id: string
      created_at: string
      display_name: string
      ends_at?: string
      errors: Array<{ created_at: string; error_code: string; message: string }>
      external_type?:
        | 'pti_card'
        | 'brivo_credential'
        | 'hid_credential'
        | 'visionline_card'
        | 'salto_ks_credential'
        | 'assa_abloy_vostio_key'
        | 'salto_space_key'
        | 'latch_access'
        | 'dormakaba_ambiance_credential'
        | 'hotek_card'
        | 'salto_ks_tag'
        | 'avigilon_alta_credential'
        | 'kisi_credential'
        | 'akiles_credential'
      external_type_display_name?: string
      is_issued?: boolean
      is_latest_desired_state_synced_with_provider?: boolean | null
      is_managed: boolean
      is_multi_phone_sync_credential?: boolean
      is_one_time_use?: boolean
      issued_at?: string | null
      latest_desired_state_synced_with_provider_at?: string | null
      parent_acs_credential_id?: string
      starts_at?: string
      user_identity_id?: string
      visionline_metadata?: {
        auto_join?: boolean
        card_function_type?: 'guest' | 'staff'
        card_id?: string
        common_acs_entrance_ids?: Array<string>
        credential_id?: string
        guest_acs_entrance_ids?: Array<string>
        is_valid?: boolean
        joiner_acs_credential_ids?: Array<string>
      }
      warnings: Array<{
        created_at: string
        message: string
        warning_code:
          | 'waiting_to_be_issued'
          | 'schedule_externally_modified'
          | 'schedule_modified'
          | 'being_deleted'
          | 'unknown_issue_with_acs_credential'
          | 'needs_to_be_reissued'
          | 'requested_code_unavailable'
        new_code?: string
        original_code?: string
      }>
      workspace_id: string
    }>
    phone_registration: {
      is_being_activated: boolean
      phone_registration_id: string
      provider_name: string | null
      provider_state: Record<string, unknown> | null
    }
  }>
  user_identity: {
    acs_user_ids: Array<string>
    created_at: string
    display_name: string
    email_address: string | null
    errors: Array<{
      acs_system_id: string
      acs_user_id: string
      created_at: string
      error_code: 'issue_with_acs_user'
      message: string
    }>
    full_name: string | null
    phone_number: string | null
    user_identity_id: string
    user_identity_key: string | null
    warnings: Array<{
      created_at: string
      message: string
      warning_code:
        'being_deleted' | 'acs_user_profile_does_not_match_user_identity'
    }>
    workspace_id: string
  }
  workspace_id: string
}

interface ResourceSpace {
  acs_entrance_count: number
  created_at: string
  customer_data?: {
    address?: string | null
    default_checkin_time?: string | null
    default_checkout_time?: string | null
    time_zone?: string | null
  }
  customer_key?: string
  device_count: number
  display_name: string
  geolocation?: { latitude: number; longitude: number } | null
  name: string
  parent_space_id?: string
  parent_space_key?: string
  space_id: string
  space_key?: string
  workspace_id: string
}

interface ResourceThermostatDailyProgram {
  created_at: string
  device_id: string
  name: string | null
  periods: Array<{ climate_preset_key: string; starts_at_time: string }>
  thermostat_daily_program_id: string
  workspace_id: string
}

interface ResourceThermostatSchedule {
  climate_preset_key: string
  created_at: string
  device_id: string
  ends_at: string
  errors: Array<{ created_at: string; error_code: string; message: string }>
  is_override_allowed?: boolean
  max_override_period_minutes?: number | null
  name: string | null
  starts_at: string
  thermostat_schedule_id: string
  workspace_id: string
}

interface ResourceUnmanagedAccessCode {
  access_code_id: string
  cannot_be_managed?: boolean
  cannot_delete_unmanaged_access_code?: boolean
  code: string | null
  created_at: string
  device_id: string
  dormakaba_oracode_metadata?: {
    is_cancellable?: boolean
    is_early_checkin_able?: boolean
    is_extendable?: boolean
    is_overridable?: boolean
    site_name?: string
    stay_id?: number
    user_level_id?: string
    user_level_name?: string | null
  } | null
  ends_at?: string | null
  errors: Array<
    | {
        created_at?: string
        error_code: 'provider_issue'
        is_access_code_error: boolean
        message: string
      }
    | {
        created_at?: string
        error_code: 'failed_to_set_on_device'
        is_access_code_error: boolean
        message: string
      }
    | {
        created_at?: string
        error_code: 'failed_to_remove_from_device'
        is_access_code_error: boolean
        message: string
      }
    | {
        created_at?: string
        error_code: 'duplicate_code_on_device'
        is_access_code_error: boolean
        managed_access_code_id?: string
        message: string
        unmanaged_access_code_id?: string
      }
    | {
        created_at?: string
        error_code: 'no_space_for_access_code_on_device'
        is_access_code_error: boolean
        message: string
      }
    | {
        change_type?: 'modified' | 'removed'
        created_at?: string
        error_code: 'conflicting_external_modification'
        is_access_code_error: boolean
        message: string
        modified_fields?: Array<{
          field: string
          from: string | null
          to: string | null
        }>
      }
    | {
        created_at?: string
        error_code: 'access_code_inactive'
        is_access_code_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'account_disconnected'
        is_connected_account_error: boolean
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'salto_ks_subscription_limit_exceeded'
        is_connected_account_error: boolean
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'insufficient_permissions'
        is_connected_account_error: boolean
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'dormakaba_sites_disconnected'
        is_connected_account_error: boolean
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'device_offline'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'device_removed'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'hub_disconnected'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'device_disconnected'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'empty_backup_access_code_pool'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'august_lock_not_authorized'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'missing_device_credentials'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'auxiliary_heat_running'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'subscription_required'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'bridge_disconnected'
        is_bridge_error?: boolean
        is_connected_account_error?: boolean
        message: string
      }
  >
  is_managed: boolean
  name: string | null
  starts_at?: string | null
  status: 'set' | 'unset'
  type: 'time_bound' | 'ongoing'
  warnings: Array<
    | {
        created_at?: string
        message: string
        warning_code: 'code_rotates_periodically'
      }
    | {
        created_at?: string
        message: string
        warning_code: 'time_frame_adjusted_for_unknown_time_zone'
      }
    | {
        change_type?: 'modified' | 'removed'
        created_at?: string
        message: string
        modified_fields?: Array<{
          field: string
          from: string | null
          to: string | null
        }>
        warning_code: 'external_modification_in_effect'
      }
    | {
        created_at?: string
        message: string
        warning_code: 'delay_in_setting_on_device'
      }
    | {
        created_at?: string
        message: string
        warning_code: 'delay_in_removing_from_device'
      }
    | {
        created_at?: string
        message: string
        warning_code: 'third_party_integration_detected'
      }
    | {
        created_at?: string
        message: string
        warning_code: 'igloo_algopin_must_be_used_within_24_hours'
      }
    | {
        created_at?: string
        message: string
        warning_code: 'management_transferred'
      }
    | {
        created_at?: string
        message: string
        warning_code: 'using_backup_access_code'
      }
    | { created_at?: string; message: string; warning_code: 'being_deleted' }
    | {
        created_at?: string
        message: string
        warning_code: 'unknown_issue_with_access_code'
      }
  >
  workspace_id: string
}

interface ResourceUnmanagedAccessGrant {
  access_grant_id: string
  access_method_ids: Array<string>
  created_at: string
  display_name: string
  ends_at: string | null
  errors: Array<{
    created_at: string
    error_code: 'cannot_create_requested_access_methods'
    message: string
    missing_device_ids?: Array<string>
  }>
  location_ids: Array<string>
  name: string | null
  pending_mutations: Array<
    | {
        created_at: string
        from: { device_ids: Array<string> }
        message: string
        mutation_code: 'updating_spaces'
        to: { common_code_key?: string | null; device_ids: Array<string> }
      }
    | {
        access_method_ids: Array<string>
        created_at: string
        from: { ends_at: string | null; starts_at: string | null }
        message: string
        mutation_code: 'updating_access_times'
        to: { ends_at: string | null; starts_at: string | null }
      }
  >
  requested_access_methods: Array<{
    code?: string
    created_access_method_ids: Array<string>
    created_at: string
    display_name: string
    instant_key_max_use_count?: number
    mode: 'code' | 'card' | 'mobile_key' | 'cloud_key'
  }>
  reservation_key?: string
  space_ids: Array<string>
  starts_at: string
  user_identity_id?: string
  warnings: Array<
    | { created_at: string; message: string; warning_code: 'being_deleted' }
    | {
        created_at: string
        message: string
        warning_code: 'underprovisioned_access'
      }
    | {
        created_at: string
        failed_devices?: Array<{
          device_id: string
          error_code: string
          message: string
        }>
        message: string
        warning_code: 'overprovisioned_access'
      }
    | {
        access_method_ids: Array<string>
        created_at: string
        message: string
        warning_code: 'updating_access_times'
      }
    | {
        created_at: string
        device_id: string
        message: string
        new_code: string
        original_code: string
        warning_code: 'requested_code_unavailable'
      }
    | {
        created_at: string
        device_id: string
        message: string
        warning_code: 'device_does_not_support_access_codes'
      }
    | {
        created_at: string
        device_id: string
        message: string
        reason:
          | 'duration_exceeds_max'
          | 'times_do_not_match_slots'
          | 'ongoing_not_supported'
        warning_code: 'device_time_constraints_violated'
      }
  >
  workspace_id: string
}

interface ResourceUnmanagedAccessMethod {
  access_method_id: string
  code?: string | null
  created_at: string
  display_name: string
  display_status: string
  errors: Array<{
    created_at: string
    error_code: 'failed_to_issue'
    message: string
  }>
  is_assignment_required?: boolean
  is_encoding_required?: boolean
  is_issued: boolean
  is_ready_for_assignment?: boolean
  is_ready_for_encoding?: boolean
  issued_at: string | null
  mode: 'code' | 'card' | 'mobile_key' | 'cloud_key'
  pending_mutations: Array<
    | {
        created_at: string
        from: { device_ids: Array<string> }
        message: string
        mutation_code: 'provisioning_access'
        to: { device_ids: Array<string> }
      }
    | {
        created_at: string
        from: { device_ids: Array<string> }
        message: string
        mutation_code: 'revoking_access'
        to: { device_ids: Array<string> }
      }
    | {
        created_at: string
        from: { ends_at: string | null; starts_at: string | null }
        message: string
        mutation_code: 'updating_access_times'
        to: { ends_at: string | null; starts_at: string | null }
      }
  >
  warnings: Array<
    | { created_at: string; message: string; warning_code: 'being_deleted' }
    | {
        created_at: string
        message: string
        warning_code: 'updating_access_times'
      }
    | {
        created_at: string
        message: string
        original_access_method_id?: string
        warning_code: 'pulled_backup_access_code'
      }
    | { created_at: string; message: string; warning_code: 'delay_in_issuing' }
  >
  workspace_id: string
}

interface ResourceUnmanagedAcsAccessGroup {
  access_group_type:
    | 'pti_unit'
    | 'pti_access_level'
    | 'salto_ks_access_group'
    | 'brivo_group'
    | 'salto_space_group'
    | 'dormakaba_community_access_group'
    | 'dormakaba_ambiance_access_group'
    | 'avigilon_alta_group'
    | 'kisi_access_group'
    | 'akiles_member_group'
  access_group_type_display_name: string
  access_schedule?: { ends_at: string | null; starts_at: string }
  acs_access_group_id: string
  acs_system_id: string
  connected_account_id: string
  created_at: string
  display_name: string
  errors: Array<{
    created_at: string
    error_code: 'failed_to_create_on_acs_system'
    message: string
  }>
  external_type:
    | 'pti_unit'
    | 'pti_access_level'
    | 'salto_ks_access_group'
    | 'brivo_group'
    | 'salto_space_group'
    | 'dormakaba_community_access_group'
    | 'dormakaba_ambiance_access_group'
    | 'avigilon_alta_group'
    | 'kisi_access_group'
    | 'akiles_member_group'
  external_type_display_name: string
  is_managed: boolean
  name: string
  pending_mutations: Array<
    | { created_at: string; message: string; mutation_code: 'creating' }
    | { created_at: string; message: string; mutation_code: 'deleting' }
    | {
        created_at: string
        message: string
        mutation_code: 'deferring_deletion'
      }
    | {
        created_at: string
        from: { name?: string | null }
        message: string
        mutation_code: 'updating_group_information'
        to: { name?: string | null }
      }
    | {
        created_at: string
        from: { ends_at: string | null; starts_at: string | null }
        message: string
        mutation_code: 'updating_access_schedule'
        to: { ends_at: string | null; starts_at: string | null }
      }
    | {
        created_at: string
        from: { acs_user_id: string | null }
        message: string
        mutation_code: 'updating_user_membership'
        to: { acs_user_id: string | null }
      }
    | {
        created_at: string
        from: { acs_entrance_id: string | null }
        message: string
        mutation_code: 'updating_entrance_membership'
        to: { acs_entrance_id: string | null }
      }
    | {
        acs_user_id: string
        created_at: string
        message: string
        mutation_code: 'deferring_user_membership_update'
        variant: 'adding' | 'removing'
      }
  >
  warnings: Array<{
    created_at: string
    message: string
    warning_code: 'unknown_issue_with_acs_access_group' | 'being_deleted'
  }>
  workspace_id: string
}

interface ResourceUnmanagedAcsCredential {
  access_method: 'code' | 'card' | 'mobile_key' | 'cloud_key'
  acs_credential_id: string
  acs_credential_pool_id?: string
  acs_system_id: string
  acs_user_id?: string
  akiles_metadata?: { member_pin_id?: string }
  assa_abloy_vostio_metadata?: {
    auto_join?: boolean
    door_names?: Array<string>
    endpoint_id?: string
    key_id?: string
    key_issuing_request_id?: string
    override_guest_acs_entrance_ids?: Array<string>
  }
  card_number?: string | null
  code?: string | null
  connected_account_id: string
  created_at: string
  display_name: string
  ends_at?: string
  errors: Array<{ created_at: string; error_code: string; message: string }>
  external_type?:
    | 'pti_card'
    | 'brivo_credential'
    | 'hid_credential'
    | 'visionline_card'
    | 'salto_ks_credential'
    | 'assa_abloy_vostio_key'
    | 'salto_space_key'
    | 'latch_access'
    | 'dormakaba_ambiance_credential'
    | 'hotek_card'
    | 'salto_ks_tag'
    | 'avigilon_alta_credential'
    | 'kisi_credential'
    | 'akiles_credential'
  external_type_display_name?: string
  is_issued?: boolean
  is_latest_desired_state_synced_with_provider?: boolean | null
  is_managed: boolean
  is_multi_phone_sync_credential?: boolean
  is_one_time_use?: boolean
  issued_at?: string | null
  latest_desired_state_synced_with_provider_at?: string | null
  parent_acs_credential_id?: string
  starts_at?: string
  user_identity_id?: string
  visionline_metadata?: {
    auto_join?: boolean
    card_function_type?: 'guest' | 'staff'
    card_id?: string
    common_acs_entrance_ids?: Array<string>
    credential_id?: string
    guest_acs_entrance_ids?: Array<string>
    is_valid?: boolean
    joiner_acs_credential_ids?: Array<string>
  }
  warnings: Array<
    | {
        created_at: string
        message: string
        warning_code: 'waiting_to_be_issued'
      }
    | {
        created_at: string
        message: string
        warning_code: 'schedule_externally_modified'
      }
    | { created_at: string; message: string; warning_code: 'schedule_modified' }
    | { created_at: string; message: string; warning_code: 'being_deleted' }
    | {
        created_at: string
        message: string
        warning_code: 'unknown_issue_with_acs_credential'
      }
    | {
        created_at: string
        message: string
        warning_code: 'needs_to_be_reissued'
      }
    | {
        created_at: string
        message: string
        new_code: string
        original_code: string
        warning_code: 'requested_code_unavailable'
      }
  >
  workspace_id: string
}

interface ResourceUnmanagedAcsUser {
  access_schedule?: { ends_at: string | null; starts_at: string }
  acs_system_id: string
  acs_user_id: string
  connected_account_id: string
  created_at: string
  display_name: string
  email?: string
  email_address?: string
  errors: Array<
    | { created_at: string; error_code: 'deleted_externally'; message: string }
    | {
        created_at: string
        error_code: 'salto_ks_subscription_limit_exceeded'
        message: string
      }
    | {
        created_at: string
        error_code: 'failed_to_create_on_acs_system'
        message: string
      }
    | {
        created_at: string
        error_code: 'failed_to_update_on_acs_system'
        message: string
      }
    | {
        created_at: string
        error_code: 'failed_to_delete_on_acs_system'
        message: string
      }
    | {
        created_at: string
        error_code: 'latch_conflict_with_resident_user'
        message: string
      }
  >
  external_type?:
    | 'pti_user'
    | 'brivo_user'
    | 'hid_credential_manager_user'
    | 'salto_site_user'
    | 'latch_user'
    | 'dormakaba_community_user'
    | 'salto_space_user'
    | 'avigilon_alta_user'
    | 'kisi_user'
  external_type_display_name?: string
  full_name?: string
  hid_acs_system_id?: string
  is_managed: boolean
  is_suspended?: boolean
  last_successful_sync_at: string | null
  pending_mutations?: Array<
    | { created_at: string; message: string; mutation_code: 'creating' }
    | { created_at: string; message: string; mutation_code: 'deleting' }
    | {
        created_at: string
        message: string
        mutation_code: 'deferring_creation'
        scheduled_at?: string | null
      }
    | {
        created_at: string
        from: {
          email_address?: string | null
          full_name?: string | null
          phone_number?: string | null
        }
        message: string
        mutation_code: 'updating_user_information'
        to: {
          email_address?: string | null
          full_name?: string | null
          phone_number?: string | null
        }
      }
    | {
        created_at: string
        from: { ends_at: string | null; starts_at: string | null }
        message: string
        mutation_code: 'updating_access_schedule'
        to: { ends_at: string | null; starts_at: string | null }
      }
    | {
        created_at: string
        from: { is_suspended: boolean }
        message: string
        mutation_code: 'updating_suspension_state'
        to: { is_suspended: boolean }
      }
    | {
        created_at: string
        from: { acs_access_group_id: string | null }
        message: string
        mutation_code: 'updating_group_membership'
        to: { acs_access_group_id: string | null }
      }
    | {
        acs_access_group_id: string
        created_at: string
        message: string
        mutation_code: 'deferring_group_membership_update'
        variant: 'adding' | 'removing'
      }
    | {
        created_at: string
        from: { acs_credential_id: string | null }
        message: string
        mutation_code: 'updating_credential_assignment'
        to: { acs_credential_id: string | null }
      }
  >
  phone_number?: string
  salto_ks_metadata?: { is_subscribed?: boolean }
  salto_space_metadata?: { audit_openings?: boolean; user_id?: string }
  user_identity_email_address?: string | null
  user_identity_full_name?: string | null
  user_identity_id?: string
  user_identity_phone_number?: string | null
  warnings: Array<
    | { created_at: string; message: string; warning_code: 'being_deleted' }
    | {
        created_at: string
        message: string
        warning_code: 'salto_ks_user_not_subscribed'
      }
    | { created_at: string; message: string; warning_code: 'acs_user_inactive' }
    | {
        created_at: string
        message: string
        warning_code: 'unknown_issue_with_acs_user'
      }
    | {
        created_at: string
        message: string
        warning_code: 'latch_resident_user'
      }
  >
  workspace_id: string
}

interface ResourceUnmanagedDevice {
  can_configure_auto_lock?: boolean
  can_hvac_cool?: boolean
  can_hvac_heat?: boolean
  can_hvac_heat_cool?: boolean
  can_program_offline_access_codes?: boolean
  can_program_online_access_codes?: boolean
  can_program_thermostat_programs_as_different_each_day?: boolean
  can_program_thermostat_programs_as_same_each_day?: boolean
  can_program_thermostat_programs_as_weekday_weekend?: boolean
  can_remotely_lock?: boolean
  can_remotely_unlock?: boolean
  can_run_thermostat_programs?: boolean
  can_simulate_connection?: boolean
  can_simulate_disconnection?: boolean
  can_simulate_hub_connection?: boolean
  can_simulate_hub_disconnection?: boolean
  can_simulate_paid_subscription?: boolean
  can_simulate_removal?: boolean
  can_turn_off_hvac?: boolean
  can_unlock_with_code?: boolean
  capabilities_supported: Array<
    | 'access_code'
    | 'lock'
    | 'noise_detection'
    | 'thermostat'
    | 'battery'
    | 'phone'
  >
  connected_account_id: string
  created_at: string
  custom_metadata: Record<string, unknown>
  device_id: string
  device_type:
    | 'akuvox_lock'
    | 'august_lock'
    | 'brivo_access_point'
    | 'butterflymx_panel'
    | 'avigilon_alta_entry'
    | 'doorking_lock'
    | 'genie_door'
    | 'igloo_lock'
    | 'linear_lock'
    | 'lockly_lock'
    | 'kwikset_lock'
    | 'nuki_lock'
    | 'salto_lock'
    | 'schlage_lock'
    | 'smartthings_lock'
    | 'wyze_lock'
    | 'yale_lock'
    | 'two_n_intercom'
    | 'controlbyweb_device'
    | 'ttlock_lock'
    | 'igloohome_lock'
    | 'four_suites_door'
    | 'dormakaba_oracode_door'
    | 'tedee_lock'
    | 'akiles_lock'
    | 'ultraloq_lock'
    | 'yacan_lock'
    | 'keyincode_lock'
    | 'omnitec_lock'
    | 'kisi_lock'
    | 'aqara_lock'
    | 'keynest_key'
    | 'noiseaware_activity_zone'
    | 'minut_sensor'
    | 'ecobee_thermostat'
    | 'nest_thermostat'
    | 'honeywell_resideo_thermostat'
    | 'tado_thermostat'
    | 'sensi_thermostat'
    | 'smartthings_thermostat'
    | 'ios_phone'
    | 'android_phone'
    | 'ring_camera'
  errors: Array<
    | {
        created_at: string
        error_code: 'account_disconnected'
        is_connected_account_error: boolean
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'salto_ks_subscription_limit_exceeded'
        is_connected_account_error: boolean
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'insufficient_permissions'
        is_connected_account_error: boolean
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'dormakaba_sites_disconnected'
        is_connected_account_error: boolean
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'device_offline'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'device_removed'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'hub_disconnected'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'device_disconnected'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'empty_backup_access_code_pool'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'august_lock_not_authorized'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'missing_device_credentials'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'auxiliary_heat_running'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'subscription_required'
        is_device_error: boolean
        message: string
      }
    | {
        created_at: string
        error_code: 'bridge_disconnected'
        is_bridge_error?: boolean
        is_connected_account_error?: boolean
        message: string
      }
  >
  is_managed: boolean
  location?: {
    location_name?: string
    room_name?: string
    time_zone?: string
    timezone?: string
  }
  properties: {
    accessory_keypad?: { battery?: { level: number }; is_connected: boolean }
    battery?: { level: number; status: 'critical' | 'low' | 'good' | 'full' }
    battery_level?: number
    image_alt_text?: string
    image_url?: string
    manufacturer?: string
    model: {
      accessory_keypad_supported?: boolean
      can_connect_accessory_keypad?: boolean
      display_name: string
      has_built_in_keypad?: boolean
      manufacturer_display_name: string
      offline_access_codes_supported?: boolean
      online_access_codes_supported?: boolean
    }
    name: string
    offline_access_codes_enabled?: boolean
    online: boolean
    online_access_codes_enabled?: boolean
  }
  warnings: Array<
    | {
        created_at: string
        message: string
        warning_code: 'partial_backup_access_code_pool'
      }
    | {
        created_at: string
        message: string
        warning_code: 'many_active_backup_codes'
      }
    | {
        created_at: string
        message: string
        warning_code: 'third_party_integration_detected'
      }
    | {
        created_at: string
        message: string
        warning_code: 'ttlock_lock_gateway_unlocking_not_enabled'
      }
    | {
        created_at: string
        message: string
        warning_code: 'ttlock_weak_gateway_signal'
      }
    | { created_at: string; message: string; warning_code: 'power_saving_mode' }
    | {
        created_at: string
        message: string
        warning_code: 'temperature_threshold_exceeded'
      }
    | {
        created_at: string
        message: string
        warning_code: 'device_communication_degraded'
      }
    | {
        created_at: string
        message: string
        warning_code: 'scheduled_maintenance_window'
      }
    | {
        created_at: string
        message: string
        warning_code: 'device_has_flaky_connection'
      }
    | {
        created_at: string
        message: string
        warning_code: 'salto_ks_office_mode'
      }
    | {
        created_at: string
        message: string
        warning_code: 'salto_ks_privacy_mode'
      }
    | { created_at: string; message: string; warning_code: 'privacy_mode' }
    | {
        created_at: string
        message: string
        warning_code: 'salto_ks_subscription_limit_almost_reached'
      }
    | {
        created_at: string
        message: string
        warning_code: 'salto_ks_lock_access_code_support_removed'
      }
    | {
        created_at: string
        message: string
        warning_code: 'unknown_issue_with_phone'
      }
    | {
        created_at: string
        message: string
        warning_code: 'lockly_time_zone_not_configured'
      }
    | {
        created_at: string
        message: string
        warning_code: 'ultraloq_time_zone_unknown'
      }
    | { created_at: string; message: string; warning_code: 'time_zone_unknown' }
    | {
        created_at: string
        message: string
        warning_code: 'time_zone_mismatch'
      }
    | {
        created_at: string
        message: string
        warning_code: 'two_n_device_missing_timezone'
      }
    | {
        created_at: string
        message: string
        warning_code: 'hub_required_for_additional_capabilities'
      }
    | { created_at: string; message: string; warning_code: 'provider_issue' }
    | {
        created_at: string
        message: string
        warning_code: 'keynest_unsupported_locker'
      }
    | {
        created_at: string
        message: string
        warning_code: 'accessory_keypad_setup_required'
      }
    | {
        created_at: string
        message: string
        warning_code: 'unreliable_online_status'
      }
    | {
        active_access_code_count: number
        created_at: string
        max_active_access_code_count: number
        message: string
        warning_code: 'max_access_codes_reached'
      }
  >
  workspace_id: string
}

interface ResourceUnmanagedUserIdentity {
  acs_user_ids: Array<string>
  created_at: string
  display_name: string
  email_address: string | null
  errors: Array<{
    acs_system_id: string
    acs_user_id: string
    created_at: string
    error_code: 'issue_with_acs_user'
    message: string
  }>
  full_name: string | null
  phone_number: string | null
  user_identity_id: string
  warnings: Array<
    | { created_at: string; message: string; warning_code: 'being_deleted' }
    | {
        created_at: string
        message: string
        warning_code: 'acs_user_profile_does_not_match_user_identity'
      }
  >
  workspace_id: string
}

interface ResourceUserIdentity {
  acs_user_ids: Array<string>
  created_at: string
  display_name: string
  email_address: string | null
  errors: Array<{
    acs_system_id: string
    acs_user_id: string
    created_at: string
    error_code: 'issue_with_acs_user'
    message: string
  }>
  full_name: string | null
  phone_number: string | null
  user_identity_id: string
  user_identity_key: string | null
  warnings: Array<
    | { created_at: string; message: string; warning_code: 'being_deleted' }
    | {
        created_at: string
        message: string
        warning_code: 'acs_user_profile_does_not_match_user_identity'
      }
  >
  workspace_id: string
}

interface ResourceWebhook {
  event_types?: Array<string>
  secret?: string
  url: string
  webhook_id: string
}

interface ResourceWorkspace {
  company_name: string
  connect_partner_name: string | null
  connect_webview_customization: {
    inviter_logo_url?: string
    logo_shape?: 'circle' | 'square'
    primary_button_color?: string
    primary_button_text_color?: string
    success_message?: string
  }
  is_publishable_key_auth_enabled: boolean
  is_sandbox: boolean
  is_suspended: boolean
  name: string
  organization_id: string | null
  publishable_key?: string
  workspace_id: string
}

interface ResourceBranchWidget {
  branch_widget_id: string
  label: string
  revision: number
}

interface ResourceActionAttempt {
  action_attempt_id: string
  action_type: 'UPDATE_NOISE_THRESHOLD'
  error: { message: string; type: string }
  result: { noise_threshold: Record<string, unknown> }
  status: 'success' | 'pending' | 'error'
}
export interface GeneratedEndpointTypes {
  '/access_codes/create': {
    parameters: {
      allow_external_modification?: boolean
      attempt_for_offline_device?: boolean
      code?: string
      common_code_key?: string
      device_id: string
      ends_at?: string
      is_external_modification_allowed?: boolean
      is_offline_access_code?: boolean
      is_one_time_use?: boolean
      max_time_rounding?: '1hour' | '1day' | '1h' | '1d'
      name?: string
      prefer_native_scheduling?: boolean
      preferred_code_length?: number
      starts_at?: string
      sync?: boolean
      use_backup_access_code_pool?: boolean
      use_offline_access_code?: boolean
    }
    result: ResourceAccessCode
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_codes/create_multiple': {
    parameters: {
      allow_external_modification?: boolean
      attempt_for_offline_device?: boolean
      behavior_when_code_cannot_be_shared?: 'throw' | 'create_random_code'
      code?: string
      device_ids: Array<string>
      ends_at?: string
      is_external_modification_allowed?: boolean
      name?: string
      prefer_native_scheduling?: boolean
      preferred_code_length?: number
      starts_at?: string
      use_backup_access_code_pool?: boolean
    }
    result: Array<ResourceAccessCode>
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_codes/delete': {
    parameters: { access_code_id: string; device_id?: string; sync?: boolean }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_codes/generate_code': {
    parameters: { device_id: string }
    result: ResourceAccessCode
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_codes/get': {
    parameters: RequireAtLeastOne<{
      access_code_id?: string
      code?: string
      device_id?: string
    }>
    result: ResourceAccessCode
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_codes/get_timeline': {
    parameters: {
      access_code_id: string
      after?: string
      before?: string
      event_types?: Array<
        | 'access_code.created'
        | 'access_code.changed'
        | 'access_code.name_changed'
        | 'access_code.code_changed'
        | 'access_code.time_frame_changed'
        | 'access_code.mutations_requested'
        | 'access_code.deleted'
        | 'access_code.modified_external_to_seam'
        | 'access_code.deleted_external_to_seam'
        | 'access_code.scheduled_on_device'
        | 'access_code.set_on_device'
        | 'access_code.removed_from_device'
        | 'access_code.delay_in_setting_on_device'
        | 'access_code.failed_to_set_on_device'
        | 'access_code.delay_in_removing_from_device'
        | 'access_code.failed_to_remove_from_device'
        | 'internal.access_code.programming_started'
        | 'internal.access_code.programming_finished'
        | 'access_code.backup_access_code_pulled'
        | 'access_code.unmanaged.created'
        | 'access_code.unmanaged.removed'
        | 'access_code.unmanaged.converted_to_managed'
        | 'access_code.unmanaged.failed_to_convert_to_managed'
      >
      limit?: number
    }
    result: Array<unknown>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_codes/list': {
    parameters: RequireAtLeastOne<{
      access_code_ids?: Array<string>
      access_grant_id?: string
      access_grant_key?: string
      access_method_id?: string
      customer_key?: string
      device_id?: string
      limit?: number
      page_cursor?: string | null
      search?: string
      user_identifier_key?: string
    }>
    result: Array<ResourceAccessCode>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_codes/pull_backup_access_code': {
    parameters: { access_code_id: string }
    result: ResourceAccessCode
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_codes/report_device_constraints': {
    parameters: {
      device_id: string
      max_code_length?: number
      min_code_length?: number
      supported_code_lengths?: Array<number>
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_codes/simulate/create_unmanaged_access_code': {
    parameters: { code: string; device_id: string; name: string }
    result: ResourceUnmanagedAccessCode
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_codes/unmanaged/convert_to_managed': {
    parameters: {
      access_code_id: string
      allow_external_modification?: boolean
      force?: boolean
      is_external_modification_allowed?: boolean
      sync?: boolean
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_codes/unmanaged/delete': {
    parameters: { access_code_id: string; sync?: boolean }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_codes/unmanaged/get': {
    parameters: RequireAtLeastOne<{
      access_code_id?: string
      code?: string
      device_id?: string
    }>
    result: ResourceUnmanagedAccessCode
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_codes/unmanaged/list': {
    parameters: {
      device_id: string
      limit?: number
      page_cursor?: string | null
      search?: string
      user_identifier_key?: string
    }
    result: Array<ResourceUnmanagedAccessCode>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_codes/unmanaged/update': {
    parameters: {
      access_code_id: string
      allow_external_modification?: boolean
      force?: boolean
      is_external_modification_allowed?: boolean
      is_managed: boolean
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_codes/update': {
    parameters: {
      access_code_id: string
      allow_external_modification?: boolean
      attempt_for_offline_device?: boolean
      code?: string
      device_id?: string
      ends_at?: string
      is_external_modification_allowed?: boolean
      is_managed?: boolean
      name?: string
      starts_at?: string
      sync?: boolean
      type?: 'ongoing' | 'time_bound'
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_codes/update_multiple': {
    parameters: {
      common_code_key: string
      ends_at?: string
      name?: string
      starts_at?: string
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_grants/create': {
    parameters: {
      user_identity_id?: string
      user_identity?: {
        email_address?: string | null
        full_name?: string | null
        phone_number?: string | null
        user_identity_key?: string | null
      }
      access_grant_key?: string
      acs_entrance_ids?: Array<string>
      customization_profile_id?: string
      device_ids?: Array<string>
      ends_at?: string | null
      location?: {
        acs_entrance_ids?: Array<string>
        device_ids?: Array<string>
        name?: string
      }
      location_ids?: Array<string>
      name?: string | null
      requested_access_methods: Array<{
        code?: string
        instant_key_max_use_count?: number
        mode?: 'code' | 'card' | 'mobile_key' | 'cloud_key'
      }>
      reservation_key?: string
      space_ids?: Array<string>
      space_keys?: Array<string>
      starts_at?: string
    }
    result: ResourceAccessGrant
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_grants/delete': {
    parameters: { access_grant_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_grants/get': {
    parameters: RequireAtLeastOne<{
      access_grant_id?: string
      access_grant_key?: string
    }>
    result: ResourceAccessGrant
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_grants/get_related': {
    parameters: RequireAtLeastOne<{
      access_grant_ids?: Array<string>
      access_grant_keys?: Array<string>
      exclude?: Array<
        | 'spaces'
        | 'devices'
        | 'acs_entrances'
        | 'connected_accounts'
        | 'acs_systems'
        | 'user_identities'
        | 'acs_access_groups'
        | 'access_methods'
      >
      include?: Array<
        | 'spaces'
        | 'devices'
        | 'acs_entrances'
        | 'connected_accounts'
        | 'acs_systems'
        | 'user_identities'
        | 'acs_access_groups'
        | 'access_methods'
      >
    }>
    result: unknown
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_grants/list': {
    parameters: {
      access_code_id?: string
      access_grant_ids?: Array<string>
      access_grant_key?: string | null
      acs_entrance_id?: string
      acs_system_id?: string
      customer_key?: string
      device_id?: string
      limit?: number
      location_id?: string
      page_cursor?: string | null
      reservation_key?: string
      space_id?: string
      user_identity_id?: string
    }
    result: Array<ResourceAccessGrant>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_grants/request_access_methods': {
    parameters: {
      access_grant_id: string
      requested_access_methods: Array<{
        code?: string
        instant_key_max_use_count?: number
        mode?: 'code' | 'card' | 'mobile_key' | 'cloud_key'
      }>
    }
    result: ResourceAccessGrant
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_grants/unmanaged/get': {
    parameters: { access_grant_id: string }
    result: ResourceUnmanagedAccessGrant
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_grants/unmanaged/list': {
    parameters: {
      acs_entrance_id?: string
      acs_system_id?: string
      limit?: number
      page_cursor?: string | null
      reservation_key?: string
      user_identity_id?: string
    }
    result: Array<ResourceUnmanagedAccessGrant>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_grants/unmanaged/update': {
    parameters: {
      access_grant_id: string
      access_grant_key?: string
      is_managed: boolean
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_grants/update': {
    parameters: RequireAtLeastOne<{
      access_grant_id?: string
      access_grant_key?: string
      ends_at?: string | null
      name?: string | null
      starts_at?: string
    }>
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_methods/assign_card': {
    parameters: { access_method_id: string; card_number: string }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/access_methods/delete': {
    parameters: RequireAtLeastOne<{
      access_method_id?: string
      access_grant_id?: string
      reservation_key?: string
    }>
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_methods/encode': {
    parameters: { access_method_id: string; acs_encoder_id: string }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/access_methods/get': {
    parameters: { access_method_id: string }
    result: ResourceAccessMethod
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_methods/get_related': {
    parameters: {
      access_method_ids: Array<string>
      exclude?: Array<
        | 'spaces'
        | 'devices'
        | 'acs_entrances'
        | 'access_grants'
        | 'access_methods'
        | 'instant_keys'
        | 'client_sessions'
        | 'acs_credentials'
      >
      include?: Array<
        | 'spaces'
        | 'devices'
        | 'acs_entrances'
        | 'access_grants'
        | 'access_methods'
        | 'instant_keys'
        | 'client_sessions'
        | 'acs_credentials'
      >
    }
    result: unknown
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_methods/list': {
    parameters: RequireAtLeastOne<{
      access_code_id?: string
      access_grant_id?: string
      access_grant_key?: string
      acs_entrance_id?: string
      device_id?: string
      limit?: number
      page_cursor?: string | null
      space_id?: string
    }>
    result: Array<ResourceAccessMethod>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_methods/unlock_door': {
    parameters: { access_method_id: string; acs_entrance_id: string }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/access_methods/unmanaged/get': {
    parameters: { access_method_id: string }
    result: ResourceUnmanagedAccessMethod
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/access_methods/unmanaged/list': {
    parameters: {
      access_grant_id: string
      acs_entrance_id?: string
      device_id?: string
      space_id?: string
    }
    result: Array<ResourceUnmanagedAccessMethod>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/access_groups/add_user': {
    parameters: {
      acs_access_group_id: string
      acs_user_id?: string
      user_identity_id?: string
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/access_groups/delete': {
    parameters: { acs_access_group_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/access_groups/get': {
    parameters: { acs_access_group_id: string }
    result: ResourceAcsAccessGroup
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/access_groups/list': {
    parameters: {
      acs_system_id?: string
      acs_user_id?: string
      search?: string
      user_identity_id?: string
    }
    result: Array<ResourceAcsAccessGroup>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/access_groups/list_accessible_entrances': {
    parameters: { acs_access_group_id: string }
    result: Array<ResourceAcsEntrance>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/access_groups/list_users': {
    parameters: { acs_access_group_id: string }
    result: Array<ResourceAcsUser>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/access_groups/remove_user': {
    parameters: {
      acs_access_group_id: string
      acs_user_id?: string
      user_identity_id?: string
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/access_groups/unmanaged/get': {
    parameters: { acs_access_group_id: string }
    result: ResourceUnmanagedAcsAccessGroup
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/access_groups/unmanaged/list': {
    parameters: {
      acs_system_id?: string
      acs_user_id?: string
      search?: string
    }
    result: Array<ResourceUnmanagedAcsAccessGroup>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/credential_pools/list': {
    parameters: { acs_system_id: string }
    result: Array<ResourceAcsCredentialPool>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/credential_provisioning_automations/launch': {
    parameters: {
      acs_credential_pool_id?: string
      create_credential_manager_user?: boolean
      credential_manager_acs_system_id: string
      credential_manager_acs_user_id?: string
      user_identity_id: string
    }
    result: ResourceAcsCredentialProvisioningAutomation
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/credentials/assign': {
    parameters: {
      acs_credential_id: string
      acs_user_id?: string
      user_identity_id?: string
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/credentials/create': {
    parameters: {
      access_method: 'code' | 'card' | 'mobile_key' | 'cloud_key'
      acs_system_id?: string
      acs_user_id?: string
      allowed_acs_entrance_ids?: Array<string>
      assa_abloy_vostio_metadata?: {
        auto_join?: boolean
        join_all_guest_acs_entrances?: boolean
        override_all_guest_acs_entrances?: boolean
        override_guest_acs_entrance_ids?: Array<string>
      }
      code?: string
      credential_manager_acs_system_id?: string
      ends_at?: string
      hotek_metadata?: { auto_join?: boolean; override?: boolean }
      is_multi_phone_sync_credential?: boolean
      salto_space_metadata?: {
        assign_new_key?: boolean
        update_current_key?: boolean
      }
      starts_at?: string
      user_identity_id?: string
      visionline_metadata?: {
        assa_abloy_credential_service_mobile_endpoint_id?: string
        auto_join?: boolean
        card_format?: 'TLCode' | 'rfid48'
        card_function_type?: 'guest' | 'staff'
        is_override_key?: boolean
        joiner_acs_credential_ids?: Array<string>
        override?: boolean
      }
    }
    result: ResourceAcsCredential
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/credentials/create_offline_code': {
    parameters: {
      acs_user_id: string
      allowed_acs_entrance_id: string
      ends_at?: string
      is_one_time_use?: boolean
      starts_at?: string
    }
    result: ResourceAcsCredential
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/credentials/delete': {
    parameters: { acs_credential_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/credentials/get': {
    parameters: { acs_credential_id: string }
    result: ResourceAcsCredential
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/credentials/list': {
    parameters: {
      acs_system_id?: string
      acs_user_id?: string
      created_before?: string
      is_multi_phone_sync_credential?: boolean
      limit?: number
      page_cursor?: string | null
      search?: string
      user_identity_id?: string
    }
    result: Array<ResourceAcsCredential>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/credentials/list_accessible_entrances': {
    parameters: { acs_credential_id: string }
    result: Array<ResourceAcsEntrance>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/credentials/unassign': {
    parameters: {
      acs_credential_id: string
      acs_user_id?: string
      user_identity_id?: string
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/credentials/unmanaged/get': {
    parameters: { acs_credential_id: string }
    result: ResourceUnmanagedAcsCredential
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/credentials/unmanaged/list': {
    parameters: {
      acs_system_id?: string
      acs_user_id?: string
      search?: string
      user_identity_id?: string
    }
    result: Array<ResourceUnmanagedAcsCredential>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/credentials/update': {
    parameters: { acs_credential_id: string; code?: string; ends_at?: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/encoders/encode_credential': {
    parameters: {
      access_method_id?: string
      acs_credential_id?: string
      acs_encoder_id: string
    }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/acs/encoders/get': {
    parameters: { acs_encoder_id: string }
    result: ResourceAcsEncoder
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/encoders/list': {
    parameters: {
      acs_encoder_ids?: Array<string>
      acs_system_id?: string
      acs_system_ids?: Array<string>
      limit?: number
      page_cursor?: string | null
    }
    result: Array<ResourceAcsEncoder>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/encoders/scan_credential': {
    parameters: {
      acs_encoder_id: string
      salto_ks_metadata?: { detect_new_tags?: boolean }
    }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/acs/encoders/scan_to_assign_credential': {
    parameters: {
      acs_encoder_id: string
      acs_user_id?: string
      salto_ks_metadata?: { detect_new_tags?: boolean }
      user_identity_id?: string
    }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/acs/encoders/simulate/next_credential_encode_will_fail': {
    parameters: {
      acs_encoder_id: string
      error_code?:
        | 'no_credential_on_encoder'
        | 'encoding_interrupted'
        | 'uncategorized_error'
        | 'action_attempt_expired'
      acs_credential_id?: string
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/encoders/simulate/next_credential_encode_will_succeed': {
    parameters: { acs_encoder_id: string; scenario?: 'credential_is_issued' }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/encoders/simulate/next_credential_scan_will_fail': {
    parameters: {
      acs_encoder_id: string
      error_code?:
        | 'no_credential_on_encoder'
        | 'uncategorized_error'
        | 'action_attempt_expired'
      acs_credential_id_on_seam?: string
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/encoders/simulate/next_credential_scan_will_succeed': {
    parameters: {
      acs_credential_id_on_seam?: string
      acs_encoder_id: string
      scenario?:
        | 'credential_exists_on_seam'
        | 'credential_on_encoder_needs_update'
        | 'credential_does_not_exist_on_seam'
        | 'credential_on_encoder_is_empty'
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/entrances/get': {
    parameters: { acs_entrance_id: string }
    result: ResourceAcsEntrance
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/entrances/grant_access': {
    parameters: {
      acs_entrance_id: string
      acs_user_id?: string
      user_identity_id?: string
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/entrances/list': {
    parameters: {
      access_method_id?: string
      acs_credential_id?: string
      acs_entrance_ids?: Array<string>
      acs_system_id?: string
      connected_account_id?: string
      customer_key?: string
      limit?: number
      location_id?: string | null
      page_cursor?: string | null
      search?: string
      space_id?: string
    }
    result: Array<ResourceAcsEntrance>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/entrances/list_credentials_with_access': {
    parameters: {
      acs_entrance_id: string
      include_if?: Array<'visionline_metadata.is_valid'>
    }
    result: Array<ResourceAcsCredential>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/entrances/unlock': {
    parameters: { acs_credential_id: string; acs_entrance_id: string }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/acs/systems/get': {
    parameters: { acs_system_id: string }
    result: ResourceAcsSystem
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/systems/list': {
    parameters: {
      connected_account_id?: string
      customer_key?: string
      search?: string
    }
    result: Array<ResourceAcsSystem>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/systems/list_compatible_credential_manager_acs_systems': {
    parameters: { acs_system_id: string }
    result: Array<ResourceAcsSystem>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/systems/report_devices': {
    parameters: {
      acs_encoders?: Array<{
        hotek_metadata?: { encoder_number?: string }
        is_removed?: boolean
      }>
      acs_entrances?: Array<{
        hotek_metadata?: {
          common_area_name?: string
          common_area_number?: string
          room_number?: string
        }
        is_removed?: boolean
      }>
      acs_system_id: string
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/users/add_to_access_group': {
    parameters: { acs_access_group_id: string; acs_user_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/users/create': {
    parameters: {
      access_schedule?: { ends_at?: string | null; starts_at?: string }
      acs_access_group_ids?: Array<string>
      acs_system_id: string
      email?: string
      email_address?: string
      full_name: string
      phone_number?: string
      user_identity_id?: string
    }
    result: ResourceAcsUser
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/users/delete': {
    parameters: RequireAtLeastOne<{
      acs_system_id?: string
      acs_user_id?: string
      user_identity_id?: string
    }>
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/users/get': {
    parameters: RequireAtLeastOne<{
      acs_system_id?: string
      acs_user_id?: string
      user_identity_id?: string
    }>
    result: ResourceAcsUser
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/users/list': {
    parameters: {
      acs_system_id?: string
      created_before?: string
      limit?: number
      page_cursor?: string | null
      search?: string
      user_identity_email_address?: string
      user_identity_id?: string
      user_identity_phone_number?: string
    }
    result: Array<ResourceAcsUser>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/users/list_accessible_entrances': {
    parameters: RequireAtLeastOne<{
      acs_system_id?: string
      acs_user_id?: string
      user_identity_id?: string
    }>
    result: Array<ResourceAcsEntrance>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/users/remove_from_access_group': {
    parameters: {
      acs_access_group_id: string
      acs_user_id?: string
      user_identity_id?: string
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/users/revoke_access_to_all_entrances': {
    parameters: RequireAtLeastOne<{
      acs_system_id?: string
      acs_user_id?: string
      user_identity_id?: string
    }>
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/users/suspend': {
    parameters: RequireAtLeastOne<{
      acs_system_id?: string
      acs_user_id?: string
      user_identity_id?: string
    }>
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/users/unmanaged/get': {
    parameters: { acs_user_id: string }
    result: ResourceUnmanagedAcsUser
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/users/unmanaged/list': {
    parameters: {
      acs_system_id?: string
      limit?: number
      search?: string
      user_identity_email_address?: string
      user_identity_id?: string
      user_identity_phone_number?: string
    }
    result: Array<ResourceUnmanagedAcsUser>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/users/unsuspend': {
    parameters: RequireAtLeastOne<{
      acs_system_id?: string
      acs_user_id?: string
      user_identity_id?: string
    }>
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/acs/users/update': {
    parameters: RequireAtLeastOne<{
      access_schedule?: { ends_at?: string; starts_at?: string } | null
      acs_system_id?: string
      acs_user_id?: string
      email?: string
      email_address?: string
      full_name?: string
      hid_acs_system_id?: string
      phone_number?: string
      user_identity_id?: string
    }>
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/action_attempts/get': {
    parameters: { action_attempt_id: string }
    result: ResourceActionAttempt
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/action_attempts/list': {
    parameters: {
      action_attempt_ids?: Array<string>
      device_id?: string
      limit?: number
      page_cursor?: string | null
    }
    result: Array<ResourceActionAttempt>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/bridges/get': {
    parameters: { bridge_id: string }
    result: unknown
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/bridges/list': {
    parameters: Record<string, never>
    result: Array<unknown>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/client_sessions/create': {
    parameters: {
      connect_webview_ids?: Array<string>
      connected_account_ids?: Array<string>
      customer_id?: string
      customer_key?: string
      expires_at?: string
      user_identifier_key?: string
      user_identity_id?: string
      user_identity_ids?: Array<string>
    }
    result: ResourceClientSession
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/client_sessions/delete': {
    parameters: { client_session_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/client_sessions/get': {
    parameters: { client_session_id?: string; user_identifier_key?: string }
    result: ResourceClientSession
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/client_sessions/get_or_create': {
    parameters: {
      connect_webview_ids?: Array<string>
      connected_account_ids?: Array<string>
      expires_at?: string
      user_identifier_key?: string
      user_identity_id?: string
      user_identity_ids?: Array<string>
    }
    result: ResourceClientSession
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/client_sessions/grant_access': {
    parameters: RequireAtLeastOne<{
      client_session_id?: string
      connect_webview_ids?: Array<string>
      connected_account_ids?: Array<string>
      user_identifier_key?: string
      user_identity_id?: string
      user_identity_ids?: Array<string>
    }>
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/client_sessions/list': {
    parameters: {
      client_session_id?: string
      connect_webview_id?: string
      user_identifier_key?: string
      user_identity_id?: string
      without_user_identifier_key?: boolean
    }
    result: Array<ResourceClientSession>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/client_sessions/revoke': {
    parameters: { client_session_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/connect_webviews/create': {
    parameters: {
      accepted_capabilities?: Array<
        'lock' | 'thermostat' | 'noise_sensor' | 'access_control' | 'camera'
      >
      accepted_providers?: Array<
        | 'hotek'
        | 'dormakaba_community'
        | 'legic_connect'
        | 'akuvox'
        | 'august'
        | 'avigilon_alta'
        | 'brivo'
        | 'butterflymx'
        | 'schlage'
        | 'smartthings'
        | 'yale'
        | 'genie'
        | 'doorking'
        | 'salto'
        | 'salto_ks'
        | 'salto_ks_accept'
        | 'lockly'
        | 'ttlock'
        | 'linear'
        | 'noiseaware'
        | 'nuki'
        | 'igloo'
        | 'kwikset'
        | 'minut'
        | 'my_2n'
        | 'controlbyweb'
        | 'nest'
        | 'igloohome'
        | 'ecobee'
        | 'four_suites'
        | 'dormakaba_oracode'
        | 'pti'
        | 'wyze'
        | 'seam_passport'
        | 'visionline'
        | 'assa_abloy_credential_service'
        | 'tedee'
        | 'honeywell_resideo'
        | 'first_alert'
        | 'latch'
        | 'akiles'
        | 'assa_abloy_vostio'
        | 'assa_abloy_vostio_credential_service'
        | 'tado'
        | 'salto_space'
        | 'sensi'
        | 'keynest'
        | 'korelock'
        | 'keyincode'
        | 'dormakaba_ambiance'
        | 'ultraloq'
        | 'yacan'
        | 'dusaw'
        | 'sifely'
        | 'thirty_three_lock'
        | 'ring'
        | 'ical'
        | 'lodgify'
        | 'hostaway'
        | 'guesty'
        | 'acuity_scheduling'
        | 'omnitec'
        | 'kisi'
        | 'aqara'
        | 'yale_access'
        | 'hid_cm'
        | 'google_nest'
        | 'slack'
      >
      automatically_manage_new_devices?: boolean
      custom_metadata?: Record<string, unknown>
      custom_redirect_failure_url?: string
      custom_redirect_url?: string
      customer_key?: string
      device_selection_mode?: 'none' | 'single' | 'multiple'
      excluded_providers?: Array<string>
      provider_category?:
        | 'stable'
        | 'consumer_smartlocks'
        | 'beta'
        | 'thermostats'
        | 'noise_sensors'
        | 'access_control_systems'
        | 'cameras'
        | 'connectors'
        | 'internal_beta'
      wait_for_device_creation?: boolean
    }
    result: ResourceConnectWebview
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/connect_webviews/delete': {
    parameters: { connect_webview_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/connect_webviews/get': {
    parameters: { connect_webview_id: string }
    result: ResourceConnectWebview
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/connect_webviews/list': {
    parameters: {
      custom_metadata_has?: Record<string, unknown>
      customer_key?: string
      limit?: number
      page_cursor?: string | null
      search?: string
      user_identifier_key?: string
    }
    result: Array<ResourceConnectWebview>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/connected_accounts/delete': {
    parameters: { connected_account_id: string; sync?: boolean }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/connected_accounts/get': {
    parameters: RequireAtLeastOne<{
      connected_account_id?: string
      email?: string
    }>
    result: ResourceConnectedAccount
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/connected_accounts/list': {
    parameters: {
      custom_metadata_has?: Record<string, unknown>
      customer_key?: string
      limit?: number
      page_cursor?: string | null
      search?: string
      space_id?: string
      user_identifier_key?: string
    }
    result: Array<ResourceConnectedAccount>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/connected_accounts/simulate/disconnect': {
    parameters: { connected_account_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/connected_accounts/sync': {
    parameters: { connected_account_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/connected_accounts/update': {
    parameters: {
      accepted_capabilities?: Array<
        'lock' | 'thermostat' | 'noise_sensor' | 'access_control' | 'camera'
      >
      automatically_manage_new_devices?: boolean
      connected_account_id: string
      custom_metadata?: Record<string, unknown>
      customer_key?: string
      display_name?: string
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/customers/create_portal': {
    parameters: {
      _dev?: boolean
      customer_resources_filters?: Array<{
        field?: string
        operation?: '='
        value?: string
      }>
      customization_profile_id?: string
      deep_link?: {
        resource_key?: string
        resource_type?: 'reservation' | 'space' | 'device'
        resource_id?: string
      }
      exclude_locale_picker?: boolean
      features?: {
        configure?: {
          allow_access_automation_rule_customization?: boolean
          allow_climate_automation_rule_customization?: boolean
          allow_instant_key_customization?: boolean
          exclude?: boolean
        }
        connect?: {
          accepted_providers?: Array<string>
          exclude?: boolean
          excluded_providers?: Array<string>
        }
        manage?: {
          device_management_confirmation?: {
            body?: string
            cancel_button_label?: string
            confirm_button_label?: string
            title?: string
          }
          events?: {
            allowed_events?: Array<string>
            default_events?: Array<string>
          }
          exclude?: boolean
          exclude_reservation_management?: boolean
          exclude_reservation_technical_details?: boolean
          exclude_staff_management?: boolean
        }
        manage_devices?: { exclude?: boolean }
        organize?: { exclude?: boolean }
      }
      is_embedded?: boolean
      landing_page?: {
        manage?: {
          space_key?: string
          property_key?: string
          room_key?: string
          common_area_key?: string
          unit_key?: string
          facility_key?: string
          building_key?: string
          listing_key?: string
          property_listing_key?: string
          site_key?: string
          reservation_key?: string
          booking_key?: string
          access_grant_key?: string
        }
      }
      locale?:
        | 'en-US'
        | 'pt-PT'
        | 'fr-FR'
        | 'it-IT'
        | 'es-ES'
        | 'de-DE'
        | 'nl-NL'
        | 'el-GR'
        | 'pl-PL'
        | 'ru-RU'
      navigation_mode?: 'full' | 'restricted'
      read_only?: boolean
      customer_data?: {
        access_grants?: Array<{
          access_grant_key?: string
          building_keys?: Array<string>
          common_area_keys?: Array<string>
          ends_at?: string
          facility_keys?: Array<string>
          guest_key?: string
          listing_keys?: Array<string>
          name?: string
          preferred_code?: string
          property_keys?: Array<string>
          resident_key?: string
          room_keys?: Array<string>
          space_keys?: Array<string>
          starts_at?: string
          tenant_key?: string
          unit_keys?: Array<string>
          user_identity_key?: string
          user_key?: string
        }>
        bookings?: Array<{
          booking_key?: string
          building_keys?: Array<string>
          common_area_keys?: Array<string>
          ends_at?: string
          facility_keys?: Array<string>
          guest_key?: string
          listing_keys?: Array<string>
          name?: string
          preferred_code?: string
          property_keys?: Array<string>
          resident_key?: string
          room_keys?: Array<string>
          space_keys?: Array<string>
          starts_at?: string
          tenant_key?: string
          unit_keys?: Array<string>
          user_identity_key?: string
          user_key?: string
        }>
        buildings?: Array<{ building_key?: string; name?: string }>
        common_areas?: Array<{
          common_area_key?: string
          name?: string
          parent_site_key?: string
        }>
        customer_key?: string
        facilities?: Array<{ facility_key?: string; name?: string }>
        guests?: Array<{
          email_address?: string
          guest_key?: string
          name?: string
          phone_number?: string
        }>
        listings?: Array<{ listing_key?: string; name?: string }>
        properties?: Array<{ name?: string; property_key?: string }>
        property_listings?: Array<{
          custom_metadata?: Record<string, unknown>
          name?: string
          property_listing_key?: string
        }>
        reservations?: Array<{
          building_keys?: Array<string>
          common_area_keys?: Array<string>
          custom_metadata?: Record<string, unknown>
          ends_at?: string
          facility_keys?: Array<string>
          guest_key?: string
          listing_keys?: Array<string>
          name?: string
          preferred_code?: string
          property_keys?: Array<string>
          reservation_key?: string
          resident_key?: string
          room_keys?: Array<string>
          space_keys?: Array<string>
          starts_at?: string
          tenant_key?: string
          unit_keys?: Array<string>
          user_identity_key?: string
          user_key?: string
        }>
        residents?: Array<{
          email_address?: string
          name?: string
          phone_number?: string
          resident_key?: string
        }>
        rooms?: Array<{
          name?: string
          parent_site_key?: string
          room_key?: string
        }>
        sites?: Array<{ name?: string; site_key?: string }>
        spaces?: Array<{
          customer_data?: {
            address?: string | null
            default_checkin_time?: string | null
            default_checkout_time?: string | null
            time_zone?: string | null
          }
          duration_minutes?: number
          geolocation?: { latitude?: number; longitude?: number }
          name?: string
          parent_site_key?: string
          space_key?: string
        }>
        staff_members?: Array<{
          building_keys?: Array<string>
          common_area_keys?: Array<string>
          email_address?: string
          facility_keys?: Array<string>
          listing_keys?: Array<string>
          name?: string
          phone_number?: string
          property_keys?: Array<string>
          property_listing_keys?: Array<string>
          room_keys?: Array<string>
          site_keys?: Array<string>
          space_keys?: Array<string>
          staff_member_key?: string
          unit_keys?: Array<string>
        }>
        tenants?: Array<{
          email_address?: string
          name?: string
          phone_number?: string
          tenant_key?: string
        }>
        units?: Array<{
          name?: string
          parent_site_key?: string
          unit_key?: string
        }>
        user_identities?: Array<{
          email_address?: string
          name?: string
          phone_number?: string
          user_identity_key?: string
        }>
        users?: Array<{
          email_address?: string
          name?: string
          phone_number?: string
          user_key?: string
        }>
      }
    }
    result: ResourceCustomerPortal
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/customers/delete_data': {
    parameters: {
      access_grant_keys?: Array<string>
      booking_keys?: Array<string>
      building_keys?: Array<string>
      common_area_keys?: Array<string>
      customer_keys?: Array<string>
      facility_keys?: Array<string>
      guest_keys?: Array<string>
      listing_keys?: Array<string>
      property_keys?: Array<string>
      property_listing_keys?: Array<string>
      reservation_keys?: Array<string>
      resident_keys?: Array<string>
      room_keys?: Array<string>
      space_keys?: Array<string>
      staff_member_keys?: Array<string>
      tenant_keys?: Array<string>
      unit_keys?: Array<string>
      user_identity_keys?: Array<string>
      user_keys?: Array<string>
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/customers/push_data': {
    parameters: {
      access_grants?: Array<{
        access_grant_key?: string
        building_keys?: Array<string>
        common_area_keys?: Array<string>
        ends_at?: string
        facility_keys?: Array<string>
        guest_key?: string
        listing_keys?: Array<string>
        name?: string
        preferred_code?: string
        property_keys?: Array<string>
        resident_key?: string
        room_keys?: Array<string>
        space_keys?: Array<string>
        starts_at?: string
        tenant_key?: string
        unit_keys?: Array<string>
        user_identity_key?: string
        user_key?: string
      }>
      bookings?: Array<{
        booking_key?: string
        building_keys?: Array<string>
        common_area_keys?: Array<string>
        ends_at?: string
        facility_keys?: Array<string>
        guest_key?: string
        listing_keys?: Array<string>
        name?: string
        preferred_code?: string
        property_keys?: Array<string>
        resident_key?: string
        room_keys?: Array<string>
        space_keys?: Array<string>
        starts_at?: string
        tenant_key?: string
        unit_keys?: Array<string>
        user_identity_key?: string
        user_key?: string
      }>
      buildings?: Array<{ building_key?: string; name?: string }>
      common_areas?: Array<{
        common_area_key?: string
        name?: string
        parent_site_key?: string
      }>
      customer_key: string
      facilities?: Array<{ facility_key?: string; name?: string }>
      guests?: Array<{
        email_address?: string
        guest_key?: string
        name?: string
        phone_number?: string
      }>
      listings?: Array<{ listing_key?: string; name?: string }>
      properties?: Array<{ name?: string; property_key?: string }>
      property_listings?: Array<{
        custom_metadata?: Record<string, unknown>
        name?: string
        property_listing_key?: string
      }>
      reservations?: Array<{
        building_keys?: Array<string>
        common_area_keys?: Array<string>
        custom_metadata?: Record<string, unknown>
        ends_at?: string
        facility_keys?: Array<string>
        guest_key?: string
        listing_keys?: Array<string>
        name?: string
        preferred_code?: string
        property_keys?: Array<string>
        reservation_key?: string
        resident_key?: string
        room_keys?: Array<string>
        space_keys?: Array<string>
        starts_at?: string
        tenant_key?: string
        unit_keys?: Array<string>
        user_identity_key?: string
        user_key?: string
      }>
      residents?: Array<{
        email_address?: string
        name?: string
        phone_number?: string
        resident_key?: string
      }>
      rooms?: Array<{
        name?: string
        parent_site_key?: string
        room_key?: string
      }>
      sites?: Array<{ name?: string; site_key?: string }>
      spaces?: Array<{
        customer_data?: {
          address?: string | null
          default_checkin_time?: string | null
          default_checkout_time?: string | null
          time_zone?: string | null
        }
        duration_minutes?: number
        geolocation?: { latitude?: number; longitude?: number }
        name?: string
        parent_site_key?: string
        space_key?: string
      }>
      staff_members?: Array<{
        building_keys?: Array<string>
        common_area_keys?: Array<string>
        email_address?: string
        facility_keys?: Array<string>
        listing_keys?: Array<string>
        name?: string
        phone_number?: string
        property_keys?: Array<string>
        property_listing_keys?: Array<string>
        room_keys?: Array<string>
        site_keys?: Array<string>
        space_keys?: Array<string>
        staff_member_key?: string
        unit_keys?: Array<string>
      }>
      tenants?: Array<{
        email_address?: string
        name?: string
        phone_number?: string
        tenant_key?: string
      }>
      units?: Array<{
        name?: string
        parent_site_key?: string
        unit_key?: string
      }>
      user_identities?: Array<{
        email_address?: string
        name?: string
        phone_number?: string
        user_identity_key?: string
      }>
      users?: Array<{
        email_address?: string
        name?: string
        phone_number?: string
        user_key?: string
      }>
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/customers/reservations/create_deep_link': {
    parameters: { customer_key: string; reservation_key: string }
    result: unknown
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/devices/delete': {
    parameters: { device_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/devices/get': {
    parameters: RequireAtLeastOne<{ device_id?: string; name?: string }>
    result: ResourceDevice
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/devices/list': {
    parameters: {
      connect_webview_id?: string
      connected_account_id?: string
      connected_account_ids?: Array<string>
      created_before?: string
      custom_metadata_has?: Record<string, unknown>
      customer_key?: string
      device_ids?: Array<string>
      device_type?:
        | 'akuvox_lock'
        | 'august_lock'
        | 'brivo_access_point'
        | 'butterflymx_panel'
        | 'avigilon_alta_entry'
        | 'doorking_lock'
        | 'genie_door'
        | 'igloo_lock'
        | 'linear_lock'
        | 'lockly_lock'
        | 'kwikset_lock'
        | 'nuki_lock'
        | 'salto_lock'
        | 'schlage_lock'
        | 'smartthings_lock'
        | 'wyze_lock'
        | 'yale_lock'
        | 'two_n_intercom'
        | 'controlbyweb_device'
        | 'ttlock_lock'
        | 'igloohome_lock'
        | 'four_suites_door'
        | 'dormakaba_oracode_door'
        | 'tedee_lock'
        | 'akiles_lock'
        | 'ultraloq_lock'
        | 'yacan_lock'
        | 'keyincode_lock'
        | 'omnitec_lock'
        | 'kisi_lock'
        | 'aqara_lock'
        | 'keynest_key'
        | 'noiseaware_activity_zone'
        | 'minut_sensor'
        | 'ecobee_thermostat'
        | 'nest_thermostat'
        | 'honeywell_resideo_thermostat'
        | 'tado_thermostat'
        | 'sensi_thermostat'
        | 'smartthings_thermostat'
        | 'ios_phone'
        | 'android_phone'
        | 'ring_camera'
      device_types?: Array<
        | 'akuvox_lock'
        | 'august_lock'
        | 'brivo_access_point'
        | 'butterflymx_panel'
        | 'avigilon_alta_entry'
        | 'doorking_lock'
        | 'genie_door'
        | 'igloo_lock'
        | 'linear_lock'
        | 'lockly_lock'
        | 'kwikset_lock'
        | 'nuki_lock'
        | 'salto_lock'
        | 'schlage_lock'
        | 'smartthings_lock'
        | 'wyze_lock'
        | 'yale_lock'
        | 'two_n_intercom'
        | 'controlbyweb_device'
        | 'ttlock_lock'
        | 'igloohome_lock'
        | 'four_suites_door'
        | 'dormakaba_oracode_door'
        | 'tedee_lock'
        | 'akiles_lock'
        | 'ultraloq_lock'
        | 'yacan_lock'
        | 'keyincode_lock'
        | 'omnitec_lock'
        | 'kisi_lock'
        | 'aqara_lock'
        | 'keynest_key'
        | 'noiseaware_activity_zone'
        | 'minut_sensor'
        | 'ecobee_thermostat'
        | 'nest_thermostat'
        | 'honeywell_resideo_thermostat'
        | 'tado_thermostat'
        | 'sensi_thermostat'
        | 'smartthings_thermostat'
        | 'ios_phone'
        | 'android_phone'
        | 'ring_camera'
      >
      exclude_if?: Array<
        | 'can_remotely_unlock'
        | 'can_remotely_lock'
        | 'can_program_offline_access_codes'
        | 'can_program_online_access_codes'
        | 'can_hvac_heat'
        | 'can_hvac_cool'
        | 'can_hvac_heat_cool'
        | 'can_turn_off_hvac'
        | 'can_simulate_removal'
        | 'can_simulate_connection'
        | 'can_simulate_disconnection'
        | 'can_unlock_with_code'
        | 'can_run_thermostat_programs'
        | 'can_program_thermostat_programs_as_weekday_weekend'
        | 'can_program_thermostat_programs_as_different_each_day'
        | 'can_program_thermostat_programs_as_same_each_day'
        | 'can_simulate_hub_connection'
        | 'can_simulate_hub_disconnection'
        | 'can_simulate_paid_subscription'
        | 'can_configure_auto_lock'
      >
      include_if?: Array<
        | 'can_remotely_unlock'
        | 'can_remotely_lock'
        | 'can_program_offline_access_codes'
        | 'can_program_online_access_codes'
        | 'can_hvac_heat'
        | 'can_hvac_cool'
        | 'can_hvac_heat_cool'
        | 'can_turn_off_hvac'
        | 'can_simulate_removal'
        | 'can_simulate_connection'
        | 'can_simulate_disconnection'
        | 'can_unlock_with_code'
        | 'can_run_thermostat_programs'
        | 'can_program_thermostat_programs_as_weekday_weekend'
        | 'can_program_thermostat_programs_as_different_each_day'
        | 'can_program_thermostat_programs_as_same_each_day'
        | 'can_simulate_hub_connection'
        | 'can_simulate_hub_disconnection'
        | 'can_simulate_paid_subscription'
        | 'can_configure_auto_lock'
      >
      limit?: number
      manufacturer?:
        | 'akuvox'
        | 'august'
        | 'avigilon_alta'
        | 'brivo'
        | 'butterflymx'
        | 'doorking'
        | 'four_suites'
        | 'genie'
        | 'igloo'
        | 'keywe'
        | 'kwikset'
        | 'linear'
        | 'lockly'
        | 'nuki'
        | 'philia'
        | 'salto'
        | 'samsung'
        | 'schlage'
        | 'seam'
        | 'unknown'
        | 'wyze'
        | 'yale'
        | 'two_n'
        | 'ttlock'
        | 'igloohome'
        | 'controlbyweb'
        | 'dormakaba_oracode'
        | 'tedee'
        | 'keyincode'
        | 'akiles'
        | 'aqara'
        | 'ecobee'
        | 'honeywell_resideo'
        | 'keynest'
        | 'korelock'
        | 'minut'
        | 'nest'
        | 'noiseaware'
        | 'sensi'
        | 'smartthings'
        | 'tado'
        | 'ultraloq'
        | 'ring'
        | 'ical'
        | 'lodgify'
        | 'hostaway'
        | 'guesty'
        | 'acuity_scheduling'
        | 'omnitec'
        | 'kisi'
        | 'slack'
        | 'yacan'
      page_cursor?: string | null
      search?: string
      space_id?: string
      unstable_location_id?: string | null
      user_identifier_key?: string
    }
    result: Array<ResourceDevice>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/devices/list_device_providers': {
    parameters: {
      provider_category?:
        | 'stable'
        | 'consumer_smartlocks'
        | 'beta'
        | 'thermostats'
        | 'noise_sensors'
        | 'access_control_systems'
        | 'cameras'
        | 'connectors'
    }
    result: Array<ResourceDeviceProvider>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/devices/report_provider_metadata': {
    parameters: {
      devices: Array<{
        device_id?: string
        omnitec_metadata?: {
          time_zone?:
            | 'Africa/Abidjan'
            | 'Africa/Accra'
            | 'Africa/Addis_Ababa'
            | 'Africa/Algiers'
            | 'Africa/Asmera'
            | 'Africa/Bamako'
            | 'Africa/Bangui'
            | 'Africa/Banjul'
            | 'Africa/Bissau'
            | 'Africa/Blantyre'
            | 'Africa/Brazzaville'
            | 'Africa/Bujumbura'
            | 'Africa/Cairo'
            | 'Africa/Casablanca'
            | 'Africa/Ceuta'
            | 'Africa/Conakry'
            | 'Africa/Dakar'
            | 'Africa/Dar_es_Salaam'
            | 'Africa/Djibouti'
            | 'Africa/Douala'
            | 'Africa/El_Aaiun'
            | 'Africa/Freetown'
            | 'Africa/Gaborone'
            | 'Africa/Harare'
            | 'Africa/Johannesburg'
            | 'Africa/Juba'
            | 'Africa/Kampala'
            | 'Africa/Khartoum'
            | 'Africa/Kigali'
            | 'Africa/Kinshasa'
            | 'Africa/Lagos'
            | 'Africa/Libreville'
            | 'Africa/Lome'
            | 'Africa/Luanda'
            | 'Africa/Lubumbashi'
            | 'Africa/Lusaka'
            | 'Africa/Malabo'
            | 'Africa/Maputo'
            | 'Africa/Maseru'
            | 'Africa/Mbabane'
            | 'Africa/Mogadishu'
            | 'Africa/Monrovia'
            | 'Africa/Nairobi'
            | 'Africa/Ndjamena'
            | 'Africa/Niamey'
            | 'Africa/Nouakchott'
            | 'Africa/Ouagadougou'
            | 'Africa/Porto-Novo'
            | 'Africa/Sao_Tome'
            | 'Africa/Tripoli'
            | 'Africa/Tunis'
            | 'Africa/Windhoek'
            | 'America/Adak'
            | 'America/Anchorage'
            | 'America/Anguilla'
            | 'America/Antigua'
            | 'America/Araguaina'
            | 'America/Argentina/La_Rioja'
            | 'America/Argentina/Rio_Gallegos'
            | 'America/Argentina/Salta'
            | 'America/Argentina/San_Juan'
            | 'America/Argentina/San_Luis'
            | 'America/Argentina/Tucuman'
            | 'America/Argentina/Ushuaia'
            | 'America/Aruba'
            | 'America/Asuncion'
            | 'America/Bahia'
            | 'America/Bahia_Banderas'
            | 'America/Barbados'
            | 'America/Belem'
            | 'America/Belize'
            | 'America/Blanc-Sablon'
            | 'America/Boa_Vista'
            | 'America/Bogota'
            | 'America/Boise'
            | 'America/Buenos_Aires'
            | 'America/Cambridge_Bay'
            | 'America/Campo_Grande'
            | 'America/Cancun'
            | 'America/Caracas'
            | 'America/Catamarca'
            | 'America/Cayenne'
            | 'America/Cayman'
            | 'America/Chicago'
            | 'America/Chihuahua'
            | 'America/Ciudad_Juarez'
            | 'America/Coral_Harbour'
            | 'America/Cordoba'
            | 'America/Costa_Rica'
            | 'America/Creston'
            | 'America/Cuiaba'
            | 'America/Curacao'
            | 'America/Danmarkshavn'
            | 'America/Dawson'
            | 'America/Dawson_Creek'
            | 'America/Denver'
            | 'America/Detroit'
            | 'America/Dominica'
            | 'America/Edmonton'
            | 'America/Eirunepe'
            | 'America/El_Salvador'
            | 'America/Fort_Nelson'
            | 'America/Fortaleza'
            | 'America/Glace_Bay'
            | 'America/Godthab'
            | 'America/Goose_Bay'
            | 'America/Grand_Turk'
            | 'America/Grenada'
            | 'America/Guadeloupe'
            | 'America/Guatemala'
            | 'America/Guayaquil'
            | 'America/Guyana'
            | 'America/Halifax'
            | 'America/Havana'
            | 'America/Hermosillo'
            | 'America/Indiana/Knox'
            | 'America/Indiana/Marengo'
            | 'America/Indiana/Petersburg'
            | 'America/Indiana/Tell_City'
            | 'America/Indiana/Vevay'
            | 'America/Indiana/Vincennes'
            | 'America/Indiana/Winamac'
            | 'America/Indianapolis'
            | 'America/Inuvik'
            | 'America/Iqaluit'
            | 'America/Jamaica'
            | 'America/Jujuy'
            | 'America/Juneau'
            | 'America/Kentucky/Monticello'
            | 'America/Kralendijk'
            | 'America/La_Paz'
            | 'America/Lima'
            | 'America/Los_Angeles'
            | 'America/Louisville'
            | 'America/Lower_Princes'
            | 'America/Maceio'
            | 'America/Managua'
            | 'America/Manaus'
            | 'America/Marigot'
            | 'America/Martinique'
            | 'America/Matamoros'
            | 'America/Mazatlan'
            | 'America/Mendoza'
            | 'America/Menominee'
            | 'America/Merida'
            | 'America/Metlakatla'
            | 'America/Mexico_City'
            | 'America/Miquelon'
            | 'America/Moncton'
            | 'America/Monterrey'
            | 'America/Montevideo'
            | 'America/Montreal'
            | 'America/Montserrat'
            | 'America/Nassau'
            | 'America/New_York'
            | 'America/Nipigon'
            | 'America/Nome'
            | 'America/Noronha'
            | 'America/North_Dakota/Beulah'
            | 'America/North_Dakota/Center'
            | 'America/North_Dakota/New_Salem'
            | 'America/Ojinaga'
            | 'America/Panama'
            | 'America/Pangnirtung'
            | 'America/Paramaribo'
            | 'America/Phoenix'
            | 'America/Port-au-Prince'
            | 'America/Port_of_Spain'
            | 'America/Porto_Velho'
            | 'America/Puerto_Rico'
            | 'America/Punta_Arenas'
            | 'America/Rainy_River'
            | 'America/Rankin_Inlet'
            | 'America/Recife'
            | 'America/Regina'
            | 'America/Resolute'
            | 'America/Rio_Branco'
            | 'America/Santa_Isabel'
            | 'America/Santarem'
            | 'America/Santiago'
            | 'America/Santo_Domingo'
            | 'America/Sao_Paulo'
            | 'America/Scoresbysund'
            | 'America/Sitka'
            | 'America/St_Barthelemy'
            | 'America/St_Johns'
            | 'America/St_Kitts'
            | 'America/St_Lucia'
            | 'America/St_Thomas'
            | 'America/St_Vincent'
            | 'America/Swift_Current'
            | 'America/Tegucigalpa'
            | 'America/Thule'
            | 'America/Thunder_Bay'
            | 'America/Tijuana'
            | 'America/Toronto'
            | 'America/Tortola'
            | 'America/Vancouver'
            | 'America/Whitehorse'
            | 'America/Winnipeg'
            | 'America/Yakutat'
            | 'America/Yellowknife'
            | 'Antarctica/Casey'
            | 'Antarctica/Davis'
            | 'Antarctica/DumontDUrville'
            | 'Antarctica/Macquarie'
            | 'Antarctica/Mawson'
            | 'Antarctica/McMurdo'
            | 'Antarctica/Palmer'
            | 'Antarctica/Rothera'
            | 'Antarctica/Syowa'
            | 'Antarctica/Troll'
            | 'Antarctica/Vostok'
            | 'Arctic/Longyearbyen'
            | 'Asia/Aden'
            | 'Asia/Almaty'
            | 'Asia/Amman'
            | 'Asia/Anadyr'
            | 'Asia/Aqtau'
            | 'Asia/Aqtobe'
            | 'Asia/Ashgabat'
            | 'Asia/Atyrau'
            | 'Asia/Baghdad'
            | 'Asia/Bahrain'
            | 'Asia/Baku'
            | 'Asia/Bangkok'
            | 'Asia/Barnaul'
            | 'Asia/Beirut'
            | 'Asia/Bishkek'
            | 'Asia/Brunei'
            | 'Asia/Calcutta'
            | 'Asia/Chita'
            | 'Asia/Choibalsan'
            | 'Asia/Colombo'
            | 'Asia/Damascus'
            | 'Asia/Dhaka'
            | 'Asia/Dili'
            | 'Asia/Dubai'
            | 'Asia/Dushanbe'
            | 'Asia/Famagusta'
            | 'Asia/Gaza'
            | 'Asia/Hebron'
            | 'Asia/Hong_Kong'
            | 'Asia/Hovd'
            | 'Asia/Irkutsk'
            | 'Asia/Jakarta'
            | 'Asia/Jayapura'
            | 'Asia/Jerusalem'
            | 'Asia/Kabul'
            | 'Asia/Kamchatka'
            | 'Asia/Karachi'
            | 'Asia/Katmandu'
            | 'Asia/Khandyga'
            | 'Asia/Krasnoyarsk'
            | 'Asia/Kuala_Lumpur'
            | 'Asia/Kuching'
            | 'Asia/Kuwait'
            | 'Asia/Macau'
            | 'Asia/Magadan'
            | 'Asia/Makassar'
            | 'Asia/Manila'
            | 'Asia/Muscat'
            | 'Asia/Nicosia'
            | 'Asia/Novokuznetsk'
            | 'Asia/Novosibirsk'
            | 'Asia/Omsk'
            | 'Asia/Oral'
            | 'Asia/Phnom_Penh'
            | 'Asia/Pontianak'
            | 'Asia/Pyongyang'
            | 'Asia/Qatar'
            | 'Asia/Qostanay'
            | 'Asia/Qyzylorda'
            | 'Asia/Rangoon'
            | 'Asia/Riyadh'
            | 'Asia/Saigon'
            | 'Asia/Sakhalin'
            | 'Asia/Samarkand'
            | 'Asia/Seoul'
            | 'Asia/Shanghai'
            | 'Asia/Singapore'
            | 'Asia/Srednekolymsk'
            | 'Asia/Taipei'
            | 'Asia/Tashkent'
            | 'Asia/Tbilisi'
            | 'Asia/Tehran'
            | 'Asia/Thimphu'
            | 'Asia/Tokyo'
            | 'Asia/Tomsk'
            | 'Asia/Ulaanbaatar'
            | 'Asia/Urumqi'
            | 'Asia/Ust-Nera'
            | 'Asia/Vientiane'
            | 'Asia/Vladivostok'
            | 'Asia/Yakutsk'
            | 'Asia/Yekaterinburg'
            | 'Asia/Yerevan'
            | 'Atlantic/Azores'
            | 'Atlantic/Bermuda'
            | 'Atlantic/Canary'
            | 'Atlantic/Cape_Verde'
            | 'Atlantic/Faeroe'
            | 'Atlantic/Madeira'
            | 'Atlantic/Reykjavik'
            | 'Atlantic/South_Georgia'
            | 'Atlantic/St_Helena'
            | 'Atlantic/Stanley'
            | 'Australia/Adelaide'
            | 'Australia/Brisbane'
            | 'Australia/Broken_Hill'
            | 'Australia/Currie'
            | 'Australia/Darwin'
            | 'Australia/Eucla'
            | 'Australia/Hobart'
            | 'Australia/Lindeman'
            | 'Australia/Lord_Howe'
            | 'Australia/Melbourne'
            | 'Australia/Perth'
            | 'Australia/Sydney'
            | 'Europe/Amsterdam'
            | 'Europe/Andorra'
            | 'Europe/Astrakhan'
            | 'Europe/Athens'
            | 'Europe/Belgrade'
            | 'Europe/Berlin'
            | 'Europe/Bratislava'
            | 'Europe/Brussels'
            | 'Europe/Bucharest'
            | 'Europe/Budapest'
            | 'Europe/Busingen'
            | 'Europe/Chisinau'
            | 'Europe/Copenhagen'
            | 'Europe/Dublin'
            | 'Europe/Gibraltar'
            | 'Europe/Guernsey'
            | 'Europe/Helsinki'
            | 'Europe/Isle_of_Man'
            | 'Europe/Istanbul'
            | 'Europe/Jersey'
            | 'Europe/Kaliningrad'
            | 'Europe/Kiev'
            | 'Europe/Kirov'
            | 'Europe/Lisbon'
            | 'Europe/Ljubljana'
            | 'Europe/London'
            | 'Europe/Luxembourg'
            | 'Europe/Madrid'
            | 'Europe/Malta'
            | 'Europe/Mariehamn'
            | 'Europe/Minsk'
            | 'Europe/Monaco'
            | 'Europe/Moscow'
            | 'Europe/Oslo'
            | 'Europe/Paris'
            | 'Europe/Podgorica'
            | 'Europe/Prague'
            | 'Europe/Riga'
            | 'Europe/Rome'
            | 'Europe/Samara'
            | 'Europe/San_Marino'
            | 'Europe/Sarajevo'
            | 'Europe/Saratov'
            | 'Europe/Simferopol'
            | 'Europe/Skopje'
            | 'Europe/Sofia'
            | 'Europe/Stockholm'
            | 'Europe/Tallinn'
            | 'Europe/Tirane'
            | 'Europe/Ulyanovsk'
            | 'Europe/Uzhgorod'
            | 'Europe/Vaduz'
            | 'Europe/Vatican'
            | 'Europe/Vienna'
            | 'Europe/Vilnius'
            | 'Europe/Volgograd'
            | 'Europe/Warsaw'
            | 'Europe/Zagreb'
            | 'Europe/Zaporozhye'
            | 'Europe/Zurich'
            | 'Indian/Antananarivo'
            | 'Indian/Chagos'
            | 'Indian/Christmas'
            | 'Indian/Cocos'
            | 'Indian/Comoro'
            | 'Indian/Kerguelen'
            | 'Indian/Mahe'
            | 'Indian/Maldives'
            | 'Indian/Mauritius'
            | 'Indian/Mayotte'
            | 'Indian/Reunion'
            | 'Pacific/Apia'
            | 'Pacific/Auckland'
            | 'Pacific/Bougainville'
            | 'Pacific/Chatham'
            | 'Pacific/Easter'
            | 'Pacific/Efate'
            | 'Pacific/Enderbury'
            | 'Pacific/Fakaofo'
            | 'Pacific/Fiji'
            | 'Pacific/Funafuti'
            | 'Pacific/Galapagos'
            | 'Pacific/Gambier'
            | 'Pacific/Guadalcanal'
            | 'Pacific/Guam'
            | 'Pacific/Honolulu'
            | 'Pacific/Johnston'
            | 'Pacific/Kiritimati'
            | 'Pacific/Kosrae'
            | 'Pacific/Kwajalein'
            | 'Pacific/Majuro'
            | 'Pacific/Marquesas'
            | 'Pacific/Midway'
            | 'Pacific/Nauru'
            | 'Pacific/Niue'
            | 'Pacific/Norfolk'
            | 'Pacific/Noumea'
            | 'Pacific/Pago_Pago'
            | 'Pacific/Palau'
            | 'Pacific/Pitcairn'
            | 'Pacific/Ponape'
            | 'Pacific/Port_Moresby'
            | 'Pacific/Rarotonga'
            | 'Pacific/Saipan'
            | 'Pacific/Tahiti'
            | 'Pacific/Tarawa'
            | 'Pacific/Tongatapu'
            | 'Pacific/Truk'
            | 'Pacific/Wake'
            | 'Pacific/Wallis'
        }
        schlage_metadata?: {
          time_zone?:
            | 'Africa/Abidjan'
            | 'Africa/Accra'
            | 'Africa/Addis_Ababa'
            | 'Africa/Algiers'
            | 'Africa/Asmera'
            | 'Africa/Bamako'
            | 'Africa/Bangui'
            | 'Africa/Banjul'
            | 'Africa/Bissau'
            | 'Africa/Blantyre'
            | 'Africa/Brazzaville'
            | 'Africa/Bujumbura'
            | 'Africa/Cairo'
            | 'Africa/Casablanca'
            | 'Africa/Ceuta'
            | 'Africa/Conakry'
            | 'Africa/Dakar'
            | 'Africa/Dar_es_Salaam'
            | 'Africa/Djibouti'
            | 'Africa/Douala'
            | 'Africa/El_Aaiun'
            | 'Africa/Freetown'
            | 'Africa/Gaborone'
            | 'Africa/Harare'
            | 'Africa/Johannesburg'
            | 'Africa/Juba'
            | 'Africa/Kampala'
            | 'Africa/Khartoum'
            | 'Africa/Kigali'
            | 'Africa/Kinshasa'
            | 'Africa/Lagos'
            | 'Africa/Libreville'
            | 'Africa/Lome'
            | 'Africa/Luanda'
            | 'Africa/Lubumbashi'
            | 'Africa/Lusaka'
            | 'Africa/Malabo'
            | 'Africa/Maputo'
            | 'Africa/Maseru'
            | 'Africa/Mbabane'
            | 'Africa/Mogadishu'
            | 'Africa/Monrovia'
            | 'Africa/Nairobi'
            | 'Africa/Ndjamena'
            | 'Africa/Niamey'
            | 'Africa/Nouakchott'
            | 'Africa/Ouagadougou'
            | 'Africa/Porto-Novo'
            | 'Africa/Sao_Tome'
            | 'Africa/Tripoli'
            | 'Africa/Tunis'
            | 'Africa/Windhoek'
            | 'America/Adak'
            | 'America/Anchorage'
            | 'America/Anguilla'
            | 'America/Antigua'
            | 'America/Araguaina'
            | 'America/Argentina/La_Rioja'
            | 'America/Argentina/Rio_Gallegos'
            | 'America/Argentina/Salta'
            | 'America/Argentina/San_Juan'
            | 'America/Argentina/San_Luis'
            | 'America/Argentina/Tucuman'
            | 'America/Argentina/Ushuaia'
            | 'America/Aruba'
            | 'America/Asuncion'
            | 'America/Bahia'
            | 'America/Bahia_Banderas'
            | 'America/Barbados'
            | 'America/Belem'
            | 'America/Belize'
            | 'America/Blanc-Sablon'
            | 'America/Boa_Vista'
            | 'America/Bogota'
            | 'America/Boise'
            | 'America/Buenos_Aires'
            | 'America/Cambridge_Bay'
            | 'America/Campo_Grande'
            | 'America/Cancun'
            | 'America/Caracas'
            | 'America/Catamarca'
            | 'America/Cayenne'
            | 'America/Cayman'
            | 'America/Chicago'
            | 'America/Chihuahua'
            | 'America/Ciudad_Juarez'
            | 'America/Coral_Harbour'
            | 'America/Cordoba'
            | 'America/Costa_Rica'
            | 'America/Creston'
            | 'America/Cuiaba'
            | 'America/Curacao'
            | 'America/Danmarkshavn'
            | 'America/Dawson'
            | 'America/Dawson_Creek'
            | 'America/Denver'
            | 'America/Detroit'
            | 'America/Dominica'
            | 'America/Edmonton'
            | 'America/Eirunepe'
            | 'America/El_Salvador'
            | 'America/Fort_Nelson'
            | 'America/Fortaleza'
            | 'America/Glace_Bay'
            | 'America/Godthab'
            | 'America/Goose_Bay'
            | 'America/Grand_Turk'
            | 'America/Grenada'
            | 'America/Guadeloupe'
            | 'America/Guatemala'
            | 'America/Guayaquil'
            | 'America/Guyana'
            | 'America/Halifax'
            | 'America/Havana'
            | 'America/Hermosillo'
            | 'America/Indiana/Knox'
            | 'America/Indiana/Marengo'
            | 'America/Indiana/Petersburg'
            | 'America/Indiana/Tell_City'
            | 'America/Indiana/Vevay'
            | 'America/Indiana/Vincennes'
            | 'America/Indiana/Winamac'
            | 'America/Indianapolis'
            | 'America/Inuvik'
            | 'America/Iqaluit'
            | 'America/Jamaica'
            | 'America/Jujuy'
            | 'America/Juneau'
            | 'America/Kentucky/Monticello'
            | 'America/Kralendijk'
            | 'America/La_Paz'
            | 'America/Lima'
            | 'America/Los_Angeles'
            | 'America/Louisville'
            | 'America/Lower_Princes'
            | 'America/Maceio'
            | 'America/Managua'
            | 'America/Manaus'
            | 'America/Marigot'
            | 'America/Martinique'
            | 'America/Matamoros'
            | 'America/Mazatlan'
            | 'America/Mendoza'
            | 'America/Menominee'
            | 'America/Merida'
            | 'America/Metlakatla'
            | 'America/Mexico_City'
            | 'America/Miquelon'
            | 'America/Moncton'
            | 'America/Monterrey'
            | 'America/Montevideo'
            | 'America/Montreal'
            | 'America/Montserrat'
            | 'America/Nassau'
            | 'America/New_York'
            | 'America/Nipigon'
            | 'America/Nome'
            | 'America/Noronha'
            | 'America/North_Dakota/Beulah'
            | 'America/North_Dakota/Center'
            | 'America/North_Dakota/New_Salem'
            | 'America/Ojinaga'
            | 'America/Panama'
            | 'America/Pangnirtung'
            | 'America/Paramaribo'
            | 'America/Phoenix'
            | 'America/Port-au-Prince'
            | 'America/Port_of_Spain'
            | 'America/Porto_Velho'
            | 'America/Puerto_Rico'
            | 'America/Punta_Arenas'
            | 'America/Rainy_River'
            | 'America/Rankin_Inlet'
            | 'America/Recife'
            | 'America/Regina'
            | 'America/Resolute'
            | 'America/Rio_Branco'
            | 'America/Santa_Isabel'
            | 'America/Santarem'
            | 'America/Santiago'
            | 'America/Santo_Domingo'
            | 'America/Sao_Paulo'
            | 'America/Scoresbysund'
            | 'America/Sitka'
            | 'America/St_Barthelemy'
            | 'America/St_Johns'
            | 'America/St_Kitts'
            | 'America/St_Lucia'
            | 'America/St_Thomas'
            | 'America/St_Vincent'
            | 'America/Swift_Current'
            | 'America/Tegucigalpa'
            | 'America/Thule'
            | 'America/Thunder_Bay'
            | 'America/Tijuana'
            | 'America/Toronto'
            | 'America/Tortola'
            | 'America/Vancouver'
            | 'America/Whitehorse'
            | 'America/Winnipeg'
            | 'America/Yakutat'
            | 'America/Yellowknife'
            | 'Antarctica/Casey'
            | 'Antarctica/Davis'
            | 'Antarctica/DumontDUrville'
            | 'Antarctica/Macquarie'
            | 'Antarctica/Mawson'
            | 'Antarctica/McMurdo'
            | 'Antarctica/Palmer'
            | 'Antarctica/Rothera'
            | 'Antarctica/Syowa'
            | 'Antarctica/Troll'
            | 'Antarctica/Vostok'
            | 'Arctic/Longyearbyen'
            | 'Asia/Aden'
            | 'Asia/Almaty'
            | 'Asia/Amman'
            | 'Asia/Anadyr'
            | 'Asia/Aqtau'
            | 'Asia/Aqtobe'
            | 'Asia/Ashgabat'
            | 'Asia/Atyrau'
            | 'Asia/Baghdad'
            | 'Asia/Bahrain'
            | 'Asia/Baku'
            | 'Asia/Bangkok'
            | 'Asia/Barnaul'
            | 'Asia/Beirut'
            | 'Asia/Bishkek'
            | 'Asia/Brunei'
            | 'Asia/Calcutta'
            | 'Asia/Chita'
            | 'Asia/Choibalsan'
            | 'Asia/Colombo'
            | 'Asia/Damascus'
            | 'Asia/Dhaka'
            | 'Asia/Dili'
            | 'Asia/Dubai'
            | 'Asia/Dushanbe'
            | 'Asia/Famagusta'
            | 'Asia/Gaza'
            | 'Asia/Hebron'
            | 'Asia/Hong_Kong'
            | 'Asia/Hovd'
            | 'Asia/Irkutsk'
            | 'Asia/Jakarta'
            | 'Asia/Jayapura'
            | 'Asia/Jerusalem'
            | 'Asia/Kabul'
            | 'Asia/Kamchatka'
            | 'Asia/Karachi'
            | 'Asia/Katmandu'
            | 'Asia/Khandyga'
            | 'Asia/Krasnoyarsk'
            | 'Asia/Kuala_Lumpur'
            | 'Asia/Kuching'
            | 'Asia/Kuwait'
            | 'Asia/Macau'
            | 'Asia/Magadan'
            | 'Asia/Makassar'
            | 'Asia/Manila'
            | 'Asia/Muscat'
            | 'Asia/Nicosia'
            | 'Asia/Novokuznetsk'
            | 'Asia/Novosibirsk'
            | 'Asia/Omsk'
            | 'Asia/Oral'
            | 'Asia/Phnom_Penh'
            | 'Asia/Pontianak'
            | 'Asia/Pyongyang'
            | 'Asia/Qatar'
            | 'Asia/Qostanay'
            | 'Asia/Qyzylorda'
            | 'Asia/Rangoon'
            | 'Asia/Riyadh'
            | 'Asia/Saigon'
            | 'Asia/Sakhalin'
            | 'Asia/Samarkand'
            | 'Asia/Seoul'
            | 'Asia/Shanghai'
            | 'Asia/Singapore'
            | 'Asia/Srednekolymsk'
            | 'Asia/Taipei'
            | 'Asia/Tashkent'
            | 'Asia/Tbilisi'
            | 'Asia/Tehran'
            | 'Asia/Thimphu'
            | 'Asia/Tokyo'
            | 'Asia/Tomsk'
            | 'Asia/Ulaanbaatar'
            | 'Asia/Urumqi'
            | 'Asia/Ust-Nera'
            | 'Asia/Vientiane'
            | 'Asia/Vladivostok'
            | 'Asia/Yakutsk'
            | 'Asia/Yekaterinburg'
            | 'Asia/Yerevan'
            | 'Atlantic/Azores'
            | 'Atlantic/Bermuda'
            | 'Atlantic/Canary'
            | 'Atlantic/Cape_Verde'
            | 'Atlantic/Faeroe'
            | 'Atlantic/Madeira'
            | 'Atlantic/Reykjavik'
            | 'Atlantic/South_Georgia'
            | 'Atlantic/St_Helena'
            | 'Atlantic/Stanley'
            | 'Australia/Adelaide'
            | 'Australia/Brisbane'
            | 'Australia/Broken_Hill'
            | 'Australia/Currie'
            | 'Australia/Darwin'
            | 'Australia/Eucla'
            | 'Australia/Hobart'
            | 'Australia/Lindeman'
            | 'Australia/Lord_Howe'
            | 'Australia/Melbourne'
            | 'Australia/Perth'
            | 'Australia/Sydney'
            | 'Europe/Amsterdam'
            | 'Europe/Andorra'
            | 'Europe/Astrakhan'
            | 'Europe/Athens'
            | 'Europe/Belgrade'
            | 'Europe/Berlin'
            | 'Europe/Bratislava'
            | 'Europe/Brussels'
            | 'Europe/Bucharest'
            | 'Europe/Budapest'
            | 'Europe/Busingen'
            | 'Europe/Chisinau'
            | 'Europe/Copenhagen'
            | 'Europe/Dublin'
            | 'Europe/Gibraltar'
            | 'Europe/Guernsey'
            | 'Europe/Helsinki'
            | 'Europe/Isle_of_Man'
            | 'Europe/Istanbul'
            | 'Europe/Jersey'
            | 'Europe/Kaliningrad'
            | 'Europe/Kiev'
            | 'Europe/Kirov'
            | 'Europe/Lisbon'
            | 'Europe/Ljubljana'
            | 'Europe/London'
            | 'Europe/Luxembourg'
            | 'Europe/Madrid'
            | 'Europe/Malta'
            | 'Europe/Mariehamn'
            | 'Europe/Minsk'
            | 'Europe/Monaco'
            | 'Europe/Moscow'
            | 'Europe/Oslo'
            | 'Europe/Paris'
            | 'Europe/Podgorica'
            | 'Europe/Prague'
            | 'Europe/Riga'
            | 'Europe/Rome'
            | 'Europe/Samara'
            | 'Europe/San_Marino'
            | 'Europe/Sarajevo'
            | 'Europe/Saratov'
            | 'Europe/Simferopol'
            | 'Europe/Skopje'
            | 'Europe/Sofia'
            | 'Europe/Stockholm'
            | 'Europe/Tallinn'
            | 'Europe/Tirane'
            | 'Europe/Ulyanovsk'
            | 'Europe/Uzhgorod'
            | 'Europe/Vaduz'
            | 'Europe/Vatican'
            | 'Europe/Vienna'
            | 'Europe/Vilnius'
            | 'Europe/Volgograd'
            | 'Europe/Warsaw'
            | 'Europe/Zagreb'
            | 'Europe/Zaporozhye'
            | 'Europe/Zurich'
            | 'Indian/Antananarivo'
            | 'Indian/Chagos'
            | 'Indian/Christmas'
            | 'Indian/Cocos'
            | 'Indian/Comoro'
            | 'Indian/Kerguelen'
            | 'Indian/Mahe'
            | 'Indian/Maldives'
            | 'Indian/Mauritius'
            | 'Indian/Mayotte'
            | 'Indian/Reunion'
            | 'Pacific/Apia'
            | 'Pacific/Auckland'
            | 'Pacific/Bougainville'
            | 'Pacific/Chatham'
            | 'Pacific/Easter'
            | 'Pacific/Efate'
            | 'Pacific/Enderbury'
            | 'Pacific/Fakaofo'
            | 'Pacific/Fiji'
            | 'Pacific/Funafuti'
            | 'Pacific/Galapagos'
            | 'Pacific/Gambier'
            | 'Pacific/Guadalcanal'
            | 'Pacific/Guam'
            | 'Pacific/Honolulu'
            | 'Pacific/Johnston'
            | 'Pacific/Kiritimati'
            | 'Pacific/Kosrae'
            | 'Pacific/Kwajalein'
            | 'Pacific/Majuro'
            | 'Pacific/Marquesas'
            | 'Pacific/Midway'
            | 'Pacific/Nauru'
            | 'Pacific/Niue'
            | 'Pacific/Norfolk'
            | 'Pacific/Noumea'
            | 'Pacific/Pago_Pago'
            | 'Pacific/Palau'
            | 'Pacific/Pitcairn'
            | 'Pacific/Ponape'
            | 'Pacific/Port_Moresby'
            | 'Pacific/Rarotonga'
            | 'Pacific/Saipan'
            | 'Pacific/Tahiti'
            | 'Pacific/Tarawa'
            | 'Pacific/Tongatapu'
            | 'Pacific/Truk'
            | 'Pacific/Wake'
            | 'Pacific/Wallis'
        }
        ultraloq_metadata?: {
          time_zone?:
            | 'Africa/Abidjan'
            | 'Africa/Accra'
            | 'Africa/Addis_Ababa'
            | 'Africa/Algiers'
            | 'Africa/Asmera'
            | 'Africa/Bamako'
            | 'Africa/Bangui'
            | 'Africa/Banjul'
            | 'Africa/Bissau'
            | 'Africa/Blantyre'
            | 'Africa/Brazzaville'
            | 'Africa/Bujumbura'
            | 'Africa/Cairo'
            | 'Africa/Casablanca'
            | 'Africa/Ceuta'
            | 'Africa/Conakry'
            | 'Africa/Dakar'
            | 'Africa/Dar_es_Salaam'
            | 'Africa/Djibouti'
            | 'Africa/Douala'
            | 'Africa/El_Aaiun'
            | 'Africa/Freetown'
            | 'Africa/Gaborone'
            | 'Africa/Harare'
            | 'Africa/Johannesburg'
            | 'Africa/Juba'
            | 'Africa/Kampala'
            | 'Africa/Khartoum'
            | 'Africa/Kigali'
            | 'Africa/Kinshasa'
            | 'Africa/Lagos'
            | 'Africa/Libreville'
            | 'Africa/Lome'
            | 'Africa/Luanda'
            | 'Africa/Lubumbashi'
            | 'Africa/Lusaka'
            | 'Africa/Malabo'
            | 'Africa/Maputo'
            | 'Africa/Maseru'
            | 'Africa/Mbabane'
            | 'Africa/Mogadishu'
            | 'Africa/Monrovia'
            | 'Africa/Nairobi'
            | 'Africa/Ndjamena'
            | 'Africa/Niamey'
            | 'Africa/Nouakchott'
            | 'Africa/Ouagadougou'
            | 'Africa/Porto-Novo'
            | 'Africa/Sao_Tome'
            | 'Africa/Tripoli'
            | 'Africa/Tunis'
            | 'Africa/Windhoek'
            | 'America/Adak'
            | 'America/Anchorage'
            | 'America/Anguilla'
            | 'America/Antigua'
            | 'America/Araguaina'
            | 'America/Argentina/La_Rioja'
            | 'America/Argentina/Rio_Gallegos'
            | 'America/Argentina/Salta'
            | 'America/Argentina/San_Juan'
            | 'America/Argentina/San_Luis'
            | 'America/Argentina/Tucuman'
            | 'America/Argentina/Ushuaia'
            | 'America/Aruba'
            | 'America/Asuncion'
            | 'America/Bahia'
            | 'America/Bahia_Banderas'
            | 'America/Barbados'
            | 'America/Belem'
            | 'America/Belize'
            | 'America/Blanc-Sablon'
            | 'America/Boa_Vista'
            | 'America/Bogota'
            | 'America/Boise'
            | 'America/Buenos_Aires'
            | 'America/Cambridge_Bay'
            | 'America/Campo_Grande'
            | 'America/Cancun'
            | 'America/Caracas'
            | 'America/Catamarca'
            | 'America/Cayenne'
            | 'America/Cayman'
            | 'America/Chicago'
            | 'America/Chihuahua'
            | 'America/Ciudad_Juarez'
            | 'America/Coral_Harbour'
            | 'America/Cordoba'
            | 'America/Costa_Rica'
            | 'America/Creston'
            | 'America/Cuiaba'
            | 'America/Curacao'
            | 'America/Danmarkshavn'
            | 'America/Dawson'
            | 'America/Dawson_Creek'
            | 'America/Denver'
            | 'America/Detroit'
            | 'America/Dominica'
            | 'America/Edmonton'
            | 'America/Eirunepe'
            | 'America/El_Salvador'
            | 'America/Fort_Nelson'
            | 'America/Fortaleza'
            | 'America/Glace_Bay'
            | 'America/Godthab'
            | 'America/Goose_Bay'
            | 'America/Grand_Turk'
            | 'America/Grenada'
            | 'America/Guadeloupe'
            | 'America/Guatemala'
            | 'America/Guayaquil'
            | 'America/Guyana'
            | 'America/Halifax'
            | 'America/Havana'
            | 'America/Hermosillo'
            | 'America/Indiana/Knox'
            | 'America/Indiana/Marengo'
            | 'America/Indiana/Petersburg'
            | 'America/Indiana/Tell_City'
            | 'America/Indiana/Vevay'
            | 'America/Indiana/Vincennes'
            | 'America/Indiana/Winamac'
            | 'America/Indianapolis'
            | 'America/Inuvik'
            | 'America/Iqaluit'
            | 'America/Jamaica'
            | 'America/Jujuy'
            | 'America/Juneau'
            | 'America/Kentucky/Monticello'
            | 'America/Kralendijk'
            | 'America/La_Paz'
            | 'America/Lima'
            | 'America/Los_Angeles'
            | 'America/Louisville'
            | 'America/Lower_Princes'
            | 'America/Maceio'
            | 'America/Managua'
            | 'America/Manaus'
            | 'America/Marigot'
            | 'America/Martinique'
            | 'America/Matamoros'
            | 'America/Mazatlan'
            | 'America/Mendoza'
            | 'America/Menominee'
            | 'America/Merida'
            | 'America/Metlakatla'
            | 'America/Mexico_City'
            | 'America/Miquelon'
            | 'America/Moncton'
            | 'America/Monterrey'
            | 'America/Montevideo'
            | 'America/Montreal'
            | 'America/Montserrat'
            | 'America/Nassau'
            | 'America/New_York'
            | 'America/Nipigon'
            | 'America/Nome'
            | 'America/Noronha'
            | 'America/North_Dakota/Beulah'
            | 'America/North_Dakota/Center'
            | 'America/North_Dakota/New_Salem'
            | 'America/Ojinaga'
            | 'America/Panama'
            | 'America/Pangnirtung'
            | 'America/Paramaribo'
            | 'America/Phoenix'
            | 'America/Port-au-Prince'
            | 'America/Port_of_Spain'
            | 'America/Porto_Velho'
            | 'America/Puerto_Rico'
            | 'America/Punta_Arenas'
            | 'America/Rainy_River'
            | 'America/Rankin_Inlet'
            | 'America/Recife'
            | 'America/Regina'
            | 'America/Resolute'
            | 'America/Rio_Branco'
            | 'America/Santa_Isabel'
            | 'America/Santarem'
            | 'America/Santiago'
            | 'America/Santo_Domingo'
            | 'America/Sao_Paulo'
            | 'America/Scoresbysund'
            | 'America/Sitka'
            | 'America/St_Barthelemy'
            | 'America/St_Johns'
            | 'America/St_Kitts'
            | 'America/St_Lucia'
            | 'America/St_Thomas'
            | 'America/St_Vincent'
            | 'America/Swift_Current'
            | 'America/Tegucigalpa'
            | 'America/Thule'
            | 'America/Thunder_Bay'
            | 'America/Tijuana'
            | 'America/Toronto'
            | 'America/Tortola'
            | 'America/Vancouver'
            | 'America/Whitehorse'
            | 'America/Winnipeg'
            | 'America/Yakutat'
            | 'America/Yellowknife'
            | 'Antarctica/Casey'
            | 'Antarctica/Davis'
            | 'Antarctica/DumontDUrville'
            | 'Antarctica/Macquarie'
            | 'Antarctica/Mawson'
            | 'Antarctica/McMurdo'
            | 'Antarctica/Palmer'
            | 'Antarctica/Rothera'
            | 'Antarctica/Syowa'
            | 'Antarctica/Troll'
            | 'Antarctica/Vostok'
            | 'Arctic/Longyearbyen'
            | 'Asia/Aden'
            | 'Asia/Almaty'
            | 'Asia/Amman'
            | 'Asia/Anadyr'
            | 'Asia/Aqtau'
            | 'Asia/Aqtobe'
            | 'Asia/Ashgabat'
            | 'Asia/Atyrau'
            | 'Asia/Baghdad'
            | 'Asia/Bahrain'
            | 'Asia/Baku'
            | 'Asia/Bangkok'
            | 'Asia/Barnaul'
            | 'Asia/Beirut'
            | 'Asia/Bishkek'
            | 'Asia/Brunei'
            | 'Asia/Calcutta'
            | 'Asia/Chita'
            | 'Asia/Choibalsan'
            | 'Asia/Colombo'
            | 'Asia/Damascus'
            | 'Asia/Dhaka'
            | 'Asia/Dili'
            | 'Asia/Dubai'
            | 'Asia/Dushanbe'
            | 'Asia/Famagusta'
            | 'Asia/Gaza'
            | 'Asia/Hebron'
            | 'Asia/Hong_Kong'
            | 'Asia/Hovd'
            | 'Asia/Irkutsk'
            | 'Asia/Jakarta'
            | 'Asia/Jayapura'
            | 'Asia/Jerusalem'
            | 'Asia/Kabul'
            | 'Asia/Kamchatka'
            | 'Asia/Karachi'
            | 'Asia/Katmandu'
            | 'Asia/Khandyga'
            | 'Asia/Krasnoyarsk'
            | 'Asia/Kuala_Lumpur'
            | 'Asia/Kuching'
            | 'Asia/Kuwait'
            | 'Asia/Macau'
            | 'Asia/Magadan'
            | 'Asia/Makassar'
            | 'Asia/Manila'
            | 'Asia/Muscat'
            | 'Asia/Nicosia'
            | 'Asia/Novokuznetsk'
            | 'Asia/Novosibirsk'
            | 'Asia/Omsk'
            | 'Asia/Oral'
            | 'Asia/Phnom_Penh'
            | 'Asia/Pontianak'
            | 'Asia/Pyongyang'
            | 'Asia/Qatar'
            | 'Asia/Qostanay'
            | 'Asia/Qyzylorda'
            | 'Asia/Rangoon'
            | 'Asia/Riyadh'
            | 'Asia/Saigon'
            | 'Asia/Sakhalin'
            | 'Asia/Samarkand'
            | 'Asia/Seoul'
            | 'Asia/Shanghai'
            | 'Asia/Singapore'
            | 'Asia/Srednekolymsk'
            | 'Asia/Taipei'
            | 'Asia/Tashkent'
            | 'Asia/Tbilisi'
            | 'Asia/Tehran'
            | 'Asia/Thimphu'
            | 'Asia/Tokyo'
            | 'Asia/Tomsk'
            | 'Asia/Ulaanbaatar'
            | 'Asia/Urumqi'
            | 'Asia/Ust-Nera'
            | 'Asia/Vientiane'
            | 'Asia/Vladivostok'
            | 'Asia/Yakutsk'
            | 'Asia/Yekaterinburg'
            | 'Asia/Yerevan'
            | 'Atlantic/Azores'
            | 'Atlantic/Bermuda'
            | 'Atlantic/Canary'
            | 'Atlantic/Cape_Verde'
            | 'Atlantic/Faeroe'
            | 'Atlantic/Madeira'
            | 'Atlantic/Reykjavik'
            | 'Atlantic/South_Georgia'
            | 'Atlantic/St_Helena'
            | 'Atlantic/Stanley'
            | 'Australia/Adelaide'
            | 'Australia/Brisbane'
            | 'Australia/Broken_Hill'
            | 'Australia/Currie'
            | 'Australia/Darwin'
            | 'Australia/Eucla'
            | 'Australia/Hobart'
            | 'Australia/Lindeman'
            | 'Australia/Lord_Howe'
            | 'Australia/Melbourne'
            | 'Australia/Perth'
            | 'Australia/Sydney'
            | 'Europe/Amsterdam'
            | 'Europe/Andorra'
            | 'Europe/Astrakhan'
            | 'Europe/Athens'
            | 'Europe/Belgrade'
            | 'Europe/Berlin'
            | 'Europe/Bratislava'
            | 'Europe/Brussels'
            | 'Europe/Bucharest'
            | 'Europe/Budapest'
            | 'Europe/Busingen'
            | 'Europe/Chisinau'
            | 'Europe/Copenhagen'
            | 'Europe/Dublin'
            | 'Europe/Gibraltar'
            | 'Europe/Guernsey'
            | 'Europe/Helsinki'
            | 'Europe/Isle_of_Man'
            | 'Europe/Istanbul'
            | 'Europe/Jersey'
            | 'Europe/Kaliningrad'
            | 'Europe/Kiev'
            | 'Europe/Kirov'
            | 'Europe/Lisbon'
            | 'Europe/Ljubljana'
            | 'Europe/London'
            | 'Europe/Luxembourg'
            | 'Europe/Madrid'
            | 'Europe/Malta'
            | 'Europe/Mariehamn'
            | 'Europe/Minsk'
            | 'Europe/Monaco'
            | 'Europe/Moscow'
            | 'Europe/Oslo'
            | 'Europe/Paris'
            | 'Europe/Podgorica'
            | 'Europe/Prague'
            | 'Europe/Riga'
            | 'Europe/Rome'
            | 'Europe/Samara'
            | 'Europe/San_Marino'
            | 'Europe/Sarajevo'
            | 'Europe/Saratov'
            | 'Europe/Simferopol'
            | 'Europe/Skopje'
            | 'Europe/Sofia'
            | 'Europe/Stockholm'
            | 'Europe/Tallinn'
            | 'Europe/Tirane'
            | 'Europe/Ulyanovsk'
            | 'Europe/Uzhgorod'
            | 'Europe/Vaduz'
            | 'Europe/Vatican'
            | 'Europe/Vienna'
            | 'Europe/Vilnius'
            | 'Europe/Volgograd'
            | 'Europe/Warsaw'
            | 'Europe/Zagreb'
            | 'Europe/Zaporozhye'
            | 'Europe/Zurich'
            | 'Indian/Antananarivo'
            | 'Indian/Chagos'
            | 'Indian/Christmas'
            | 'Indian/Cocos'
            | 'Indian/Comoro'
            | 'Indian/Kerguelen'
            | 'Indian/Mahe'
            | 'Indian/Maldives'
            | 'Indian/Mauritius'
            | 'Indian/Mayotte'
            | 'Indian/Reunion'
            | 'Pacific/Apia'
            | 'Pacific/Auckland'
            | 'Pacific/Bougainville'
            | 'Pacific/Chatham'
            | 'Pacific/Easter'
            | 'Pacific/Efate'
            | 'Pacific/Enderbury'
            | 'Pacific/Fakaofo'
            | 'Pacific/Fiji'
            | 'Pacific/Funafuti'
            | 'Pacific/Galapagos'
            | 'Pacific/Gambier'
            | 'Pacific/Guadalcanal'
            | 'Pacific/Guam'
            | 'Pacific/Honolulu'
            | 'Pacific/Johnston'
            | 'Pacific/Kiritimati'
            | 'Pacific/Kosrae'
            | 'Pacific/Kwajalein'
            | 'Pacific/Majuro'
            | 'Pacific/Marquesas'
            | 'Pacific/Midway'
            | 'Pacific/Nauru'
            | 'Pacific/Niue'
            | 'Pacific/Norfolk'
            | 'Pacific/Noumea'
            | 'Pacific/Pago_Pago'
            | 'Pacific/Palau'
            | 'Pacific/Pitcairn'
            | 'Pacific/Ponape'
            | 'Pacific/Port_Moresby'
            | 'Pacific/Rarotonga'
            | 'Pacific/Saipan'
            | 'Pacific/Tahiti'
            | 'Pacific/Tarawa'
            | 'Pacific/Tongatapu'
            | 'Pacific/Truk'
            | 'Pacific/Wake'
            | 'Pacific/Wallis'
        }
      }>
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/devices/simulate/connect': {
    parameters: { device_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/devices/simulate/connect_to_hub': {
    parameters: { device_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/devices/simulate/disconnect': {
    parameters: { device_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/devices/simulate/disconnect_from_hub': {
    parameters: { device_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/devices/simulate/paid_subscription': {
    parameters: { device_id: string; is_expired: boolean }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/devices/simulate/remove': {
    parameters: { device_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/devices/unmanaged/get': {
    parameters: RequireAtLeastOne<{ device_id?: string; name?: string }>
    result: ResourceUnmanagedDevice
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/devices/unmanaged/list': {
    parameters: {
      connect_webview_id?: string
      connected_account_id?: string
      connected_account_ids?: Array<string>
      created_before?: string
      customer_key?: string
      device_ids?: Array<string>
      device_type?:
        | 'akuvox_lock'
        | 'august_lock'
        | 'brivo_access_point'
        | 'butterflymx_panel'
        | 'avigilon_alta_entry'
        | 'doorking_lock'
        | 'genie_door'
        | 'igloo_lock'
        | 'linear_lock'
        | 'lockly_lock'
        | 'kwikset_lock'
        | 'nuki_lock'
        | 'salto_lock'
        | 'schlage_lock'
        | 'smartthings_lock'
        | 'wyze_lock'
        | 'yale_lock'
        | 'two_n_intercom'
        | 'controlbyweb_device'
        | 'ttlock_lock'
        | 'igloohome_lock'
        | 'four_suites_door'
        | 'dormakaba_oracode_door'
        | 'tedee_lock'
        | 'akiles_lock'
        | 'ultraloq_lock'
        | 'yacan_lock'
        | 'keyincode_lock'
        | 'omnitec_lock'
        | 'kisi_lock'
        | 'aqara_lock'
        | 'keynest_key'
        | 'noiseaware_activity_zone'
        | 'minut_sensor'
        | 'ecobee_thermostat'
        | 'nest_thermostat'
        | 'honeywell_resideo_thermostat'
        | 'tado_thermostat'
        | 'sensi_thermostat'
        | 'smartthings_thermostat'
        | 'ios_phone'
        | 'android_phone'
        | 'ring_camera'
      device_types?: Array<
        | 'akuvox_lock'
        | 'august_lock'
        | 'brivo_access_point'
        | 'butterflymx_panel'
        | 'avigilon_alta_entry'
        | 'doorking_lock'
        | 'genie_door'
        | 'igloo_lock'
        | 'linear_lock'
        | 'lockly_lock'
        | 'kwikset_lock'
        | 'nuki_lock'
        | 'salto_lock'
        | 'schlage_lock'
        | 'smartthings_lock'
        | 'wyze_lock'
        | 'yale_lock'
        | 'two_n_intercom'
        | 'controlbyweb_device'
        | 'ttlock_lock'
        | 'igloohome_lock'
        | 'four_suites_door'
        | 'dormakaba_oracode_door'
        | 'tedee_lock'
        | 'akiles_lock'
        | 'ultraloq_lock'
        | 'yacan_lock'
        | 'keyincode_lock'
        | 'omnitec_lock'
        | 'kisi_lock'
        | 'aqara_lock'
        | 'keynest_key'
        | 'noiseaware_activity_zone'
        | 'minut_sensor'
        | 'ecobee_thermostat'
        | 'nest_thermostat'
        | 'honeywell_resideo_thermostat'
        | 'tado_thermostat'
        | 'sensi_thermostat'
        | 'smartthings_thermostat'
        | 'ios_phone'
        | 'android_phone'
        | 'ring_camera'
      >
      exclude_if?: Array<
        | 'can_remotely_unlock'
        | 'can_remotely_lock'
        | 'can_program_offline_access_codes'
        | 'can_program_online_access_codes'
        | 'can_hvac_heat'
        | 'can_hvac_cool'
        | 'can_hvac_heat_cool'
        | 'can_turn_off_hvac'
        | 'can_simulate_removal'
        | 'can_simulate_connection'
        | 'can_simulate_disconnection'
        | 'can_unlock_with_code'
        | 'can_run_thermostat_programs'
        | 'can_program_thermostat_programs_as_weekday_weekend'
        | 'can_program_thermostat_programs_as_different_each_day'
        | 'can_program_thermostat_programs_as_same_each_day'
        | 'can_simulate_hub_connection'
        | 'can_simulate_hub_disconnection'
        | 'can_simulate_paid_subscription'
        | 'can_configure_auto_lock'
      >
      include_if?: Array<
        | 'can_remotely_unlock'
        | 'can_remotely_lock'
        | 'can_program_offline_access_codes'
        | 'can_program_online_access_codes'
        | 'can_hvac_heat'
        | 'can_hvac_cool'
        | 'can_hvac_heat_cool'
        | 'can_turn_off_hvac'
        | 'can_simulate_removal'
        | 'can_simulate_connection'
        | 'can_simulate_disconnection'
        | 'can_unlock_with_code'
        | 'can_run_thermostat_programs'
        | 'can_program_thermostat_programs_as_weekday_weekend'
        | 'can_program_thermostat_programs_as_different_each_day'
        | 'can_program_thermostat_programs_as_same_each_day'
        | 'can_simulate_hub_connection'
        | 'can_simulate_hub_disconnection'
        | 'can_simulate_paid_subscription'
        | 'can_configure_auto_lock'
      >
      limit?: number
      manufacturer?:
        | 'akuvox'
        | 'august'
        | 'avigilon_alta'
        | 'brivo'
        | 'butterflymx'
        | 'doorking'
        | 'four_suites'
        | 'genie'
        | 'igloo'
        | 'keywe'
        | 'kwikset'
        | 'linear'
        | 'lockly'
        | 'nuki'
        | 'philia'
        | 'salto'
        | 'samsung'
        | 'schlage'
        | 'seam'
        | 'unknown'
        | 'wyze'
        | 'yale'
        | 'two_n'
        | 'ttlock'
        | 'igloohome'
        | 'controlbyweb'
        | 'dormakaba_oracode'
        | 'tedee'
        | 'keyincode'
        | 'akiles'
        | 'aqara'
        | 'ecobee'
        | 'honeywell_resideo'
        | 'keynest'
        | 'korelock'
        | 'minut'
        | 'nest'
        | 'noiseaware'
        | 'sensi'
        | 'smartthings'
        | 'tado'
        | 'ultraloq'
        | 'ring'
        | 'ical'
        | 'lodgify'
        | 'hostaway'
        | 'guesty'
        | 'acuity_scheduling'
        | 'omnitec'
        | 'kisi'
        | 'slack'
        | 'yacan'
      page_cursor?: string | null
      search?: string
    }
    result: Array<ResourceUnmanagedDevice>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/devices/unmanaged/update': {
    parameters: {
      custom_metadata?: Record<string, unknown>
      device_id: string
      is_managed?: boolean
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/devices/update': {
    parameters: {
      backup_access_code_pool_enabled?: boolean
      custom_metadata?: Record<string, unknown>
      device_id: string
      is_managed?: boolean
      name?: string | null
      properties?: { name?: string | null }
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/events/get': {
    parameters: RequireAtLeastOne<{
      device_id?: string
      event_id?: string
      event_type?: string
    }>
    result: ResourceEvent
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/events/list': {
    parameters: RequireAtLeastOne<{
      access_code_id?: string
      access_code_ids?: Array<string>
      access_grant_id?: string
      access_grant_ids?: Array<string>
      access_method_id?: string
      access_method_ids?: Array<string>
      acs_access_group_id?: string
      acs_credential_id?: string
      acs_encoder_id?: string
      acs_entrance_id?: string
      acs_system_id?: string
      acs_system_ids?: Array<string>
      acs_user_id?: string
      between?: Array<string>
      connect_webview_id?: string
      connected_account_id?: string
      customer_key?: string
      device_id?: string
      device_ids?: Array<string>
      event_ids?: Array<string>
      event_type?:
        | 'access_code.created'
        | 'access_code.changed'
        | 'access_code.name_changed'
        | 'access_code.code_changed'
        | 'access_code.time_frame_changed'
        | 'access_code.mutations_requested'
        | 'access_code.scheduled_on_device'
        | 'access_code.set_on_device'
        | 'access_code.removed_from_device'
        | 'access_code.delay_in_setting_on_device'
        | 'access_code.failed_to_set_on_device'
        | 'access_code.deleted'
        | 'access_code.delay_in_removing_from_device'
        | 'access_code.failed_to_remove_from_device'
        | 'access_code.modified_external_to_seam'
        | 'access_code.deleted_external_to_seam'
        | 'access_code.backup_access_code_pulled'
        | 'access_code.unmanaged.converted_to_managed'
        | 'access_code.unmanaged.failed_to_convert_to_managed'
        | 'access_code.unmanaged.created'
        | 'access_code.unmanaged.removed'
        | 'access_grant.created'
        | 'access_grant.deleted'
        | 'access_grant.access_granted_to_all_doors'
        | 'access_grant.access_granted_to_door'
        | 'access_grant.access_to_door_lost'
        | 'access_grant.access_times_changed'
        | 'access_grant.could_not_create_requested_access_methods'
        | 'access_method.issued'
        | 'access_method.revoked'
        | 'access_method.card_encoding_required'
        | 'access_method.deleted'
        | 'access_method.reissued'
        | 'access_method.created'
        | 'access_method.delay_in_issuing'
        | 'access_method.failed_to_issue'
        | 'acs_system.connected'
        | 'acs_system.added'
        | 'acs_system.disconnected'
        | 'acs_credential.deleted'
        | 'acs_credential.issued'
        | 'acs_credential.reissued'
        | 'acs_credential.invalidated'
        | 'acs_user.created'
        | 'acs_user.deleted'
        | 'acs_encoder.added'
        | 'acs_encoder.removed'
        | 'acs_access_group.deleted'
        | 'acs_entrance.added'
        | 'acs_entrance.removed'
        | 'client_session.deleted'
        | 'connected_account.connected'
        | 'connected_account.created'
        | 'connected_account.successful_login'
        | 'connected_account.disconnected'
        | 'connected_account.completed_first_sync'
        | 'connected_account.deleted'
        | 'connected_account.completed_first_sync_after_reconnection'
        | 'connected_account.reauthorization_requested'
        | 'action_attempt.lock_door.succeeded'
        | 'action_attempt.lock_door.failed'
        | 'action_attempt.unlock_door.succeeded'
        | 'action_attempt.unlock_door.failed'
        | 'action_attempt.simulate_keypad_code_entry.succeeded'
        | 'action_attempt.simulate_keypad_code_entry.failed'
        | 'action_attempt.simulate_manual_lock_via_keypad.succeeded'
        | 'action_attempt.simulate_manual_lock_via_keypad.failed'
        | 'connect_webview.login_succeeded'
        | 'connect_webview.login_failed'
        | 'device.connected'
        | 'device.added'
        | 'device.converted_to_unmanaged'
        | 'device.unmanaged.converted_to_managed'
        | 'device.unmanaged.connected'
        | 'device.disconnected'
        | 'device.unmanaged.disconnected'
        | 'device.tampered'
        | 'device.low_battery'
        | 'device.battery_status_changed'
        | 'device.removed'
        | 'device.deleted'
        | 'device.third_party_integration_detected'
        | 'device.third_party_integration_no_longer_detected'
        | 'device.salto.privacy_mode_activated'
        | 'device.salto.privacy_mode_deactivated'
        | 'device.connection_became_flaky'
        | 'device.connection_stabilized'
        | 'device.error.subscription_required'
        | 'device.error.subscription_required.resolved'
        | 'device.accessory_keypad_connected'
        | 'device.accessory_keypad_disconnected'
        | 'noise_sensor.noise_threshold_triggered'
        | 'lock.locked'
        | 'lock.unlocked'
        | 'lock.access_denied'
        | 'thermostat.climate_preset_activated'
        | 'thermostat.manually_adjusted'
        | 'thermostat.temperature_threshold_exceeded'
        | 'thermostat.temperature_threshold_no_longer_exceeded'
        | 'thermostat.temperature_reached_set_point'
        | 'thermostat.temperature_changed'
        | 'device.name_changed'
        | 'camera.activated'
        | 'device.doorbell_rang'
        | 'enrollment_automation.deleted'
        | 'phone.deactivated'
        | 'space.device_membership_changed'
        | 'space.created'
        | 'space.deleted'
      event_types?: Array<
        | 'access_code.created'
        | 'access_code.changed'
        | 'access_code.name_changed'
        | 'access_code.code_changed'
        | 'access_code.time_frame_changed'
        | 'access_code.mutations_requested'
        | 'access_code.scheduled_on_device'
        | 'access_code.set_on_device'
        | 'access_code.removed_from_device'
        | 'access_code.delay_in_setting_on_device'
        | 'access_code.failed_to_set_on_device'
        | 'access_code.deleted'
        | 'access_code.delay_in_removing_from_device'
        | 'access_code.failed_to_remove_from_device'
        | 'access_code.modified_external_to_seam'
        | 'access_code.deleted_external_to_seam'
        | 'access_code.backup_access_code_pulled'
        | 'access_code.unmanaged.converted_to_managed'
        | 'access_code.unmanaged.failed_to_convert_to_managed'
        | 'access_code.unmanaged.created'
        | 'access_code.unmanaged.removed'
        | 'access_grant.created'
        | 'access_grant.deleted'
        | 'access_grant.access_granted_to_all_doors'
        | 'access_grant.access_granted_to_door'
        | 'access_grant.access_to_door_lost'
        | 'access_grant.access_times_changed'
        | 'access_grant.could_not_create_requested_access_methods'
        | 'access_method.issued'
        | 'access_method.revoked'
        | 'access_method.card_encoding_required'
        | 'access_method.deleted'
        | 'access_method.reissued'
        | 'access_method.created'
        | 'access_method.delay_in_issuing'
        | 'access_method.failed_to_issue'
        | 'acs_system.connected'
        | 'acs_system.added'
        | 'acs_system.disconnected'
        | 'acs_credential.deleted'
        | 'acs_credential.issued'
        | 'acs_credential.reissued'
        | 'acs_credential.invalidated'
        | 'acs_user.created'
        | 'acs_user.deleted'
        | 'acs_encoder.added'
        | 'acs_encoder.removed'
        | 'acs_access_group.deleted'
        | 'acs_entrance.added'
        | 'acs_entrance.removed'
        | 'client_session.deleted'
        | 'connected_account.connected'
        | 'connected_account.created'
        | 'connected_account.successful_login'
        | 'connected_account.disconnected'
        | 'connected_account.completed_first_sync'
        | 'connected_account.deleted'
        | 'connected_account.completed_first_sync_after_reconnection'
        | 'connected_account.reauthorization_requested'
        | 'action_attempt.lock_door.succeeded'
        | 'action_attempt.lock_door.failed'
        | 'action_attempt.unlock_door.succeeded'
        | 'action_attempt.unlock_door.failed'
        | 'action_attempt.simulate_keypad_code_entry.succeeded'
        | 'action_attempt.simulate_keypad_code_entry.failed'
        | 'action_attempt.simulate_manual_lock_via_keypad.succeeded'
        | 'action_attempt.simulate_manual_lock_via_keypad.failed'
        | 'connect_webview.login_succeeded'
        | 'connect_webview.login_failed'
        | 'device.connected'
        | 'device.added'
        | 'device.converted_to_unmanaged'
        | 'device.unmanaged.converted_to_managed'
        | 'device.unmanaged.connected'
        | 'device.disconnected'
        | 'device.unmanaged.disconnected'
        | 'device.tampered'
        | 'device.low_battery'
        | 'device.battery_status_changed'
        | 'device.removed'
        | 'device.deleted'
        | 'device.third_party_integration_detected'
        | 'device.third_party_integration_no_longer_detected'
        | 'device.salto.privacy_mode_activated'
        | 'device.salto.privacy_mode_deactivated'
        | 'device.connection_became_flaky'
        | 'device.connection_stabilized'
        | 'device.error.subscription_required'
        | 'device.error.subscription_required.resolved'
        | 'device.accessory_keypad_connected'
        | 'device.accessory_keypad_disconnected'
        | 'noise_sensor.noise_threshold_triggered'
        | 'lock.locked'
        | 'lock.unlocked'
        | 'lock.access_denied'
        | 'thermostat.climate_preset_activated'
        | 'thermostat.manually_adjusted'
        | 'thermostat.temperature_threshold_exceeded'
        | 'thermostat.temperature_threshold_no_longer_exceeded'
        | 'thermostat.temperature_reached_set_point'
        | 'thermostat.temperature_changed'
        | 'device.name_changed'
        | 'camera.activated'
        | 'device.doorbell_rang'
        | 'enrollment_automation.deleted'
        | 'phone.deactivated'
        | 'space.device_membership_changed'
        | 'space.created'
        | 'space.deleted'
      >
      limit?: number
      since?: string
      space_id?: string
      space_ids?: Array<string>
      unstable_offset?: number
      user_identity_id?: string
    }>
    result: Array<ResourceEvent>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/experimental/widgets/get_branch_widget': {
    parameters: { branch_widget_id: string }
    result: ResourceBranchWidget
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/experimental/widgets/internal_probe': {
    parameters: { branch_widget_id: string }
    result: ResourceBranchWidget
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/instant_keys/delete': {
    parameters: { instant_key_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/instant_keys/get': {
    parameters: RequireAtLeastOne<{
      instant_key_id?: string
      instant_key_url?: string
    }>
    result: ResourceInstantKey
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/instant_keys/list': {
    parameters: { user_identity_id?: string }
    result: Array<ResourceInstantKey>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/locks/configure_auto_lock': {
    parameters: {
      auto_lock_delay_seconds?: number
      auto_lock_enabled: boolean
      device_id: string
    }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/locks/get': {
    parameters: RequireAtLeastOne<{ device_id?: string; name?: string }>
    result: ResourceDevice
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/locks/list': {
    parameters: {
      connect_webview_id?: string
      connected_account_id?: string
      customer_key?: string
      device_type?:
        | 'akuvox_lock'
        | 'august_lock'
        | 'brivo_access_point'
        | 'butterflymx_panel'
        | 'avigilon_alta_entry'
        | 'doorking_lock'
        | 'genie_door'
        | 'igloo_lock'
        | 'linear_lock'
        | 'lockly_lock'
        | 'kwikset_lock'
        | 'nuki_lock'
        | 'salto_lock'
        | 'schlage_lock'
        | 'smartthings_lock'
        | 'wyze_lock'
        | 'yale_lock'
        | 'two_n_intercom'
        | 'controlbyweb_device'
        | 'ttlock_lock'
        | 'igloohome_lock'
        | 'four_suites_door'
        | 'dormakaba_oracode_door'
        | 'tedee_lock'
        | 'akiles_lock'
        | 'ultraloq_lock'
        | 'yacan_lock'
        | 'keyincode_lock'
        | 'omnitec_lock'
        | 'kisi_lock'
        | 'aqara_lock'
      device_types?: Array<
        | 'akuvox_lock'
        | 'august_lock'
        | 'brivo_access_point'
        | 'butterflymx_panel'
        | 'avigilon_alta_entry'
        | 'doorking_lock'
        | 'genie_door'
        | 'igloo_lock'
        | 'linear_lock'
        | 'lockly_lock'
        | 'kwikset_lock'
        | 'nuki_lock'
        | 'salto_lock'
        | 'schlage_lock'
        | 'smartthings_lock'
        | 'wyze_lock'
        | 'yale_lock'
        | 'two_n_intercom'
        | 'controlbyweb_device'
        | 'ttlock_lock'
        | 'igloohome_lock'
        | 'four_suites_door'
        | 'dormakaba_oracode_door'
        | 'tedee_lock'
        | 'akiles_lock'
        | 'ultraloq_lock'
        | 'yacan_lock'
        | 'keyincode_lock'
        | 'omnitec_lock'
        | 'kisi_lock'
        | 'aqara_lock'
      >
      manufacturer?:
        | 'akuvox'
        | 'august'
        | 'brivo'
        | 'butterflymx'
        | 'avigilon_alta'
        | 'doorking'
        | 'genie'
        | 'igloo'
        | 'linear'
        | 'lockly'
        | 'kwikset'
        | 'nuki'
        | 'salto'
        | 'schlage'
        | 'seam'
        | 'wyze'
        | 'yale'
        | 'two_n'
        | 'controlbyweb'
        | 'ttlock'
        | 'igloohome'
        | 'four_suites'
        | 'dormakaba_oracode'
        | 'tedee'
        | 'keyincode'
        | 'akiles'
        | 'aqara'
        | 'korelock'
        | 'smartthings'
        | 'ultraloq'
        | 'omnitec'
        | 'kisi'
        | 'yacan'
    }
    result: Array<ResourceDevice>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/locks/lock_door': {
    parameters: { device_id: string; sync?: boolean }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/locks/simulate/keypad_code_entry': {
    parameters: { code: string; device_id: string }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/locks/simulate/manual_lock_via_keypad': {
    parameters: { device_id: string }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/locks/unlock_door': {
    parameters: { device_id: string; sync?: boolean }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/noise_sensors/list': {
    parameters: {
      connect_webview_id?: string
      connected_account_id?: string
      customer_key?: string
      device_type?: 'noiseaware_activity_zone' | 'minut_sensor'
      device_types?: Array<'noiseaware_activity_zone' | 'minut_sensor'>
      manufacturer?: 'minut' | 'noiseaware'
    }
    result: Array<ResourceDevice>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/noise_sensors/noise_thresholds/create': {
    parameters: {
      device_id: string
      ends_daily_at: string
      name?: string
      noise_threshold_decibels?: number
      noise_threshold_nrs?: number
      starts_daily_at: string
      sync?: boolean
    }
    result: ResourceNoiseThreshold
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/noise_sensors/noise_thresholds/delete': {
    parameters: {
      device_id: string
      noise_threshold_id: string
      sync?: boolean
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/noise_sensors/noise_thresholds/get': {
    parameters: { noise_threshold_id: string }
    result: ResourceNoiseThreshold
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/noise_sensors/noise_thresholds/list': {
    parameters: { device_id: string; is_programmed?: boolean }
    result: Array<ResourceNoiseThreshold>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/noise_sensors/noise_thresholds/update': {
    parameters: {
      device_id: string
      ends_daily_at?: string
      name?: string
      noise_threshold_decibels?: number
      noise_threshold_id: string
      noise_threshold_nrs?: number
      starts_daily_at?: string
      sync?: boolean
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/noise_sensors/simulate/trigger_noise_threshold': {
    parameters: { device_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/phones/deactivate': {
    parameters: { device_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/phones/get': {
    parameters: { device_id: string }
    result: ResourcePhone
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/phones/list': {
    parameters: { acs_credential_id?: string; owner_user_identity_id?: string }
    result: Array<ResourcePhone>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/phones/simulate/create_sandbox_phone': {
    parameters: {
      assa_abloy_metadata?: {
        application_version?: string
        ble_capability?: boolean
        hce_capability?: boolean
        nfc_capability?: boolean
        seos_applet_version?: string
        seos_tsm_endpoint_id?: number
      }
      custom_sdk_installation_id?: string
      phone_metadata?: {
        device_manufacturer?: string
        device_model?: string
        operating_system?: 'android' | 'ios'
        os_version?: string
      }
      user_identity_id: string
    }
    result: ResourcePhone
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/bridge/v1/bridge_client_sessions/create': {
    parameters: {
      bridge_client_machine_identifier_key: string
      bridge_client_name: string
      bridge_client_time_zone: string
    }
    result: ResourceBridgeClientSession
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/bridge/v1/bridge_client_sessions/get': {
    parameters: Record<string, never>
    result: ResourceBridgeClientSession
    kind: 'query'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/bridge/v1/bridge_client_sessions/refresh_tailscale_auth_key': {
    parameters: Record<string, never>
    result: ResourceBridgeClientSession
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/bridge/v1/bridge_client_sessions/refresh_telemetry_token': {
    parameters: Record<string, never>
    result: ResourceBridgeClientSession
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/bridge/v1/bridge_client_sessions/regenerate_pairing_code': {
    parameters: Record<string, never>
    result: ResourceBridgeClientSession
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/bridge/v1/bridge_client_sessions/report_status': {
    parameters: {
      is_tailscale_connected: boolean | null
      tailscale_ip_v4: string | null
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/bridge/v1/bridge_connected_systems/list': {
    parameters: Record<string, never>
    result: Array<ResourceBridgeConnectedSystems>
    kind: 'query'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/connect_webview/v1/get_current_pane': {
    parameters: { connect_webview_id: string }
    result: ResourceAccessCode
    kind: 'query'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/connect_webview/v1/reset': {
    parameters: { connect_webview_id: string }
    result: unknown
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/connect_webview/v1/submit': {
    parameters: {
      connect_webview_id: string
      submit_args?: Record<string, unknown> | null
    }
    result: unknown
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/console/v1/get_resource_locator': {
    parameters: Record<string, never>
    result: unknown
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/console/v1/lynx_migration/get_property_migration_status': {
    parameters: { space_id: string }
    result: unknown
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/console/v1/lynx_migration/get_reservation_migration_status': {
    parameters: { access_grant_id: string }
    result: unknown
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/console/v1/lynx_migration/list_property_reservations': {
    parameters: { space_id: string }
    result: unknown
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/console/v1/lynx_migration/migrate_property': {
    parameters: { space_id: string }
    result: unknown
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/console/v1/organizations/create': {
    parameters: { logo_image_base64?: string; name: string }
    result: unknown
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/console/v1/organizations/customization_profiles/copy': {
    parameters: {
      destination_customization_profile_id?: string
      destination_workspace_id: string
      source_customization_profile_id: string
      source_workspace_id: string
    }
    result: ResourceCustomizationProfile
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/console/v1/organizations/delete': {
    parameters: { organization_id: string }
    result: unknown
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/console/v1/organizations/get': {
    parameters: { organization_id: string }
    result: unknown
    kind: 'query'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/console/v1/organizations/invitations/revoke': {
    parameters: { organization_invitation_id: string }
    result: unknown
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/console/v1/organizations/list': {
    parameters: Record<string, never>
    result: Array<unknown>
    kind: 'query'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/console/v1/organizations/members/add': {
    parameters: {
      email: string
      organization_id: string
      role?: 'admin' | 'member'
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/console/v1/organizations/members/remove': {
    parameters: { organization_id: string; user_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/console/v1/organizations/members/update': {
    parameters: {
      organization_id: string
      role: 'admin' | 'member'
      user_id: string
    }
    result: unknown
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/console/v1/organizations/members/workspaces/grant': {
    parameters: {
      organization_id: string
      user_id: string
      workspace_id: string
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/console/v1/organizations/members/workspaces/list': {
    parameters: { organization_id: string; user_id: string }
    result: Array<unknown>
    kind: 'query'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/console/v1/organizations/members/workspaces/revoke': {
    parameters: {
      organization_id: string
      user_id: string
      workspace_id: string
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/console/v1/organizations/update': {
    parameters: {
      connect_webview_customization?: {
        logo_shape?: 'circle' | 'square' | null
        primary_button_color?: string | null
        primary_button_text_color?: string | null
      }
      logo_image_base64?: string | null
      name?: string
      organization_id: string
    }
    result: unknown
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/console/v1/organizations/upload_logo': {
    parameters: Record<string, never>
    result: unknown
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/console/v1/organizations/workspaces/create': {
    parameters: { is_sandbox?: boolean; name: string; organization_id: string }
    result: ResourceWorkspace
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/console/v1/organizations/workspaces/remove': {
    parameters: { workspace_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/console/v1/organizations/workspaces/update': {
    parameters: { name: string; workspace_id: string }
    result: ResourceWorkspace
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/console/v1/sites/create': {
    parameters: { name: string; site_key?: string }
    result: ResourceSpace
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/console/v1/sites/delete': {
    parameters: { site_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/console/v1/sites/list': {
    parameters: { search?: string }
    result: Array<ResourceSpace>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/console/v1/sites/update': {
    parameters: { name?: string; site_id: string; site_key?: string }
    result: ResourceSpace
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/console/v1/timelines/get': {
    parameters: {
      context_type?: 'request' | 'job'
      created_after?: string
      created_before?: string
      created_between?: Array<string>
      entry_types?: Array<
        | 'resource_created'
        | 'resource_updated'
        | 'resource_deleted'
        | 'event'
        | 'provider_call'
        | 'automation_run'
        | 'webhook_processed'
      >
      limit?: number
      page_cursor?: string
      resource_id: string
    }
    result: unknown
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/console/v1/workspace/feature_flags/list': {
    parameters: Record<string, never>
    result: unknown
    kind: 'query'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/console/v1/workspace/feature_flags/update': {
    parameters: {
      enabled: boolean
      feature_flag_name:
        | 'RESERVATION_LEGACY'
        | 'EXPERIMENTAL_DASHBOARD_API_ENABLED'
        | 'ICAL_CONNECTOR'
        | 'VISIONLINE_SERIALIZE_BRIDGE_REQUESTS'
        | 'SALTO_KS_ENTRANCES_ONLY_FOR_SPACES'
        | 'MANAGE_DEVICES_CONFIRMATION_MODAL'
        | 'RECLAIM_ORPHANED_BACKUP_ACCESS_CODES'
        | 'RECONCILE_ORPHANED_SMARTTHINGS_ACCESS_CODES'
        | 'LYNX_MIGRATION_ENABLED'
        | 'AURORA_CUSTOMER_FILTER_ENABLED'
        | 'AUTOMATION_IMMINENT_CHECK_IN_QUEUE'
        | 'ACCESS_METHOD_DEADLINE_ERRORS'
        | 'GUARD_MATERIALIZATION_ON_UNREACHABLE_DEVICE'
        | 'TARGETED_ACCESS_GRANT_ISSUANCE'
    }
    result: unknown
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/access_grants/list': {
    parameters: Record<string, never>
    result: Array<ResourceAccessGrant>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/access_grants/update': {
    parameters: { access_grant_id: string; space_ids: Array<string> }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/access_methods/encode': {
    parameters: { access_method_id: string; acs_encoder_id: string }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/seam/customer/v1/automation_runs/list': {
    parameters: {
      automation_id?: string
      created_before?: string
      limit?: number
      page_cursor?: string | null
      partner_resource_id?: string
      rule?:
        | 'reservation_created'
        | 'reservation_time_updated'
        | 'reservation_deleted'
        | 'space_name_updated'
      success?: boolean
    }
    result: Array<unknown>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/automations/delete': {
    parameters: Record<string, never>
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/automations/get': {
    parameters: { customer_key?: string }
    result: undefined
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/automations/update': {
    parameters: {
      access_rules?: {
        reservation_created?: {
          config?: {
            access_methods?: Array<'card' | 'mobile_key' | 'code'>
            allow_shared_email_and_phone_across_user_identities?: boolean
            card_count_on_reservation_create?: number
            instant_key_max_use_count?: number
            method_issuance_strategy?:
              'first_available' | 'first_two_available' | 'all_available'
            prefer_guest_phone_last4_as_code?: boolean
          }
          rule?: 'reservation_created'
        }
        reservation_deleted?: {
          config?: Record<string, never>
          rule?: 'reservation_deleted'
        }
        reservation_spaces_updated?: {
          config?: Record<string, never>
          rule?: 'reservation_spaces_updated'
        }
        reservation_time_updated?: {
          config?: Record<string, never>
          rule?: 'reservation_time_updated'
        }
        space_name_updated?: {
          config?: Record<string, never>
          rule?: 'space_name_updated'
        }
        staff_member_created?: {
          config?: Record<string, never>
          rule?: 'staff_member_created'
        }
        staff_member_name_updated?: {
          config?: Record<string, never>
          rule?: 'staff_member_name_updated'
        }
        user_identity_name_updated?: {
          config?: Record<string, never>
          rule?: 'user_identity_name_updated'
        }
      }
      climate_rules?: {
        rules?: {
          reservation_created?: {
            automated_occupied_preset?: {
              cooling_set_point_celsius?: number
              cooling_set_point_fahrenheit?: number
              fan_mode?: 'on' | 'auto' | 'circulate'
              heating_set_point_celsius?: number
              heating_set_point_fahrenheit?: number
              is_override_allowed?: boolean
              max_override_period_minutes?: number
              mode?: 'heat' | 'cool' | 'auto'
            }
            automated_unoccupied_preset?: {
              cooling_set_point_celsius?: number
              cooling_set_point_fahrenheit?: number
              fan_mode?: 'on' | 'auto' | 'circulate'
              heating_set_point_celsius?: number
              heating_set_point_fahrenheit?: number
              is_override_allowed?: boolean
              max_override_period_minutes?: number
              mode?: 'heat' | 'cool' | 'auto'
            }
            occupied_preset_key?: string
            precondition_minutes_before_reservation?: number
            unoccupied_preset_key?: string
          }
          reservation_deleted?: Record<string, never>
          reservation_time_updated?: Record<string, never>
        }
      }
      customer_key?: string
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/connector_customers/list': {
    parameters: { connector_id?: string }
    result: Array<unknown>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/connectors/authorize': {
    parameters: { connector_name?: string; slug: string }
    result: unknown
    kind: 'query'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/customer/v1/connectors/connector_types': {
    parameters: Record<string, never>
    result: Array<unknown>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/connectors/create': {
    parameters: {
      config: Record<string, unknown>
      connector_type:
        | 'mock'
        | 'mews'
        | 'rms'
        | 'cloudbeds'
        | 'smoobu'
        | 'zonal'
        | 'ical'
        | 'lodgify'
        | 'hostaway'
        | 'guesty'
        | 'acuity_scheduling'
      customer_key?: string
    }
    result: unknown
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/connectors/delete': {
    parameters: {
      connector_customer_id?: string
      connector_id: string
      customer_id?: string
      customer_key?: string
      unique_provider_resource_key?: string
    }
    result: unknown
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/connectors/external_sites/list': {
    parameters: { connected_account_id: string }
    result: Array<unknown>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/connectors/ical/validate-config': {
    parameters: {
      ical_config: {
        fields?: {
          ends_at?: { pattern?: string; source?: string; type?: 'date' }
          guest_email?: { pattern?: string; source?: string; type?: 'date' }
          guest_name?: { pattern?: string; source?: string; type?: 'date' }
          guest_phone?: { pattern?: string; source?: string; type?: 'date' }
          reservation_key?: { pattern?: string; source?: string; type?: 'date' }
          starts_at?: { pattern?: string; source?: string; type?: 'date' }
        }
        filter?: { pattern?: string; source?: string }
      }
      ical_url: string
    }
    result: unknown
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/connectors/list': {
    parameters: Record<string, never>
    result: Array<unknown>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/connectors/sync': {
    parameters: {
      connector_customer_id?: string | null
      connector_id: string
      connector_type: string
      customer_key: string
      unique_provider_resource_key?: string | null
    }
    result: unknown
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/connectors/update': {
    parameters: {
      config: Record<string, unknown>
      connector_customer_id?: string
      connector_id: string
      customer_key?: string
    }
    result: unknown
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/customers/automations/get': {
    parameters: Record<string, never>
    result: unknown
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/customers/automations/update': {
    parameters: {
      access_rules?: {
        reservation_created?: {
          config?: {
            access_methods?: Array<'card' | 'mobile_key' | 'code'>
            allow_shared_email_and_phone_across_user_identities?: boolean
            card_count_on_reservation_create?: number
            instant_key_max_use_count?: number
            method_issuance_strategy?:
              'first_available' | 'first_two_available' | 'all_available'
            prefer_guest_phone_last4_as_code?: boolean
          }
          rule?: 'reservation_created'
        }
        reservation_deleted?: {
          config?: Record<string, never>
          rule?: 'reservation_deleted'
        }
        reservation_spaces_updated?: {
          config?: Record<string, never>
          rule?: 'reservation_spaces_updated'
        }
        reservation_time_updated?: {
          config?: Record<string, never>
          rule?: 'reservation_time_updated'
        }
        space_name_updated?: {
          config?: Record<string, never>
          rule?: 'space_name_updated'
        }
        staff_member_created?: {
          config?: Record<string, never>
          rule?: 'staff_member_created'
        }
        staff_member_name_updated?: {
          config?: Record<string, never>
          rule?: 'staff_member_name_updated'
        }
        user_identity_name_updated?: {
          config?: Record<string, never>
          rule?: 'user_identity_name_updated'
        }
      }
      climate_rules?: {
        rules?: {
          reservation_created?: {
            automated_occupied_preset?: {
              cooling_set_point_celsius?: number
              cooling_set_point_fahrenheit?: number
              fan_mode?: 'on' | 'auto' | 'circulate'
              heating_set_point_celsius?: number
              heating_set_point_fahrenheit?: number
              is_override_allowed?: boolean
              max_override_period_minutes?: number
              mode?: 'heat' | 'cool' | 'auto'
            }
            automated_unoccupied_preset?: {
              cooling_set_point_celsius?: number
              cooling_set_point_fahrenheit?: number
              fan_mode?: 'on' | 'auto' | 'circulate'
              heating_set_point_celsius?: number
              heating_set_point_fahrenheit?: number
              is_override_allowed?: boolean
              max_override_period_minutes?: number
              mode?: 'heat' | 'cool' | 'auto'
            }
            occupied_preset_key?: string
            precondition_minutes_before_reservation?: number
            unoccupied_preset_key?: string
          }
          reservation_deleted?: Record<string, never>
          reservation_time_updated?: Record<string, never>
        }
      }
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/customers/list': {
    parameters: { limit?: number; page_cursor?: string | null; search?: string }
    result: Array<ResourceCustomer>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/customers/me': {
    parameters: Record<string, never>
    result: undefined
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/customers/open_portal': {
    parameters: { customer_key: string }
    result: ResourceMagicLink
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/encoders/list': {
    parameters: { space_key?: string }
    result: Array<ResourceAcsEncoder>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/events/list': {
    parameters: {
      between?: Array<string>
      event_type?:
        | 'access_code.created'
        | 'access_code.changed'
        | 'access_code.name_changed'
        | 'access_code.code_changed'
        | 'access_code.time_frame_changed'
        | 'access_code.mutations_requested'
        | 'access_code.scheduled_on_device'
        | 'access_code.set_on_device'
        | 'access_code.removed_from_device'
        | 'access_code.delay_in_setting_on_device'
        | 'access_code.failed_to_set_on_device'
        | 'access_code.deleted'
        | 'access_code.delay_in_removing_from_device'
        | 'access_code.failed_to_remove_from_device'
        | 'access_code.modified_external_to_seam'
        | 'access_code.deleted_external_to_seam'
        | 'access_code.backup_access_code_pulled'
        | 'access_code.unmanaged.converted_to_managed'
        | 'access_code.unmanaged.failed_to_convert_to_managed'
        | 'access_code.unmanaged.created'
        | 'access_code.unmanaged.removed'
        | 'access_grant.created'
        | 'access_grant.deleted'
        | 'access_grant.access_granted_to_all_doors'
        | 'access_grant.access_granted_to_door'
        | 'access_grant.access_to_door_lost'
        | 'access_grant.access_times_changed'
        | 'access_grant.could_not_create_requested_access_methods'
        | 'access_method.issued'
        | 'access_method.revoked'
        | 'access_method.card_encoding_required'
        | 'access_method.deleted'
        | 'access_method.reissued'
        | 'access_method.created'
        | 'access_method.delay_in_issuing'
        | 'access_method.failed_to_issue'
        | 'acs_system.connected'
        | 'acs_system.added'
        | 'acs_system.disconnected'
        | 'acs_credential.deleted'
        | 'acs_credential.issued'
        | 'acs_credential.reissued'
        | 'acs_credential.invalidated'
        | 'acs_user.created'
        | 'acs_user.deleted'
        | 'acs_encoder.added'
        | 'acs_encoder.removed'
        | 'acs_access_group.deleted'
        | 'acs_entrance.added'
        | 'acs_entrance.removed'
        | 'client_session.deleted'
        | 'connected_account.connected'
        | 'connected_account.created'
        | 'connected_account.successful_login'
        | 'connected_account.disconnected'
        | 'connected_account.completed_first_sync'
        | 'connected_account.deleted'
        | 'connected_account.completed_first_sync_after_reconnection'
        | 'connected_account.reauthorization_requested'
        | 'action_attempt.lock_door.succeeded'
        | 'action_attempt.lock_door.failed'
        | 'action_attempt.unlock_door.succeeded'
        | 'action_attempt.unlock_door.failed'
        | 'action_attempt.simulate_keypad_code_entry.succeeded'
        | 'action_attempt.simulate_keypad_code_entry.failed'
        | 'action_attempt.simulate_manual_lock_via_keypad.succeeded'
        | 'action_attempt.simulate_manual_lock_via_keypad.failed'
        | 'connect_webview.login_succeeded'
        | 'connect_webview.login_failed'
        | 'device.connected'
        | 'device.added'
        | 'device.converted_to_unmanaged'
        | 'device.unmanaged.converted_to_managed'
        | 'device.unmanaged.connected'
        | 'device.disconnected'
        | 'device.unmanaged.disconnected'
        | 'device.tampered'
        | 'device.low_battery'
        | 'device.battery_status_changed'
        | 'device.removed'
        | 'device.deleted'
        | 'device.third_party_integration_detected'
        | 'device.third_party_integration_no_longer_detected'
        | 'device.salto.privacy_mode_activated'
        | 'device.salto.privacy_mode_deactivated'
        | 'device.connection_became_flaky'
        | 'device.connection_stabilized'
        | 'device.error.subscription_required'
        | 'device.error.subscription_required.resolved'
        | 'device.accessory_keypad_connected'
        | 'device.accessory_keypad_disconnected'
        | 'noise_sensor.noise_threshold_triggered'
        | 'lock.locked'
        | 'lock.unlocked'
        | 'lock.access_denied'
        | 'thermostat.climate_preset_activated'
        | 'thermostat.manually_adjusted'
        | 'thermostat.temperature_threshold_exceeded'
        | 'thermostat.temperature_threshold_no_longer_exceeded'
        | 'thermostat.temperature_reached_set_point'
        | 'thermostat.temperature_changed'
        | 'device.name_changed'
        | 'camera.activated'
        | 'device.doorbell_rang'
        | 'enrollment_automation.deleted'
        | 'phone.deactivated'
        | 'space.device_membership_changed'
        | 'space.created'
        | 'space.deleted'
      event_types?: Array<
        | 'access_code.created'
        | 'access_code.changed'
        | 'access_code.name_changed'
        | 'access_code.code_changed'
        | 'access_code.time_frame_changed'
        | 'access_code.mutations_requested'
        | 'access_code.scheduled_on_device'
        | 'access_code.set_on_device'
        | 'access_code.removed_from_device'
        | 'access_code.delay_in_setting_on_device'
        | 'access_code.failed_to_set_on_device'
        | 'access_code.deleted'
        | 'access_code.delay_in_removing_from_device'
        | 'access_code.failed_to_remove_from_device'
        | 'access_code.modified_external_to_seam'
        | 'access_code.deleted_external_to_seam'
        | 'access_code.backup_access_code_pulled'
        | 'access_code.unmanaged.converted_to_managed'
        | 'access_code.unmanaged.failed_to_convert_to_managed'
        | 'access_code.unmanaged.created'
        | 'access_code.unmanaged.removed'
        | 'access_grant.created'
        | 'access_grant.deleted'
        | 'access_grant.access_granted_to_all_doors'
        | 'access_grant.access_granted_to_door'
        | 'access_grant.access_to_door_lost'
        | 'access_grant.access_times_changed'
        | 'access_grant.could_not_create_requested_access_methods'
        | 'access_method.issued'
        | 'access_method.revoked'
        | 'access_method.card_encoding_required'
        | 'access_method.deleted'
        | 'access_method.reissued'
        | 'access_method.created'
        | 'access_method.delay_in_issuing'
        | 'access_method.failed_to_issue'
        | 'acs_system.connected'
        | 'acs_system.added'
        | 'acs_system.disconnected'
        | 'acs_credential.deleted'
        | 'acs_credential.issued'
        | 'acs_credential.reissued'
        | 'acs_credential.invalidated'
        | 'acs_user.created'
        | 'acs_user.deleted'
        | 'acs_encoder.added'
        | 'acs_encoder.removed'
        | 'acs_access_group.deleted'
        | 'acs_entrance.added'
        | 'acs_entrance.removed'
        | 'client_session.deleted'
        | 'connected_account.connected'
        | 'connected_account.created'
        | 'connected_account.successful_login'
        | 'connected_account.disconnected'
        | 'connected_account.completed_first_sync'
        | 'connected_account.deleted'
        | 'connected_account.completed_first_sync_after_reconnection'
        | 'connected_account.reauthorization_requested'
        | 'action_attempt.lock_door.succeeded'
        | 'action_attempt.lock_door.failed'
        | 'action_attempt.unlock_door.succeeded'
        | 'action_attempt.unlock_door.failed'
        | 'action_attempt.simulate_keypad_code_entry.succeeded'
        | 'action_attempt.simulate_keypad_code_entry.failed'
        | 'action_attempt.simulate_manual_lock_via_keypad.succeeded'
        | 'action_attempt.simulate_manual_lock_via_keypad.failed'
        | 'connect_webview.login_succeeded'
        | 'connect_webview.login_failed'
        | 'device.connected'
        | 'device.added'
        | 'device.converted_to_unmanaged'
        | 'device.unmanaged.converted_to_managed'
        | 'device.unmanaged.connected'
        | 'device.disconnected'
        | 'device.unmanaged.disconnected'
        | 'device.tampered'
        | 'device.low_battery'
        | 'device.battery_status_changed'
        | 'device.removed'
        | 'device.deleted'
        | 'device.third_party_integration_detected'
        | 'device.third_party_integration_no_longer_detected'
        | 'device.salto.privacy_mode_activated'
        | 'device.salto.privacy_mode_deactivated'
        | 'device.connection_became_flaky'
        | 'device.connection_stabilized'
        | 'device.error.subscription_required'
        | 'device.error.subscription_required.resolved'
        | 'device.accessory_keypad_connected'
        | 'device.accessory_keypad_disconnected'
        | 'noise_sensor.noise_threshold_triggered'
        | 'lock.locked'
        | 'lock.unlocked'
        | 'lock.access_denied'
        | 'thermostat.climate_preset_activated'
        | 'thermostat.manually_adjusted'
        | 'thermostat.temperature_threshold_exceeded'
        | 'thermostat.temperature_threshold_no_longer_exceeded'
        | 'thermostat.temperature_reached_set_point'
        | 'thermostat.temperature_changed'
        | 'device.name_changed'
        | 'camera.activated'
        | 'device.doorbell_rang'
        | 'enrollment_automation.deleted'
        | 'phone.deactivated'
        | 'space.device_membership_changed'
        | 'space.created'
        | 'space.deleted'
      >
      limit?: number
      since?: string
      space_id: string
    }
    result: Array<ResourceEvent>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/portals/get': {
    parameters: { customer_portal_id: string }
    result: unknown
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/portals/update': {
    parameters: {
      customer_portal_id: string
      portal_configuration: {
        customer_resources_filters?: Array<{
          field?: string
          operation?: '='
          value?: string
        }>
        customization_profile_id?: string
        deep_link?: {
          resource_key?: string
          resource_type?: 'reservation' | 'space' | 'device'
          resource_id?: string
        }
        exclude_locale_picker?: boolean
        features?: {
          configure?: {
            allow_access_automation_rule_customization?: boolean
            allow_climate_automation_rule_customization?: boolean
            allow_instant_key_customization?: boolean
            exclude?: boolean
          }
          connect?: {
            accepted_providers?: Array<string>
            exclude?: boolean
            excluded_providers?: Array<string>
          }
          manage?: {
            device_management_confirmation?: {
              body?: string
              cancel_button_label?: string
              confirm_button_label?: string
              title?: string
            }
            events?: {
              allowed_events?: Array<string>
              default_events?: Array<string>
            }
            exclude?: boolean
            exclude_reservation_management?: boolean
            exclude_reservation_technical_details?: boolean
            exclude_staff_management?: boolean
          }
          manage_devices?: { exclude?: boolean }
          organize?: { exclude?: boolean }
        }
        is_embedded?: boolean
        landing_page?: {
          manage?: {
            space_key?: string
            property_key?: string
            room_key?: string
            common_area_key?: string
            unit_key?: string
            facility_key?: string
            building_key?: string
            listing_key?: string
            property_listing_key?: string
            site_key?: string
            reservation_key?: string
            booking_key?: string
            access_grant_key?: string
          }
        }
        locale?:
          | 'en-US'
          | 'pt-PT'
          | 'fr-FR'
          | 'it-IT'
          | 'es-ES'
          | 'de-DE'
          | 'nl-NL'
          | 'el-GR'
          | 'pl-PL'
          | 'ru-RU'
        navigation_mode?: 'full' | 'restricted'
        read_only?: boolean
      }
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/reservations/get': {
    parameters: RequireAtLeastOne<{
      customer_key?: string
      reservation_id?: string
      reservation_key?: string
    }>
    result: unknown
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/reservations/list': {
    parameters: {
      between?: Array<string>
      connected_account_id?: string
      created_after?: string
      created_before?: string
      customer_key?: string
      limit?: number
      page_cursor?: string | null
      search?: string
      space_id?: string
      space_key?: string
      user_identity_id?: string
    }
    result: Array<unknown>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/reservations/list_access_grants': {
    parameters: { customer_key?: string; reservation_key: string }
    result: Array<ResourceAccessGrant>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/settings/business_verticals/list': {
    parameters: Record<string, never>
    result: Array<unknown>
    kind: 'query'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/customer/v1/settings/get': {
    parameters: Record<string, never>
    result: unknown
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/settings/update': {
    parameters: {
      business_vertical?:
        | 'neutral'
        | 'short_term_rental'
        | 'hospitality'
        | 'multi_family'
        | 'gym_management'
        | 'property_tours'
      slug?: string | null
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/settings/vertical_resource_aliases/get': {
    parameters: Record<string, never>
    result: unknown
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/spaces/create': {
    parameters: {
      acs_entrance_ids?: Array<string>
      connected_account_ids?: Array<string>
      customer_data?: {
        address?: string | null
        default_checkin_time?: string | null
        default_checkout_time?: string | null
        time_zone?: string | null
      }
      device_ids?: Array<string>
      name: string
      parent_space_key?: string
      parent_space_name?: string
      space_key?: string
    }
    result: ResourceSpace
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/spaces/list': {
    parameters: {
      connected_account_id?: string
      parent_space_id?: string
      parent_space_key?: string
      search?: string
      space_key?: string
    }
    result: Array<ResourceSpace>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/spaces/list_reservations': {
    parameters: { issued_status?: 'issued' | 'pending'; space_key: string }
    result: Array<unknown>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/spaces/push_common_areas': {
    parameters: {
      common_areas?: Array<{ name?: string }>
      spaces?: Array<{ common_areas?: Array<{ name?: string }>; name?: string }>
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/staff_members/get': {
    parameters: { staff_member_key: string }
    result: unknown
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/customer/v1/staff_members/list': {
    parameters: {
      created_before?: string
      limit?: number
      page_cursor?: string | null
      space_id?: string
      space_key?: string
    }
    result: Array<unknown>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/instant_key/v1/client_sessions/exchange_short_code': {
    parameters: { short_code: string }
    result: ResourceClientSession
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/instant_key/v1/preview/get': {
    parameters: { instant_key_url: string }
    result: unknown
    kind: 'query'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/mcp/v1/create_ro_token': {
    parameters: { created_by?: string; workspace_id: string }
    result: unknown
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/seam/mobile_sdk/v1/acs/credentials/list': {
    parameters: Record<string, never>
    result: Array<ResourceAcsCredential>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/mobile_sdk/v1/phone_sessions/get_or_create': {
    parameters: {
      custom_sdk_installation_id: string
      phone_device_metadata?: {
        manufacturer?: string
        model?: string
        os_version?: string
      }
      phone_os: 'ios' | 'android'
    }
    result: ResourcePhoneSession
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/mobile_sdk/v1/report_salto_space_audit_trail': {
    parameters: {
      acs_system_id: string
      salto_space_metadata: { justin_mobile_sdk_audit_trail_data?: string }
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/partner/v1/building_blocks/spaces/auto_map': {
    parameters: {
      collection_key?: string
      connected_account_id?: string
      customer_key?: string
    }
    result: Array<unknown>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/seam/webhooks/[provider]/[subscription_id]': {
    parameters: Record<string, never>
    result: undefined
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/spaces/add_acs_entrances': {
    parameters: { acs_entrance_ids: Array<string>; space_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/spaces/add_connected_account': {
    parameters: { connected_account_id: string; space_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/spaces/add_devices': {
    parameters: { device_ids: Array<string>; space_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/spaces/create': {
    parameters: {
      acs_entrance_ids?: Array<string>
      connected_account_ids?: Array<string>
      customer_data?: {
        address?: string | null
        default_checkin_time?: string | null
        default_checkout_time?: string | null
        time_zone?: string | null
      }
      customer_key?: string
      device_ids?: Array<string>
      name: string
      space_key?: string
    }
    result: ResourceSpace
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/spaces/delete': {
    parameters: { space_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/spaces/get': {
    parameters: RequireAtLeastOne<{ space_id?: string; space_key?: string }>
    result: ResourceSpace
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/spaces/get_related': {
    parameters: RequireAtLeastOne<{
      exclude?: Array<
        | 'spaces'
        | 'devices'
        | 'acs_entrances'
        | 'connected_accounts'
        | 'acs_systems'
        | 'access_methods'
      >
      include?: Array<
        | 'spaces'
        | 'devices'
        | 'acs_entrances'
        | 'connected_accounts'
        | 'acs_systems'
        | 'access_methods'
      >
      space_ids?: Array<string>
      space_keys?: Array<string>
    }>
    result: unknown
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/spaces/list': {
    parameters: {
      connected_account_id?: string
      customer_key?: string
      limit?: number
      page_cursor?: string | null
      parent_space_id?: string
      parent_space_key?: string
      search?: string
      space_key?: string
    }
    result: Array<ResourceSpace>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/spaces/remove_acs_entrances': {
    parameters: { acs_entrance_ids: Array<string>; space_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/spaces/remove_connected_account': {
    parameters: { connected_account_id: string; space_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/spaces/remove_devices': {
    parameters: { device_ids: Array<string>; space_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/spaces/update': {
    parameters: {
      acs_entrance_ids?: Array<string>
      customer_data?: {
        address?: string | null
        default_checkin_time?: string | null
        default_checkout_time?: string | null
        time_zone?: string | null
      }
      device_ids?: Array<string>
      name?: string
      parent_space_id?: string
      parent_space_key?: string
      space_id?: string
      space_key?: string
    }
    result: ResourceSpace
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/thermostats/activate_climate_preset': {
    parameters: { climate_preset_key: string; device_id: string }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/thermostats/cool': {
    parameters: {
      cooling_set_point_celsius?: number
      cooling_set_point_fahrenheit?: number
      device_id: string
      sync?: boolean
    }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/thermostats/create_climate_preset': {
    parameters: {
      climate_preset_key: string
      climate_preset_mode?:
        'home' | 'away' | 'wake' | 'sleep' | 'occupied' | 'unoccupied'
      cooling_set_point_celsius?: number
      cooling_set_point_fahrenheit?: number
      device_id: string
      ecobee_metadata?: {
        climate_ref?: string
        is_optimized?: boolean
        owner?: 'user' | 'system'
      }
      fan_mode_setting?: 'auto' | 'on' | 'circulate'
      heating_set_point_celsius?: number
      heating_set_point_fahrenheit?: number
      hvac_mode_setting?: 'off' | 'heat' | 'cool' | 'heat_cool' | 'eco'
      manual_override_allowed?: boolean
      name?: string | null
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/thermostats/daily_programs/create': {
    parameters: {
      device_id: string
      name: string
      periods: Array<{ climate_preset_key?: string; starts_at_time?: string }>
    }
    result: ResourceThermostatDailyProgram
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/thermostats/daily_programs/delete': {
    parameters: { thermostat_daily_program_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/thermostats/daily_programs/update': {
    parameters: {
      name: string
      periods: Array<{ climate_preset_key?: string; starts_at_time?: string }>
      thermostat_daily_program_id: string
    }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/thermostats/delete_climate_preset': {
    parameters: { climate_preset_key: string; device_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/thermostats/get': {
    parameters: RequireAtLeastOne<{ device_id?: string; name?: string }>
    result: ResourceDevice
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/thermostats/heat': {
    parameters: {
      device_id: string
      heating_set_point_celsius?: number
      heating_set_point_fahrenheit?: number
      sync?: boolean
    }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/thermostats/heat_cool': {
    parameters: {
      cooling_set_point_celsius?: number
      cooling_set_point_fahrenheit?: number
      device_id: string
      heating_set_point_celsius?: number
      heating_set_point_fahrenheit?: number
      sync?: boolean
    }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/thermostats/list': {
    parameters: {
      connect_webview_id?: string
      connected_account_id?: string
      customer_key?: string
      device_type?:
        | 'ecobee_thermostat'
        | 'nest_thermostat'
        | 'honeywell_resideo_thermostat'
        | 'tado_thermostat'
        | 'sensi_thermostat'
        | 'smartthings_thermostat'
      device_types?: Array<
        | 'ecobee_thermostat'
        | 'nest_thermostat'
        | 'honeywell_resideo_thermostat'
        | 'tado_thermostat'
        | 'sensi_thermostat'
        | 'smartthings_thermostat'
      >
      manufacturer?:
        | 'ecobee'
        | 'honeywell_resideo'
        | 'nest'
        | 'sensi'
        | 'smartthings'
        | 'tado'
    }
    result: Array<ResourceDevice>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/thermostats/off': {
    parameters: { device_id: string; sync?: boolean }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/thermostats/schedules/create': {
    parameters: {
      climate_preset_key: string
      device_id: string
      ends_at: string
      is_override_allowed?: boolean
      max_override_period_minutes?: number | null
      name?: string
      starts_at: string
    }
    result: ResourceThermostatSchedule
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/thermostats/schedules/delete': {
    parameters: { thermostat_schedule_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/thermostats/schedules/get': {
    parameters: { thermostat_schedule_id: string }
    result: ResourceThermostatSchedule
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/thermostats/schedules/list': {
    parameters: { device_id: string; user_identifier_key?: string }
    result: Array<ResourceThermostatSchedule>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/thermostats/schedules/update': {
    parameters: {
      climate_preset_key?: string
      ends_at?: string
      is_override_allowed?: boolean
      max_override_period_minutes?: number | null
      name?: string
      starts_at?: string
      thermostat_schedule_id: string
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/thermostats/set_fallback_climate_preset': {
    parameters: { climate_preset_key: string; device_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/thermostats/set_fan_mode': {
    parameters: {
      device_id: string
      fan_mode?: 'auto' | 'on' | 'circulate'
      fan_mode_setting?: 'auto' | 'on' | 'circulate'
      sync?: boolean
    }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/thermostats/set_hvac_mode': {
    parameters: {
      device_id: string
      hvac_mode_setting: 'off' | 'cool' | 'heat' | 'heat_cool' | 'eco'
      cooling_set_point_celsius?: number
      cooling_set_point_fahrenheit?: number
      heating_set_point_celsius?: number
      heating_set_point_fahrenheit?: number
    }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/thermostats/set_temperature_threshold': {
    parameters: {
      device_id: string
      lower_limit_celsius?: number | null
      lower_limit_fahrenheit?: number | null
      upper_limit_celsius?: number | null
      upper_limit_fahrenheit?: number | null
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/thermostats/simulate/hvac_mode_adjusted': {
    parameters: {
      device_id: string
      hvac_mode: 'off' | 'cool' | 'heat' | 'heat_cool'
      cooling_set_point_celsius?: number
      cooling_set_point_fahrenheit?: number
      heating_set_point_celsius?: number
      heating_set_point_fahrenheit?: number
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/thermostats/simulate/temperature_reached': {
    parameters: {
      device_id: string
      temperature_celsius?: number
      temperature_fahrenheit?: number
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/thermostats/update_climate_preset': {
    parameters: {
      climate_preset_key: string
      climate_preset_mode?:
        'home' | 'away' | 'wake' | 'sleep' | 'occupied' | 'unoccupied'
      cooling_set_point_celsius?: number
      cooling_set_point_fahrenheit?: number
      device_id: string
      ecobee_metadata?: {
        climate_ref?: string
        is_optimized?: boolean
        owner?: 'user' | 'system'
      }
      fan_mode_setting?: 'auto' | 'on' | 'circulate'
      heating_set_point_celsius?: number
      heating_set_point_fahrenheit?: number
      hvac_mode_setting?: 'off' | 'heat' | 'cool' | 'heat_cool' | 'eco'
      manual_override_allowed?: boolean
      name?: string | null
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/thermostats/update_weekly_program': {
    parameters: {
      device_id: string
      friday_program_id?: string | null
      monday_program_id?: string | null
      saturday_program_id?: string | null
      sunday_program_id?: string | null
      thursday_program_id?: string | null
      tuesday_program_id?: string | null
      wednesday_program_id?: string | null
    }
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/unstable_partner/building_blocks/connect_accounts': {
    parameters: { customer_key: string }
    result: ResourceMagicLink
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/unstable_partner/building_blocks/generate_magic_link': {
    parameters: {
      building_block_type:
        'connect_accounts' | 'organize_spaces' | 'console' | 'manage_devices'
      customer_key: string
      spaces?: Array<{
        customer_data?: {
          address?: string | null
          default_checkin_time?: string | null
          default_checkout_time?: string | null
          time_zone?: string | null
        }
        duration_minutes?: number
        geolocation?: { latitude?: number; longitude?: number }
        name?: string
        parent_site_key?: string
        space_key?: string
      }>
    }
    result: ResourceMagicLink
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/unstable_partner/building_blocks/manage_devices': {
    parameters: { customer_key: string }
    result: ResourceMagicLink
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/unstable_partner/building_blocks/organize_spaces': {
    parameters: {
      customer_key: string
      spaces?: Array<{
        customer_data?: {
          address?: string | null
          default_checkin_time?: string | null
          default_checkout_time?: string | null
          time_zone?: string | null
        }
        duration_minutes?: number
        geolocation?: { latitude?: number; longitude?: number }
        name?: string
        parent_site_key?: string
        space_key?: string
      }>
    }
    result: ResourceMagicLink
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/user_identities/add_acs_user': {
    parameters: {
      acs_user_id: string
      user_identity_id?: string
      user_identity_key?: string
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/user_identities/create': {
    parameters: {
      acs_system_ids?: Array<string>
      email_address?: string | null
      full_name?: string | null
      phone_number?: string | null
      user_identity_key?: string | null
    }
    result: ResourceUserIdentity
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/user_identities/delete': {
    parameters: { user_identity_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/user_identities/enrollment_automations/delete': {
    parameters: { enrollment_automation_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/user_identities/enrollment_automations/get': {
    parameters: { enrollment_automation_id: string }
    result: ResourceEnrollmentAutomation
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/user_identities/enrollment_automations/launch': {
    parameters: {
      acs_credential_pool_id?: string
      create_credential_manager_user?: boolean
      credential_manager_acs_system_id: string
      credential_manager_acs_user_id?: string
      user_identity_id: string
    }
    result: ResourceEnrollmentAutomation
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/user_identities/enrollment_automations/list': {
    parameters: { user_identity_id: string }
    result: Array<ResourceEnrollmentAutomation>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/user_identities/generate_instant_key': {
    parameters: {
      customization_profile_id?: string
      max_use_count?: number
      user_identity_id: string
    }
    result: ResourceInstantKey
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/user_identities/get': {
    parameters: RequireAtLeastOne<{
      user_identity_id?: string
      user_identity_key?: string
    }>
    result: ResourceUserIdentity
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/user_identities/grant_access_to_device': {
    parameters: { device_id: string; user_identity_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/user_identities/list': {
    parameters: {
      created_before?: string
      credential_manager_acs_system_id?: string
      limit?: number
      page_cursor?: string | null
      search?: string
      user_identity_ids?: Array<string>
    }
    result: Array<ResourceUserIdentity>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/user_identities/list_accessible_devices': {
    parameters: { user_identity_id: string }
    result: Array<ResourceDevice>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/user_identities/list_accessible_entrances': {
    parameters: { user_identity_id: string }
    result: Array<ResourceAcsEntrance>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/user_identities/list_acs_systems': {
    parameters: { user_identity_id: string }
    result: Array<ResourceAcsSystem>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/user_identities/list_acs_users': {
    parameters: { user_identity_id: string }
    result: Array<ResourceAcsUser>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/user_identities/remove_acs_user': {
    parameters: { acs_user_id: string; user_identity_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/user_identities/revoke_access_to_device': {
    parameters: { device_id: string; user_identity_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/user_identities/unmanaged/get': {
    parameters: { user_identity_id: string }
    result: ResourceUnmanagedUserIdentity
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/user_identities/unmanaged/list': {
    parameters: {
      created_before?: string
      limit?: number
      page_cursor?: string | null
      search?: string
    }
    result: Array<ResourceUnmanagedUserIdentity>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/user_identities/unmanaged/update': {
    parameters: {
      is_managed: boolean
      user_identity_id: string
      user_identity_key?: string
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/user_identities/update': {
    parameters: {
      email_address?: string | null
      full_name?: string | null
      phone_number?: string | null
      user_identity_id: string
      user_identity_key?: string | null
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/webhooks/create': {
    parameters: { event_types?: Array<string>; url: string }
    result: ResourceWebhook
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/webhooks/delete': {
    parameters: { webhook_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/webhooks/get': {
    parameters: { webhook_id: string }
    result: ResourceWebhook
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/webhooks/list': {
    parameters: Record<string, never>
    result: Array<ResourceWebhook>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/webhooks/update': {
    parameters: { event_types: Array<string>; webhook_id: string }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/workspaces/create': {
    parameters: {
      company_name?: string
      connect_partner_name?: string | null
      connect_webview_customization?: {
        logo_shape?: 'circle' | 'square' | null
        primary_button_color?: string | null
        primary_button_text_color?: string | null
        success_message?: string | null
      }
      is_sandbox?: boolean
      name: string
      organization_id?: string
      webview_logo_shape?: 'circle' | 'square'
      webview_primary_button_color?: string
      webview_primary_button_text_color?: string
      webview_success_message?: string
    }
    result: ResourceWorkspace
    kind: 'mutation'
    workspaceScope: 'none'
    actionAttempt: false
  }
  '/workspaces/customization_profiles/create': {
    parameters: {
      customer_portal_theme?: {
        font_family?: string
        mono_font_family?: string
        primary_color?: string
        primary_foreground_color?: string
        secondary_color?: string
        secondary_foreground_color?: string
      }
      message_overrides?: Record<string, unknown>
      name?: string | null
      primary_color?: string
      secondary_color?: string
    }
    result: ResourceCustomizationProfile
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/workspaces/customization_profiles/get': {
    parameters: { customization_profile_id: string }
    result: ResourceCustomizationProfile
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/workspaces/customization_profiles/list': {
    parameters: { customer_key?: string }
    result: Array<ResourceCustomizationProfile>
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/workspaces/customization_profiles/update': {
    parameters: {
      customer_portal_theme?: {
        font_family?: string
        mono_font_family?: string
        primary_color?: string
        primary_foreground_color?: string
        secondary_color?: string
        secondary_foreground_color?: string
      } | null
      customization_profile_id: string
      message_overrides?: Record<string, unknown> | null
      name?: string | null
      primary_color?: string
      secondary_color?: string
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/workspaces/customization_profiles/upload_images': {
    parameters: Record<string, never>
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/workspaces/find_anything': {
    parameters: { search: string }
    result: unknown
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/workspaces/get': {
    parameters: Record<string, never>
    result: ResourceWorkspace
    kind: 'query'
    workspaceScope: 'required'
    actionAttempt: false
  }
  '/workspaces/list': {
    parameters: Record<string, never>
    result: Array<ResourceWorkspace>
    kind: 'query'
    workspaceScope: 'optional'
    actionAttempt: false
  }
  '/workspaces/reset_sandbox': {
    parameters: Record<string, never>
    result: ResourceActionAttempt
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: true
  }
  '/workspaces/update': {
    parameters: {
      connect_partner_name?: string
      connect_webview_customization?: {
        logo_shape?: 'circle' | 'square' | null
        primary_button_color?: string | null
        primary_button_text_color?: string | null
        success_message?: string | null
      }
      is_publishable_key_auth_enabled?: boolean
      is_suspended?: boolean
      name?: string
      organization_id?: string
    }
    result: undefined
    kind: 'mutation'
    workspaceScope: 'required'
    actionAttempt: false
  }
}

export const seamEndpointManifest = {
  '/access_codes/create': {
    path: '/access_codes/create',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'access_code',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_codes/create_multiple': {
    path: '/access_codes/create_multiple',
    kind: 'mutation',
    method: 'PUT',
    requestPlacement: 'body',
    responseKey: 'access_codes',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_ids'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_codes/delete': {
    path: '/access_codes/delete',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_code_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_codes/generate_code': {
    path: '/access_codes/generate_code',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'generated_code',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_codes/get': {
    path: '/access_codes/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'access_code',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_codes/get_timeline': {
    path: '/access_codes/get_timeline',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'timeline_events',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_code_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_codes/list': {
    path: '/access_codes/list',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'access_codes',
    pagination: { responseKey: 'pagination' },
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_codes/pull_backup_access_code': {
    path: '/access_codes/pull_backup_access_code',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'access_code',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_code_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_codes/report_device_constraints': {
    path: '/access_codes/report_device_constraints',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_codes/simulate/create_unmanaged_access_code': {
    path: '/access_codes/simulate/create_unmanaged_access_code',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'access_code',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['code', 'device_id', 'name'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_codes/unmanaged/convert_to_managed': {
    path: '/access_codes/unmanaged/convert_to_managed',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_code_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_codes/unmanaged/delete': {
    path: '/access_codes/unmanaged/delete',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_code_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_codes/unmanaged/get': {
    path: '/access_codes/unmanaged/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'access_code',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_codes/unmanaged/list': {
    path: '/access_codes/unmanaged/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'access_codes',
    pagination: { responseKey: 'pagination' },
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_codes/unmanaged/update': {
    path: '/access_codes/unmanaged/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_code_id', 'is_managed'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_codes/update': {
    path: '/access_codes/update',
    kind: 'mutation',
    method: 'PUT',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_code_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_codes/update_multiple': {
    path: '/access_codes/update_multiple',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['common_code_key'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_grants/create': {
    path: '/access_grants/create',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'access_grant',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['requested_access_methods'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_grants/delete': {
    path: '/access_grants/delete',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_grant_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_grants/get': {
    path: '/access_grants/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'access_grant',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_grants/get_related': {
    path: '/access_grants/get_related',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'batch',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_grants/list': {
    path: '/access_grants/list',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'access_grants',
    pagination: { responseKey: 'pagination' },
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_grants/request_access_methods': {
    path: '/access_grants/request_access_methods',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'access_grant',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_grant_id', 'requested_access_methods'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_grants/unmanaged/get': {
    path: '/access_grants/unmanaged/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'access_grant',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_grant_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_grants/unmanaged/list': {
    path: '/access_grants/unmanaged/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'access_grants',
    pagination: { responseKey: 'pagination' },
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_grants/unmanaged/update': {
    path: '/access_grants/unmanaged/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_grant_id', 'is_managed'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_grants/update': {
    path: '/access_grants/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_methods/assign_card': {
    path: '/access_methods/assign_card',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_method_id', 'card_number'],
    actionAttempt: { type: 'ASSIGN_CREDENTIAL', responseKey: 'action_attempt' },
    workspaceScope: 'required',
  },
  '/access_methods/delete': {
    path: '/access_methods/delete',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_methods/encode': {
    path: '/access_methods/encode',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_method_id', 'acs_encoder_id'],
    actionAttempt: { type: 'ENCODE_CREDENTIAL', responseKey: 'action_attempt' },
    workspaceScope: 'required',
  },
  '/access_methods/get': {
    path: '/access_methods/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'access_method',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_method_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_methods/get_related': {
    path: '/access_methods/get_related',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'batch',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_method_ids'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_methods/list': {
    path: '/access_methods/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'access_methods',
    pagination: { responseKey: 'pagination' },
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_methods/unlock_door': {
    path: '/access_methods/unlock_door',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_method_id', 'acs_entrance_id'],
    actionAttempt: { type: 'UNLOCK_DOOR', responseKey: 'action_attempt' },
    workspaceScope: 'required',
  },
  '/access_methods/unmanaged/get': {
    path: '/access_methods/unmanaged/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'access_method',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_method_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/access_methods/unmanaged/list': {
    path: '/access_methods/unmanaged/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'access_methods',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_grant_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/access_groups/add_user': {
    path: '/acs/access_groups/add_user',
    kind: 'mutation',
    method: 'PUT',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_access_group_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/access_groups/delete': {
    path: '/acs/access_groups/delete',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_access_group_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/access_groups/get': {
    path: '/acs/access_groups/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_access_group',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_access_group_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/access_groups/list': {
    path: '/acs/access_groups/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_access_groups',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/access_groups/list_accessible_entrances': {
    path: '/acs/access_groups/list_accessible_entrances',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_entrances',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_access_group_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/access_groups/list_users': {
    path: '/acs/access_groups/list_users',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_users',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_access_group_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/access_groups/remove_user': {
    path: '/acs/access_groups/remove_user',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_access_group_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/access_groups/unmanaged/get': {
    path: '/acs/access_groups/unmanaged/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_access_group',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_access_group_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/access_groups/unmanaged/list': {
    path: '/acs/access_groups/unmanaged/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_access_groups',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/credential_pools/list': {
    path: '/acs/credential_pools/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_credential_pools',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_system_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/credential_provisioning_automations/launch': {
    path: '/acs/credential_provisioning_automations/launch',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'acs_credential_provisioning_automation',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [
      'credential_manager_acs_system_id',
      'user_identity_id',
    ],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/credentials/assign': {
    path: '/acs/credentials/assign',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_credential_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/credentials/create': {
    path: '/acs/credentials/create',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'acs_credential',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_method'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/credentials/create_offline_code': {
    path: '/acs/credentials/create_offline_code',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'acs_credential',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_user_id', 'allowed_acs_entrance_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/credentials/delete': {
    path: '/acs/credentials/delete',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_credential_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/credentials/get': {
    path: '/acs/credentials/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_credential',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_credential_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/credentials/list': {
    path: '/acs/credentials/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_credentials',
    pagination: { responseKey: 'pagination' },
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/credentials/list_accessible_entrances': {
    path: '/acs/credentials/list_accessible_entrances',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_entrances',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_credential_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/credentials/unassign': {
    path: '/acs/credentials/unassign',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_credential_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/credentials/unmanaged/get': {
    path: '/acs/credentials/unmanaged/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_credential',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_credential_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/credentials/unmanaged/list': {
    path: '/acs/credentials/unmanaged/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_credentials',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/credentials/update': {
    path: '/acs/credentials/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_credential_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/encoders/encode_credential': {
    path: '/acs/encoders/encode_credential',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_encoder_id'],
    actionAttempt: { type: 'ENCODE_CREDENTIAL', responseKey: 'action_attempt' },
    workspaceScope: 'required',
  },
  '/acs/encoders/get': {
    path: '/acs/encoders/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_encoder',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_encoder_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/encoders/list': {
    path: '/acs/encoders/list',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'acs_encoders',
    pagination: { responseKey: 'pagination' },
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/encoders/scan_credential': {
    path: '/acs/encoders/scan_credential',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_encoder_id'],
    actionAttempt: { type: 'SCAN_CREDENTIAL', responseKey: 'action_attempt' },
    workspaceScope: 'required',
  },
  '/acs/encoders/scan_to_assign_credential': {
    path: '/acs/encoders/scan_to_assign_credential',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_encoder_id'],
    actionAttempt: {
      type: 'SCAN_TO_ASSIGN_CREDENTIAL',
      responseKey: 'action_attempt',
    },
    workspaceScope: 'required',
  },
  '/acs/encoders/simulate/next_credential_encode_will_fail': {
    path: '/acs/encoders/simulate/next_credential_encode_will_fail',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_encoder_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/encoders/simulate/next_credential_encode_will_succeed': {
    path: '/acs/encoders/simulate/next_credential_encode_will_succeed',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_encoder_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/encoders/simulate/next_credential_scan_will_fail': {
    path: '/acs/encoders/simulate/next_credential_scan_will_fail',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_encoder_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/encoders/simulate/next_credential_scan_will_succeed': {
    path: '/acs/encoders/simulate/next_credential_scan_will_succeed',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_encoder_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/entrances/get': {
    path: '/acs/entrances/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_entrance',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_entrance_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/entrances/grant_access': {
    path: '/acs/entrances/grant_access',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_entrance_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/entrances/list': {
    path: '/acs/entrances/list',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'acs_entrances',
    pagination: { responseKey: 'pagination' },
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/entrances/list_credentials_with_access': {
    path: '/acs/entrances/list_credentials_with_access',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'acs_credentials',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_entrance_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/entrances/unlock': {
    path: '/acs/entrances/unlock',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_credential_id', 'acs_entrance_id'],
    actionAttempt: { type: 'UNLOCK_DOOR', responseKey: 'action_attempt' },
    workspaceScope: 'required',
  },
  '/acs/systems/get': {
    path: '/acs/systems/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_system',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_system_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/systems/list': {
    path: '/acs/systems/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_systems',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/systems/list_compatible_credential_manager_acs_systems': {
    path: '/acs/systems/list_compatible_credential_manager_acs_systems',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_systems',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_system_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/systems/report_devices': {
    path: '/acs/systems/report_devices',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_system_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/users/add_to_access_group': {
    path: '/acs/users/add_to_access_group',
    kind: 'mutation',
    method: 'PUT',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_access_group_id', 'acs_user_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/users/create': {
    path: '/acs/users/create',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'acs_user',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_system_id', 'full_name'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/users/delete': {
    path: '/acs/users/delete',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/users/get': {
    path: '/acs/users/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_user',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/users/list': {
    path: '/acs/users/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_users',
    pagination: { responseKey: 'pagination' },
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/users/list_accessible_entrances': {
    path: '/acs/users/list_accessible_entrances',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_entrances',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/users/remove_from_access_group': {
    path: '/acs/users/remove_from_access_group',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_access_group_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/users/revoke_access_to_all_entrances': {
    path: '/acs/users/revoke_access_to_all_entrances',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/users/suspend': {
    path: '/acs/users/suspend',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/users/unmanaged/get': {
    path: '/acs/users/unmanaged/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_user',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_user_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/users/unmanaged/list': {
    path: '/acs/users/unmanaged/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_users',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/users/unsuspend': {
    path: '/acs/users/unsuspend',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/acs/users/update': {
    path: '/acs/users/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/action_attempts/get': {
    path: '/action_attempts/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['action_attempt_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/action_attempts/list': {
    path: '/action_attempts/list',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempts',
    pagination: { responseKey: 'pagination' },
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/bridges/get': {
    path: '/bridges/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'bridge',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['bridge_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/bridges/list': {
    path: '/bridges/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'bridges',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/client_sessions/create': {
    path: '/client_sessions/create',
    kind: 'mutation',
    method: 'PUT',
    requestPlacement: 'body',
    responseKey: 'client_session',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/client_sessions/delete': {
    path: '/client_sessions/delete',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['client_session_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/client_sessions/get': {
    path: '/client_sessions/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'client_session',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/client_sessions/get_or_create': {
    path: '/client_sessions/get_or_create',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'client_session',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/client_sessions/grant_access': {
    path: '/client_sessions/grant_access',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/client_sessions/list': {
    path: '/client_sessions/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'client_sessions',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/client_sessions/revoke': {
    path: '/client_sessions/revoke',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['client_session_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/connect_webviews/create': {
    path: '/connect_webviews/create',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'connect_webview',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/connect_webviews/delete': {
    path: '/connect_webviews/delete',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['connect_webview_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/connect_webviews/get': {
    path: '/connect_webviews/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'connect_webview',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['connect_webview_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/connect_webviews/list': {
    path: '/connect_webviews/list',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'connect_webviews',
    pagination: { responseKey: 'pagination' },
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/connected_accounts/delete': {
    path: '/connected_accounts/delete',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['connected_account_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/connected_accounts/get': {
    path: '/connected_accounts/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'connected_account',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/connected_accounts/list': {
    path: '/connected_accounts/list',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'connected_accounts',
    pagination: { responseKey: 'pagination' },
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/connected_accounts/simulate/disconnect': {
    path: '/connected_accounts/simulate/disconnect',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['connected_account_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/connected_accounts/sync': {
    path: '/connected_accounts/sync',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['connected_account_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/connected_accounts/update': {
    path: '/connected_accounts/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['connected_account_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/customers/create_portal': {
    path: '/customers/create_portal',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'customer_portal',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/customers/delete_data': {
    path: '/customers/delete_data',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/customers/push_data': {
    path: '/customers/push_data',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['customer_key'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/customers/reservations/create_deep_link': {
    path: '/customers/reservations/create_deep_link',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'deep_link',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['customer_key', 'reservation_key'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/devices/delete': {
    path: '/devices/delete',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/devices/get': {
    path: '/devices/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'device',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/devices/list': {
    path: '/devices/list',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'devices',
    pagination: { responseKey: 'pagination' },
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/devices/list_device_providers': {
    path: '/devices/list_device_providers',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'device_providers',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/devices/report_provider_metadata': {
    path: '/devices/report_provider_metadata',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['devices'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/devices/simulate/connect': {
    path: '/devices/simulate/connect',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/devices/simulate/connect_to_hub': {
    path: '/devices/simulate/connect_to_hub',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/devices/simulate/disconnect': {
    path: '/devices/simulate/disconnect',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/devices/simulate/disconnect_from_hub': {
    path: '/devices/simulate/disconnect_from_hub',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/devices/simulate/paid_subscription': {
    path: '/devices/simulate/paid_subscription',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id', 'is_expired'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/devices/simulate/remove': {
    path: '/devices/simulate/remove',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/devices/unmanaged/get': {
    path: '/devices/unmanaged/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'device',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/devices/unmanaged/list': {
    path: '/devices/unmanaged/list',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'devices',
    pagination: { responseKey: 'pagination' },
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/devices/unmanaged/update': {
    path: '/devices/unmanaged/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/devices/update': {
    path: '/devices/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/events/get': {
    path: '/events/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'event',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/events/list': {
    path: '/events/list',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'events',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/experimental/widgets/get_branch_widget': {
    path: '/experimental/widgets/get_branch_widget',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'branch_widget',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['branch_widget_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/experimental/widgets/internal_probe': {
    path: '/experimental/widgets/internal_probe',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'branch_widget',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['branch_widget_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/instant_keys/delete': {
    path: '/instant_keys/delete',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['instant_key_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/instant_keys/get': {
    path: '/instant_keys/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'instant_key',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/instant_keys/list': {
    path: '/instant_keys/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'instant_keys',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/locks/configure_auto_lock': {
    path: '/locks/configure_auto_lock',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['auto_lock_enabled', 'device_id'],
    actionAttempt: {
      type: 'CONFIGURE_AUTO_LOCK',
      responseKey: 'action_attempt',
    },
    workspaceScope: 'required',
  },
  '/locks/get': {
    path: '/locks/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'device',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/locks/list': {
    path: '/locks/list',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'devices',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/locks/lock_door': {
    path: '/locks/lock_door',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: { type: 'LOCK_DOOR', responseKey: 'action_attempt' },
    workspaceScope: 'required',
  },
  '/locks/simulate/keypad_code_entry': {
    path: '/locks/simulate/keypad_code_entry',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['code', 'device_id'],
    actionAttempt: {
      type: 'SIMULATE_KEYPAD_CODE_ENTRY',
      responseKey: 'action_attempt',
    },
    workspaceScope: 'required',
  },
  '/locks/simulate/manual_lock_via_keypad': {
    path: '/locks/simulate/manual_lock_via_keypad',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: {
      type: 'SIMULATE_MANUAL_LOCK_VIA_KEYPAD',
      responseKey: 'action_attempt',
    },
    workspaceScope: 'required',
  },
  '/locks/unlock_door': {
    path: '/locks/unlock_door',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: { type: 'UNLOCK_DOOR', responseKey: 'action_attempt' },
    workspaceScope: 'required',
  },
  '/noise_sensors/list': {
    path: '/noise_sensors/list',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'devices',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/noise_sensors/noise_thresholds/create': {
    path: '/noise_sensors/noise_thresholds/create',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'noise_threshold',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id', 'ends_daily_at', 'starts_daily_at'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/noise_sensors/noise_thresholds/delete': {
    path: '/noise_sensors/noise_thresholds/delete',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id', 'noise_threshold_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/noise_sensors/noise_thresholds/get': {
    path: '/noise_sensors/noise_thresholds/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'noise_threshold',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['noise_threshold_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/noise_sensors/noise_thresholds/list': {
    path: '/noise_sensors/noise_thresholds/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'noise_thresholds',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/noise_sensors/noise_thresholds/update': {
    path: '/noise_sensors/noise_thresholds/update',
    kind: 'mutation',
    method: 'PUT',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id', 'noise_threshold_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/noise_sensors/simulate/trigger_noise_threshold': {
    path: '/noise_sensors/simulate/trigger_noise_threshold',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/phones/deactivate': {
    path: '/phones/deactivate',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/phones/get': {
    path: '/phones/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'phone',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/phones/list': {
    path: '/phones/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'phones',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/phones/simulate/create_sandbox_phone': {
    path: '/phones/simulate/create_sandbox_phone',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'phone',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['user_identity_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/bridge/v1/bridge_client_sessions/create': {
    path: '/seam/bridge/v1/bridge_client_sessions/create',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'bridge_client_session',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [
      'bridge_client_machine_identifier_key',
      'bridge_client_name',
      'bridge_client_time_zone',
    ],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/bridge/v1/bridge_client_sessions/get': {
    path: '/seam/bridge/v1/bridge_client_sessions/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'bridge_client_session',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/bridge/v1/bridge_client_sessions/refresh_tailscale_auth_key': {
    path: '/seam/bridge/v1/bridge_client_sessions/refresh_tailscale_auth_key',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'bridge_client_session',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/bridge/v1/bridge_client_sessions/refresh_telemetry_token': {
    path: '/seam/bridge/v1/bridge_client_sessions/refresh_telemetry_token',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'bridge_client_session',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/bridge/v1/bridge_client_sessions/regenerate_pairing_code': {
    path: '/seam/bridge/v1/bridge_client_sessions/regenerate_pairing_code',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'bridge_client_session',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/bridge/v1/bridge_client_sessions/report_status': {
    path: '/seam/bridge/v1/bridge_client_sessions/report_status',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['is_tailscale_connected', 'tailscale_ip_v4'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/bridge/v1/bridge_connected_systems/list': {
    path: '/seam/bridge/v1/bridge_connected_systems/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'bridge_connected_systems',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/connect_webview/v1/get_current_pane': {
    path: '/seam/connect_webview/v1/get_current_pane',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'pane',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['connect_webview_id'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/connect_webview/v1/reset': {
    path: '/seam/connect_webview/v1/reset',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'ok',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['connect_webview_id'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/connect_webview/v1/submit': {
    path: '/seam/connect_webview/v1/submit',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'ok',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['connect_webview_id'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/console/v1/get_resource_locator': {
    path: '/seam/console/v1/get_resource_locator',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'resource_locator',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/console/v1/lynx_migration/get_property_migration_status': {
    path: '/seam/console/v1/lynx_migration/get_property_migration_status',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'lynx_migration_property_run',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['space_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/console/v1/lynx_migration/get_reservation_migration_status': {
    path: '/seam/console/v1/lynx_migration/get_reservation_migration_status',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'lynx_migration_reservation_run',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_grant_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/console/v1/lynx_migration/list_property_reservations': {
    path: '/seam/console/v1/lynx_migration/list_property_reservations',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'lynx_migration_property_plan',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['space_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/console/v1/lynx_migration/migrate_property': {
    path: '/seam/console/v1/lynx_migration/migrate_property',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'lynx_migration_property_run',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['space_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/console/v1/organizations/create': {
    path: '/seam/console/v1/organizations/create',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'organization',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['name'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/console/v1/organizations/customization_profiles/copy': {
    path: '/seam/console/v1/organizations/customization_profiles/copy',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'customization_profile',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [
      'destination_workspace_id',
      'source_customization_profile_id',
      'source_workspace_id',
    ],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/console/v1/organizations/delete': {
    path: '/seam/console/v1/organizations/delete',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'organization',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['organization_id'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/console/v1/organizations/get': {
    path: '/seam/console/v1/organizations/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'organization',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['organization_id'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/console/v1/organizations/invitations/revoke': {
    path: '/seam/console/v1/organizations/invitations/revoke',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'organization_invitation',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['organization_invitation_id'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/console/v1/organizations/list': {
    path: '/seam/console/v1/organizations/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'organizations',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/console/v1/organizations/members/add': {
    path: '/seam/console/v1/organizations/members/add',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['email', 'organization_id'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/console/v1/organizations/members/remove': {
    path: '/seam/console/v1/organizations/members/remove',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['organization_id', 'user_id'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/console/v1/organizations/members/update': {
    path: '/seam/console/v1/organizations/members/update',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'organization_member',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['organization_id', 'role', 'user_id'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/console/v1/organizations/members/workspaces/grant': {
    path: '/seam/console/v1/organizations/members/workspaces/grant',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['organization_id', 'user_id', 'workspace_id'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/console/v1/organizations/members/workspaces/list': {
    path: '/seam/console/v1/organizations/members/workspaces/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'workspaces',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['organization_id', 'user_id'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/console/v1/organizations/members/workspaces/revoke': {
    path: '/seam/console/v1/organizations/members/workspaces/revoke',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['organization_id', 'user_id', 'workspace_id'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/console/v1/organizations/update': {
    path: '/seam/console/v1/organizations/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    responseKey: 'organization',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['organization_id'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/console/v1/organizations/upload_logo': {
    path: '/seam/console/v1/organizations/upload_logo',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'organization',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/console/v1/organizations/workspaces/create': {
    path: '/seam/console/v1/organizations/workspaces/create',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'workspace',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['name', 'organization_id'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/console/v1/organizations/workspaces/remove': {
    path: '/seam/console/v1/organizations/workspaces/remove',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['workspace_id'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/console/v1/organizations/workspaces/update': {
    path: '/seam/console/v1/organizations/workspaces/update',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'workspace',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['name', 'workspace_id'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/console/v1/sites/create': {
    path: '/seam/console/v1/sites/create',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'site',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['name'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/console/v1/sites/delete': {
    path: '/seam/console/v1/sites/delete',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['site_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/console/v1/sites/list': {
    path: '/seam/console/v1/sites/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'sites',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/console/v1/sites/update': {
    path: '/seam/console/v1/sites/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    responseKey: 'site',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['site_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/console/v1/timelines/get': {
    path: '/seam/console/v1/timelines/get',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'timeline',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['resource_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/console/v1/workspace/feature_flags/list': {
    path: '/seam/console/v1/workspace/feature_flags/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'feature_flags',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/console/v1/workspace/feature_flags/update': {
    path: '/seam/console/v1/workspace/feature_flags/update',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'feature_flag',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['enabled', 'feature_flag_name'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/access_grants/list': {
    path: '/seam/customer/v1/access_grants/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'access_grants',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/access_grants/update': {
    path: '/seam/customer/v1/access_grants/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_grant_id', 'space_ids'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/access_methods/encode': {
    path: '/seam/customer/v1/access_methods/encode',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['access_method_id', 'acs_encoder_id'],
    actionAttempt: { type: 'ENCODE_CREDENTIAL', responseKey: 'action_attempt' },
    workspaceScope: 'required',
  },
  '/seam/customer/v1/automation_runs/list': {
    path: '/seam/customer/v1/automation_runs/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'automation_runs',
    pagination: { responseKey: 'pagination' },
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/automations/delete': {
    path: '/seam/customer/v1/automations/delete',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/automations/get': {
    path: '/seam/customer/v1/automations/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/automations/update': {
    path: '/seam/customer/v1/automations/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/connector_customers/list': {
    path: '/seam/customer/v1/connector_customers/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'connector_customers',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/connectors/authorize': {
    path: '/seam/customer/v1/connectors/authorize',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'connector_authorize',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['slug'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/customer/v1/connectors/connector_types': {
    path: '/seam/customer/v1/connectors/connector_types',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'connector_types',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/connectors/create': {
    path: '/seam/customer/v1/connectors/create',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'connector',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['config', 'connector_type'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/connectors/delete': {
    path: '/seam/customer/v1/connectors/delete',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'connector',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['connector_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/connectors/external_sites/list': {
    path: '/seam/customer/v1/connectors/external_sites/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'external_sites',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['connected_account_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/connectors/ical/validate-config': {
    path: '/seam/customer/v1/connectors/ical/validate-config',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'validation_result',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['ical_config', 'ical_url'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/connectors/list': {
    path: '/seam/customer/v1/connectors/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'connectors',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/connectors/sync': {
    path: '/seam/customer/v1/connectors/sync',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'connector_sync',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['connector_id', 'connector_type', 'customer_key'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/connectors/update': {
    path: '/seam/customer/v1/connectors/update',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'connector',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['config', 'connector_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/customers/automations/get': {
    path: '/seam/customer/v1/customers/automations/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'automation',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/customers/automations/update': {
    path: '/seam/customer/v1/customers/automations/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/customers/list': {
    path: '/seam/customer/v1/customers/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'customers',
    pagination: { responseKey: 'pagination' },
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/customers/me': {
    path: '/seam/customer/v1/customers/me',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/customers/open_portal': {
    path: '/seam/customer/v1/customers/open_portal',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'magic_link',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['customer_key'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/encoders/list': {
    path: '/seam/customer/v1/encoders/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'encoders',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/events/list': {
    path: '/seam/customer/v1/events/list',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'events',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['space_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/portals/get': {
    path: '/seam/customer/v1/portals/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'customer_portal',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['customer_portal_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/portals/update': {
    path: '/seam/customer/v1/portals/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['customer_portal_id', 'portal_configuration'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/reservations/get': {
    path: '/seam/customer/v1/reservations/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'reservation',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/reservations/list': {
    path: '/seam/customer/v1/reservations/list',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'reservations',
    pagination: { responseKey: 'pagination' },
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/reservations/list_access_grants': {
    path: '/seam/customer/v1/reservations/list_access_grants',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'access_grants',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['reservation_key'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/settings/business_verticals/list': {
    path: '/seam/customer/v1/settings/business_verticals/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'business_verticals',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/customer/v1/settings/get': {
    path: '/seam/customer/v1/settings/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'business_vertical',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/settings/update': {
    path: '/seam/customer/v1/settings/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/settings/vertical_resource_aliases/get': {
    path: '/seam/customer/v1/settings/vertical_resource_aliases/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'vertical_resource_aliases',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/spaces/create': {
    path: '/seam/customer/v1/spaces/create',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'space',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['name'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/spaces/list': {
    path: '/seam/customer/v1/spaces/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'spaces',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/spaces/list_reservations': {
    path: '/seam/customer/v1/spaces/list_reservations',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'reservations',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['space_key'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/spaces/push_common_areas': {
    path: '/seam/customer/v1/spaces/push_common_areas',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/staff_members/get': {
    path: '/seam/customer/v1/staff_members/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'staff_member',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['staff_member_key'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/customer/v1/staff_members/list': {
    path: '/seam/customer/v1/staff_members/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'staff_members',
    pagination: { responseKey: 'pagination' },
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/instant_key/v1/client_sessions/exchange_short_code': {
    path: '/seam/instant_key/v1/client_sessions/exchange_short_code',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'client_session',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['short_code'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/instant_key/v1/preview/get': {
    path: '/seam/instant_key/v1/preview/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'instant_key_preview',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['instant_key_url'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/mcp/v1/create_ro_token': {
    path: '/seam/mcp/v1/create_ro_token',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'support_read_only_token',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['workspace_id'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/seam/mobile_sdk/v1/acs/credentials/list': {
    path: '/seam/mobile_sdk/v1/acs/credentials/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_credentials',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/mobile_sdk/v1/phone_sessions/get_or_create': {
    path: '/seam/mobile_sdk/v1/phone_sessions/get_or_create',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'phone_session',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['custom_sdk_installation_id', 'phone_os'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/mobile_sdk/v1/report_salto_space_audit_trail': {
    path: '/seam/mobile_sdk/v1/report_salto_space_audit_trail',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_system_id', 'salto_space_metadata'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/partner/v1/building_blocks/spaces/auto_map': {
    path: '/seam/partner/v1/building_blocks/spaces/auto_map',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'spaces',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/seam/webhooks/[provider]/[subscription_id]': {
    path: '/seam/webhooks/[provider]/[subscription_id]',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/spaces/add_acs_entrances': {
    path: '/spaces/add_acs_entrances',
    kind: 'mutation',
    method: 'PUT',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_entrance_ids', 'space_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/spaces/add_connected_account': {
    path: '/spaces/add_connected_account',
    kind: 'mutation',
    method: 'PUT',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['connected_account_id', 'space_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/spaces/add_devices': {
    path: '/spaces/add_devices',
    kind: 'mutation',
    method: 'PUT',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_ids', 'space_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/spaces/create': {
    path: '/spaces/create',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'space',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['name'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/spaces/delete': {
    path: '/spaces/delete',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['space_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/spaces/get': {
    path: '/spaces/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'space',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/spaces/get_related': {
    path: '/spaces/get_related',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'batch',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/spaces/list': {
    path: '/spaces/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'spaces',
    pagination: { responseKey: 'pagination' },
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/spaces/remove_acs_entrances': {
    path: '/spaces/remove_acs_entrances',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_entrance_ids', 'space_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/spaces/remove_connected_account': {
    path: '/spaces/remove_connected_account',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['connected_account_id', 'space_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/spaces/remove_devices': {
    path: '/spaces/remove_devices',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_ids', 'space_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/spaces/update': {
    path: '/spaces/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    responseKey: 'space',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/thermostats/activate_climate_preset': {
    path: '/thermostats/activate_climate_preset',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['climate_preset_key', 'device_id'],
    actionAttempt: {
      type: 'ACTIVATE_CLIMATE_PRESET',
      responseKey: 'action_attempt',
    },
    workspaceScope: 'required',
  },
  '/thermostats/cool': {
    path: '/thermostats/cool',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: { type: 'SET_HVAC_MODE', responseKey: 'action_attempt' },
    workspaceScope: 'required',
  },
  '/thermostats/create_climate_preset': {
    path: '/thermostats/create_climate_preset',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['climate_preset_key', 'device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/thermostats/daily_programs/create': {
    path: '/thermostats/daily_programs/create',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'thermostat_daily_program',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id', 'name', 'periods'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/thermostats/daily_programs/delete': {
    path: '/thermostats/daily_programs/delete',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['thermostat_daily_program_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/thermostats/daily_programs/update': {
    path: '/thermostats/daily_programs/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['name', 'periods', 'thermostat_daily_program_id'],
    actionAttempt: {
      type: 'PUSH_THERMOSTAT_PROGRAMS',
      responseKey: 'action_attempt',
    },
    workspaceScope: 'required',
  },
  '/thermostats/delete_climate_preset': {
    path: '/thermostats/delete_climate_preset',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['climate_preset_key', 'device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/thermostats/get': {
    path: '/thermostats/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'thermostat',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/thermostats/heat': {
    path: '/thermostats/heat',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: { type: 'SET_HVAC_MODE', responseKey: 'action_attempt' },
    workspaceScope: 'required',
  },
  '/thermostats/heat_cool': {
    path: '/thermostats/heat_cool',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: { type: 'SET_HVAC_MODE', responseKey: 'action_attempt' },
    workspaceScope: 'required',
  },
  '/thermostats/list': {
    path: '/thermostats/list',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'devices',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/thermostats/off': {
    path: '/thermostats/off',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: { type: 'SET_HVAC_MODE', responseKey: 'action_attempt' },
    workspaceScope: 'required',
  },
  '/thermostats/schedules/create': {
    path: '/thermostats/schedules/create',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'thermostat_schedule',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [
      'climate_preset_key',
      'device_id',
      'ends_at',
      'starts_at',
    ],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/thermostats/schedules/delete': {
    path: '/thermostats/schedules/delete',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['thermostat_schedule_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/thermostats/schedules/get': {
    path: '/thermostats/schedules/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'thermostat_schedule',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['thermostat_schedule_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/thermostats/schedules/list': {
    path: '/thermostats/schedules/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'thermostat_schedules',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/thermostats/schedules/update': {
    path: '/thermostats/schedules/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['thermostat_schedule_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/thermostats/set_fallback_climate_preset': {
    path: '/thermostats/set_fallback_climate_preset',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['climate_preset_key', 'device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/thermostats/set_fan_mode': {
    path: '/thermostats/set_fan_mode',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: { type: 'SET_FAN_MODE', responseKey: 'action_attempt' },
    workspaceScope: 'required',
  },
  '/thermostats/set_hvac_mode': {
    path: '/thermostats/set_hvac_mode',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id', 'hvac_mode_setting'],
    actionAttempt: { type: 'SET_HVAC_MODE', responseKey: 'action_attempt' },
    workspaceScope: 'required',
  },
  '/thermostats/set_temperature_threshold': {
    path: '/thermostats/set_temperature_threshold',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/thermostats/simulate/hvac_mode_adjusted': {
    path: '/thermostats/simulate/hvac_mode_adjusted',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id', 'hvac_mode'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/thermostats/simulate/temperature_reached': {
    path: '/thermostats/simulate/temperature_reached',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/thermostats/update_climate_preset': {
    path: '/thermostats/update_climate_preset',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['climate_preset_key', 'device_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/thermostats/update_weekly_program': {
    path: '/thermostats/update_weekly_program',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id'],
    actionAttempt: {
      type: 'PUSH_THERMOSTAT_PROGRAMS',
      responseKey: 'action_attempt',
    },
    workspaceScope: 'required',
  },
  '/unstable_partner/building_blocks/connect_accounts': {
    path: '/unstable_partner/building_blocks/connect_accounts',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'magic_link',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['customer_key'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/unstable_partner/building_blocks/generate_magic_link': {
    path: '/unstable_partner/building_blocks/generate_magic_link',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'magic_link',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['building_block_type', 'customer_key'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/unstable_partner/building_blocks/manage_devices': {
    path: '/unstable_partner/building_blocks/manage_devices',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'magic_link',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['customer_key'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/unstable_partner/building_blocks/organize_spaces': {
    path: '/unstable_partner/building_blocks/organize_spaces',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'magic_link',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['customer_key'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/user_identities/add_acs_user': {
    path: '/user_identities/add_acs_user',
    kind: 'mutation',
    method: 'PUT',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_user_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/user_identities/create': {
    path: '/user_identities/create',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'user_identity',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/user_identities/delete': {
    path: '/user_identities/delete',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['user_identity_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/user_identities/enrollment_automations/delete': {
    path: '/user_identities/enrollment_automations/delete',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['enrollment_automation_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/user_identities/enrollment_automations/get': {
    path: '/user_identities/enrollment_automations/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'enrollment_automation',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['enrollment_automation_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/user_identities/enrollment_automations/launch': {
    path: '/user_identities/enrollment_automations/launch',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'enrollment_automation',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [
      'credential_manager_acs_system_id',
      'user_identity_id',
    ],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/user_identities/enrollment_automations/list': {
    path: '/user_identities/enrollment_automations/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'enrollment_automations',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['user_identity_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/user_identities/generate_instant_key': {
    path: '/user_identities/generate_instant_key',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'instant_key',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['user_identity_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/user_identities/get': {
    path: '/user_identities/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'user_identity',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/user_identities/grant_access_to_device': {
    path: '/user_identities/grant_access_to_device',
    kind: 'mutation',
    method: 'PUT',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id', 'user_identity_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/user_identities/list': {
    path: '/user_identities/list',
    kind: 'query',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'user_identities',
    pagination: { responseKey: 'pagination' },
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/user_identities/list_accessible_devices': {
    path: '/user_identities/list_accessible_devices',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'devices',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['user_identity_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/user_identities/list_accessible_entrances': {
    path: '/user_identities/list_accessible_entrances',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_entrances',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['user_identity_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/user_identities/list_acs_systems': {
    path: '/user_identities/list_acs_systems',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_systems',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['user_identity_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/user_identities/list_acs_users': {
    path: '/user_identities/list_acs_users',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'acs_users',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['user_identity_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/user_identities/remove_acs_user': {
    path: '/user_identities/remove_acs_user',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['acs_user_id', 'user_identity_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/user_identities/revoke_access_to_device': {
    path: '/user_identities/revoke_access_to_device',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['device_id', 'user_identity_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/user_identities/unmanaged/get': {
    path: '/user_identities/unmanaged/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'user_identity',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['user_identity_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/user_identities/unmanaged/list': {
    path: '/user_identities/unmanaged/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'user_identities',
    pagination: { responseKey: 'pagination' },
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/user_identities/unmanaged/update': {
    path: '/user_identities/unmanaged/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['is_managed', 'user_identity_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/user_identities/update': {
    path: '/user_identities/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['user_identity_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/webhooks/create': {
    path: '/webhooks/create',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'webhook',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['url'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/webhooks/delete': {
    path: '/webhooks/delete',
    kind: 'mutation',
    method: 'DELETE',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['webhook_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/webhooks/get': {
    path: '/webhooks/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'webhook',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['webhook_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/webhooks/list': {
    path: '/webhooks/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'webhooks',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/webhooks/update': {
    path: '/webhooks/update',
    kind: 'mutation',
    method: 'PUT',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['event_types', 'webhook_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/workspaces/create': {
    path: '/workspaces/create',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'workspace',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['name'],
    actionAttempt: null,
    workspaceScope: 'none',
  },
  '/workspaces/customization_profiles/create': {
    path: '/workspaces/customization_profiles/create',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'customization_profile',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/workspaces/customization_profiles/get': {
    path: '/workspaces/customization_profiles/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'customization_profile',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['customization_profile_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/workspaces/customization_profiles/list': {
    path: '/workspaces/customization_profiles/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'customization_profiles',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/workspaces/customization_profiles/update': {
    path: '/workspaces/customization_profiles/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['customization_profile_id'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/workspaces/customization_profiles/upload_images': {
    path: '/workspaces/customization_profiles/upload_images',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/workspaces/find_anything': {
    path: '/workspaces/find_anything',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'batch',
    pagination: null,
    hasRequiredParameters: true,
    requiredParameterNames: ['search'],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/workspaces/get': {
    path: '/workspaces/get',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'workspace',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
  '/workspaces/list': {
    path: '/workspaces/list',
    kind: 'query',
    method: 'GET',
    requestPlacement: 'params',
    responseKey: 'workspaces',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'optional',
  },
  '/workspaces/reset_sandbox': {
    path: '/workspaces/reset_sandbox',
    kind: 'mutation',
    method: 'POST',
    requestPlacement: 'body',
    responseKey: 'action_attempt',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: {
      type: 'RESET_SANDBOX_WORKSPACE',
      responseKey: 'action_attempt',
    },
    workspaceScope: 'required',
  },
  '/workspaces/update': {
    path: '/workspaces/update',
    kind: 'mutation',
    method: 'PATCH',
    requestPlacement: 'body',
    pagination: null,
    hasRequiredParameters: false,
    requiredParameterNames: [],
    actionAttempt: null,
    workspaceScope: 'required',
  },
} as const satisfies EndpointManifest<GeneratedEndpointTypes>
