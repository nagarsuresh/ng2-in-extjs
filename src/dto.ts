// Generated using typescript-generator version 1.17-SNAPSHOT on 2017-02-24 23:29:20.

export interface LogicalSwitchAggregateInfoListDto extends ListResult {
    results: LogicalSwitchAggregateInfoDto[];
}

export interface LogicalSwitchListParametersDto extends ListRequestParameters {
    switching_profile_id: string;
    transport_type: string;
    transport_zone_id: string;
    diagnostic: boolean;
}

export interface BatchRequest {
    requests: BatchRequestItem[];
    continue_on_error: boolean;
}

export interface BatchParameter {
    atomic: boolean;
}

export interface BatchResponse {
    has_errors: boolean;
    rolled_back: boolean;
    results: BatchResponseItem[];
}

export interface LogicalSwitchAggregateInfoDto {
    logical_switch_desired: LogicalSwitchDto;
    logical_switch_status: LogicalSwitchStatusDto;
    transport_zone: TransportZoneDto;
    switching_profiles: BaseSwitchingProfile[];
    logical_switch_state: LogicalSwitchStateDto;
}

export interface ResourceLink {
    rel: string;
    action: string;
    href: string;
}

export interface SelfResourceLink extends ResourceLink {
}

export interface ListResult extends Resource {
    cursor: string;
    sort_ascending: boolean;
    sort_by: string;
    result_count: number;
}

export interface ListRequestParameters extends IncludedFieldsParameters {
    cursor: string;
    sort_ascending: boolean;
    sort_by: string;
    page_size: number;
}

export interface BatchRequestItem {
    method: string;
    body: any;
    uri: string;
}

export interface BatchResponseItem {
    headers: any;
    code: number;
    body: any;
}

export interface LogicalSwitchDto extends ManagedResource {
    vni: number;
    mac_pool_id: string;
    vlan: number;
    ip_pool_id: string;
    transport_zone_id: string;
    admin_state: string;
    replication_mode: string;
    address_bindings: PacketAddressClassifier[];
    switching_profile_ids: SwitchingProfileTypeIdEntry[];
}

export interface LogicalSwitchStatusDto {
    num_logical_ports: number;
    logical_switch_id: string;
}

export interface TransportZoneDto extends ManagedResource {
    host_switch_name: string;
    transport_type: string;
    transport_zone_profile_ids: TransportZoneProfileTypeIdEntryDto[];
    host_switch_mode: string;
}

export interface BaseSwitchingProfile extends ManagedResource {
    required_capabilities: string[];
}

export interface LogicalSwitchStateDto extends ConfigurationState {
    logical_switch_id: string;
}

export interface Resource {
    _schema: string;
    _links: ResourceLink[];
    _self: SelfResourceLink;
}

export interface IncludedFieldsParameters {
    included_fields: string;
}

export interface Tag {
    scope: string;
    tag: string;
}

export interface PacketAddressClassifier {
    vlan: number;
    mac_address: string;
    ip_address: string;
}

export interface SwitchingProfileTypeIdEntry {
    value: string;
    key: string;
}

export interface ManagedResource extends RevisionedResource {
    resource_type: string;
    description: string;
    id: string;
    display_name: string;
    tags: Tag[];
    _create_time: number;
    _last_modified_user: string;
    _system_owned: boolean;
    _last_modified_time: number;
    _create_user: string;
}

export interface TransportZoneProfileTypeIdEntryDto {
    profile_id: string;
    resource_type: string;
}

export interface ConfigurationStateElement {
    failure_code: number;
    sub_system_address: string;
    sub_system_type: string;
    sub_system_id: string;
    state: string;
    failure_message: string;
}

export interface ConfigurationState {
    failure_code: number;
    details: ConfigurationStateElement[];
    state: string;
    failure_message: string;
}

export interface ServiceProfileDto extends ManagedResource {
}

export interface DneSectionDto extends ManagedResource {
    section_type: string;
    is_default: boolean;
    rule_count: number;
}

export interface SwitchSecuritySwitchingProfileDto extends BaseSwitchingProfile {
    bpdu_filter: BpduFilterDto;
    block_non_ip_traffic: boolean;
    dhcp_filter: DhcpFilterDto;
    rate_limits: RateLimitsDto;
}

export interface CustomerDto extends ManagedResource {
    string_value_pattern: string;
    address: string;
    string_value_length: string;
    ip_addess: string;
    array_value: number[];
    integer_value_required: number;
    snake_case_property: string;
    integer_value_exclusive_min_max: number;
    name: string;
    integer_value_min_max: number;
    integer_value_enum: number;
    string_value_required: string;
    integer_value_divisible: number;
    featureswitch_controlled_property: string;
}

export interface NodeDto extends ManagedResource {
    fqdn: string;
    ip_addresses: string[];
    external_id: string;
    discovered_ip_addresses: string[];
}

export interface HostNodeDto extends NodeDto {
    host_credential: HostNodeLoginCredentialDto;
    os_type: string;
    os_version: string;
    managed_by_server: string;
}

export interface VersionListDto extends ManagedResource {
    acceptable_versions: string[];
}

export interface DhcpProfileDto extends ManagedResource {
    edge_cluster_id: string;
    edge_cluster_member_indexes: number[];
}

export interface LoadBalancerCookiePersistenceProfileDto extends LoadBalancerPersistenceProfileDto {
    cookie_max_life: string;
    cookie_max_idle: string;
    cookie_domain: string;
    cookie_mode: string;
    cookie_path: string;
    cookie_garble: boolean;
    cookie_fallback: boolean;
    cookie_name: string;
    cookie_max_age: string;
}

export interface LoadBalancerServiceDto extends ManagedResource {
    attachment: ResourceReference;
    virtual_server_ids: string[];
    enabled: boolean;
}

export interface LogicalDhcpServerAggregateInfoDto extends LogicalDhcpServerDto {
    static_binding_count: number;
    logical_switch_reference: AggregateInfoReferenceDto;
    logical_port_reference: AggregateInfoReferenceDto;
    dhcp_profile: DhcpProfileDto;
    ip_pool_count: number;
    edge_cluster_members: AggregateInfoReferenceDto[];
}

export interface ComputeManagerInfo extends ManagedResource {
    server: string;
    credential: LoginCredentialUnion;
    origin_properties: KeyValuePair[];
    external_id: string;
    origin_type: string;
}

export interface IpBlockDto extends ManagedResource {
    cidr: string;
}

export interface LoadBalancerApplicationProfileDto extends ManagedResource {
}

export interface LoadBalancerServerSslProfileDto extends ManagedResource {
    ciphers: string[];
    protocols: string[];
    session_cache_enabled: boolean;
}

export interface HostAggregateInfoDto extends ManagedResource {
    host: HostNodeDto;
    transport_node: TransportNodeDto;
    status: NodeStatusDto;
}

export interface StaticRouteDto extends ManagedResource {
    logical_router_id: string;
    next_hops: StaticRouteNextHopDto[];
    network: string;
}

export interface VrfConfigAggregateInfoDto extends VrfConfigDto {
    logical_router_reference: AggregateInfoReferenceDto;
}

export interface MetadataProxyDto extends ManagedResource {
    metadata_server_url: string;
    edge_cluster_id: string;
    edge_cluster_member_indexes: number[];
    secret: string;
}

export interface EdgeHighAvailabilityProfileDto extends ClusterProfileDto {
    bfd_probe_interval: number;
    bfd_declare_dead_multiple: number;
    bfd_allowed_hops: number;
}

export interface PublicCloudGatewayNodeDto extends EdgeNodeDto {
}

export interface QosSwitchingProfile extends BaseSwitchingProfile {
    dscp: Dscp;
    shaper_configuration: QosBaseRateShaperUnion[];
    class_of_service: number;
}

export interface IpfixDfwConfigDto extends IpfixConfigDto {
    observation_domain_id: number;
    template_parameters: IpfixDfwTemplateParametersDto;
    priority: number;
    collector: string;
    active_flow_export_timeout: number;
}

export interface NodeAggregateInfoDto extends ManagedResource {
    node: NodeDto;
    status: NodeStatusDto;
}

export interface LoadBalancerHttpMonitorDto extends LoadBalancerMonitorDto {
    request_version: string;
    request_body: string;
    response_status: string;
    response_body: string;
    request_method: string;
    request_url: string;
}

export interface LogicalServiceDto extends ManagedResource {
}

export interface DneSectionRuleListDto extends DneSectionDto {
    rules: DneRuleDto[];
}

export interface RedistributionConfigDto extends ManagedResource {
    logical_router_id: string;
    bgp_enabled: boolean;
}

export interface BridgeHighAvailabilityClusterProfileDto extends ClusterProfileDto {
    bfd_probe_interval: number;
    enable: boolean;
}

export interface FirewallSectionRuleListDto extends FirewallSectionDto {
    rules: FirewallRuleDto[];
}

export interface DneKeyPolicyDto extends ManagedResource {
    encrypt_type: string;
    mac_algorithm: string;
    notes: string;
    rekey_frequency: number;
    rekey_margin_time: number;
    is_default: boolean;
    type: string;
    encrypt_algorithm: string;
    is_sys_default: boolean;
}

export interface LogicalPortDto extends ManagedResource {
    attachment: LogicalPortAttachmentDto;
    admin_state: string;
    logical_switch_id: string;
    address_bindings: PacketAddressClassifier[];
    switching_profile_ids: SwitchingProfileTypeIdEntry[];
}

export interface LldpHostSwitchProfileDto extends BaseHostSwitchProfileDto {
    send_enabled: boolean;
}

export interface MacManagementSwitchingProfileDto extends BaseSwitchingProfile {
    mac_change_allowed: boolean;
    mac_learning: MacLearningSpecDto;
}

export interface LoadBalancerMonitorDto extends ManagedResource {
    monitor_port: string;
    interval: number;
    timeout: number;
    rise_count: number;
    fall_count: number;
}

export interface LoadBalancerUdpMonitorDto extends LoadBalancerMonitorDto {
    receive: string;
    send: string;
}

export interface DneGlobalConfigDto extends ManagedResource {
    allow_mirrored: boolean;
    enable_dne: boolean;
    rekey_margin_time: number;
}

export interface ComputeCollectionAggregateInfoDto extends ManagedResource {
    compute_collection: ComputeCollectionDto;
    status: ComputeCollectionStatusDto;
}

export interface VrfConfigDto extends ManagedResource {
    logical_router_id: string;
    address_families: VrfAddressFamilyDto[];
    route_distinguisher: string;
}

export interface BgpNeighborDto extends ManagedResource {
    remote_as_num: string;
    bfd_config: BfdConfigParametersDto;
    maximum_hop_limit: number;
    filter_out_ipprefixlist_id: string;
    enabled: boolean;
    source_addresses: string[];
    filter_in_routemap_id: string;
    filter_out_routemap_id: string;
    logical_router_id: string;
    password: string;
    keep_alive_timer: number;
    hold_down_timer: number;
    source_address: string;
    address_families: BgpNeighborAddressFamilyDto[];
    remote_as: number;
    enable_bfd: boolean;
    neighbor_address: string;
    filter_in_ipprefixlist_id: string;
}

export interface BgpConfigDto extends ManagedResource {
    logical_router_id: string;
    as_number: number;
    graceful_restart: boolean;
    route_aggregation: BgpRouteAggregationDto[];
    enabled: boolean;
    ecmp: boolean;
    as_num: string;
}

export interface LoadBalancerPersistenceProfileDto extends ManagedResource {
}

export interface IpAllocationBaseDto extends ManagedResource {
    lease_time: number;
    options: DhcpOptionsDto;
    gateway_ip: string;
}

export interface AcceptableComponentVersionDto extends VersionListDto {
    component_type: string;
}

export interface UplinkHostSwitchProfileDto extends BaseHostSwitchProfileDto {
    transport_vlan: number;
    lags: LagDto[];
    teaming: TeamingPolicyDto;
    mtu: number;
}

export interface RedistributionRuleListDto extends ManagedResource {
    logical_router_id: string;
    rules: RedistributionRuleDto[];
}

export interface AdvertiseRuleListDto extends ManagedResource {
    logical_router_id: string;
    rules: AdvertiseRuleDto[];
}

export interface LogicalRouterLinkPortOnTIER0Dto extends LogicalRouterPortDto {
    linked_logical_router_port_id: string;
    vrf_id: string;
    subnets: IPSubnetDto[];
}

export interface NSGroupDto extends ManagedResource {
    membership_criteria: NSGroupExpressionDtoUnion[];
    members: NSGroupSimpleExpressionDto[];
    member_count: number;
}

export interface LogicalRouterLinkPortOnTIER1Dto extends LogicalRouterPortDto {
    linked_logical_router_port_id: ResourceReference;
    edge_cluster_member_index: number[];
    subnets: IPSubnetDto[];
}

export interface RouteMapDto extends ManagedResource {
    logical_router_id: string;
    sequences: RouteMapSequenceDto[];
}

export interface ExcludeListDto extends ManagedResource {
    members: ResourceReference[];
}

export interface VtepPoolDto extends ManagedResource {
    ranges: VtepRangeDto[];
    pool_usage: VtepPoolUsageDto;
}

export interface CrlObjectData extends ManagedResource {
    pem_encoded: string;
}

export interface LogicalRouterDownLinkPortDto extends LogicalRouterPortDto {
    linked_logical_switch_port_id: ResourceReference;
    subnets: IPSubnetDto[];
    urpf_mode: string;
}

export interface NSServiceDto extends ManagedResource {
    default_service: boolean;
    nsservice_element: NSServiceElementUnion;
}

export interface EdgeNodeDto extends NodeDto {
    deployment_type: string;
    allocation_list: string[];
    deployment_config: EdgeNodeDeploymentConfigDto;
}

export interface RoutingConfigDto extends ManagedResource {
    forwarding_up_timer: number;
    logical_router_id: string;
}

export interface ComputeManagerDto extends ManagedResource {
    server: string;
    credential: LoginCredentialUnion;
    origin_properties: KeyValuePair[];
    origin_type: string;
}

export interface FabricModuleDto extends ManagedResource {
    deployment_specs: DeploymentSpecDto[];
    current_version: string;
    fabric_module_name: string;
}

export interface DneKeyPolicyOverrideDto extends ManagedResource {
    encrypt_type: string;
    mac_algorithm: string;
    notes: string;
    rekey_frequency: number;
    rekey_margin_time: number;
    is_default: boolean;
    encrypt_algorithm: string;
    is_sys_default: boolean;
}

export interface ActionableResourceDto extends ManagedResource {
    ip_address: string;
}

export interface DhcpRelayServiceDto extends LogicalServiceDto {
    dhcp_relay_profile_id: string;
}

export interface MplsConfigDto extends ManagedResource {
    propagate_ip_ttl: IpTtlPropagateDto;
}

export interface IpfixSwitchConfigDto extends IpfixConfigDto {
    packet_sample_probability: number;
    active_timeout: number;
    max_flows: number;
    idle_timeout: number;
}

export interface IpfixHostSwitchProfileDto extends BaseHostSwitchProfileDto {
    packet_sample_probability: number;
    observation_domain_id: number;
    active_timeout: number;
    collectors: IpfixCollectorDto[];
    max_flows: number;
    idle_timeout: number;
    enabled: boolean;
}

export interface LoadBalancerVirtualServerDto extends ManagedResource {
    default_pool_member_port: string;
    port: string;
    persistence_profile_id: string;
    server_ssl_profile_binding: ServerSslProfileBindingDto;
    client_ssl_profile_binding: ClientSslProfileBindingDto;
    ip_address: string;
    pool_id: string;
    enabled: boolean;
    ip_protocol: string;
    application_profile_id: string;
}

export interface SpoofGuardSwitchingProfileDto extends BaseSwitchingProfile {
    white_list_providers: string[];
}

export interface LoadBalancerFastTcpProfileDto extends LoadBalancerApplicationProfileDto {
    flow_mirroring_enabled: boolean;
    close_timeout: number;
    idle_timeout: number;
}

export interface AdvertisementConfigDto extends ManagedResource {
    logical_router_id: string;
    advertise_nsx_connected_routes: boolean;
    advertise_static_routes: boolean;
    advertise_nat_routes: boolean;
    enabled: boolean;
}

export interface UpgradeCoordinatorStateDto extends ManagedResource {
    active_upgrade_coordinator_ip_address: string;
    active_upgrade_coordinator_node_uuid: string;
}

export interface PrincipalIdentity extends ManagedResource {
    certificate_id: string;
    name: string;
    permission_group: string;
    node_id: string;
}

export interface LoadBalancerIcmpMonitorDto extends LoadBalancerMonitorDto {
    data_length: number;
}

export interface IPSetDto extends ManagedResource {
    ip_addresses: string[];
}

export interface StaticHopBfdPeerDto extends ManagedResource {
    bfd_config: BfdConfigParametersDto;
    peer_ip_address: string;
    enabled: boolean;
}

export interface TrustObjectData extends ManagedResource {
    private_key: string;
    passphrase: string;
    pem_encoded: string;
}

export interface RoleBindingDto extends ManagedResource {
    roles: RoleDto[];
    name: string;
    type: string;
}

export interface ComputeManagerAggregateInfoDto extends ComputeManagerDto {
    status: ComputeManagerStatusDto;
}

export interface FeatureStackCollectionConfigurationDto extends ManagedResource {
    feature_stack_name: string;
    client_type_collection_configurations: ClientTypeCollectionConfigurationDto[];
}

export interface TransportZoneProfileDto extends ManagedResource {
}

export interface LoadBalancerHttpsMonitorDto extends LoadBalancerMonitorDto {
    response_status: string;
    client_certificate_id: string;
    server_auth: string;
    response_body: string;
    request_method: string;
    request_url: string;
    server_auth_crl_ids: string[];
    server_auth_ca_ids: string[];
    request_version: string;
    authentication_depth: number;
    request_body: string;
    ciphers: string[];
    protocols: string[];
}

export interface BfdHealthMonitoringProfileDto extends TransportZoneProfileDto {
    probe_interval: number;
    enabled: boolean;
}

export interface LogicalRouterPortDto extends ManagedResource {
    logical_router_id: string;
    mac_address: string;
    service_bindings: ServiceBindingDto[];
}

export interface IpfixObsPointConfigDto extends ManagedResource {
    packet_sample_probability: number;
    observation_domain_id: number;
    active_timeout: number;
    collectors: IpfixCollectorDto[];
    max_flows: number;
    idle_timeout: number;
    enabled: boolean;
}

export interface LogicalRouterDto extends ManagedResource {
    edge_cluster_id: string;
    preferred_edge_cluster_member_index: number;
    advanced_config: LogicalRouterConfigDto;
    router_type: string;
    high_availability_mode: string;
    failover_mode: string;
}

export interface NatRuleDto extends ManagedResource {
    logical_router_id: string;
    match_source_network: string;
    action: string;
    logging: boolean;
    translated_ports: string;
    match_service: NSServiceElementUnion;
    rule_priority: number;
    translated_network: string;
    enabled: boolean;
    match_destination_network: string;
}

export interface GlobalCollectionConfigurationDto extends ManagedResource {
    is_data_collection_enabled: boolean;
    modified_feature_stack_collection_configurations: FeatureStackCollectionConfigurationListDto;
    aggregated_data_collection_frequency: number;
}

export interface MACSetDto extends ManagedResource {
    mac_addresses: string[];
}

export interface FirewallSectionDto extends ManagedResource {
    section_type: string;
    applied_tos: ResourceReference[];
    is_default: boolean;
    stateful: boolean;
    rule_count: number;
}

export interface DhcpIpPoolDto extends IpAllocationBaseDto {
    allocation_ranges: IpPoolRangeDto[];
    error_threshold: number;
    warning_threshold: number;
}

export interface DhcpStaticBindingDto extends IpAllocationBaseDto {
    mac_address: string;
    ip_address: string;
    host_name: string;
}

export interface DhcpRelayProfileDto extends ServiceProfileDto {
    server_addresses: string[];
}

export interface LoadBalancerPassiveMonitorDto extends LoadBalancerMonitorDto {
    max_fails: number;
}

export interface MacPoolDto extends ManagedResource {
    ranges: MacRangeDto[];
}

export interface PortMirroringSwitchingProfile extends BaseSwitchingProfile {
    snap_length: number;
    destinations: string[];
    key: number;
    direction: string;
}

export interface VniPoolDto extends ManagedResource {
    ranges: VniRangeDto[];
}

export interface BridgeEndpointDto extends ManagedResource {
    vlan: number;
    bridge_cluster_id: string;
    ha_enable: boolean;
}

export interface EdgeClusterDto extends ManagedResource {
    deployment_type: string;
    member_node_type: string;
    members: EdgeClusterMemberDto[];
    cluster_profile_bindings: ClusterProfileTypeIdEntryDto[];
}

export interface LogicalDhcpServerDto extends ManagedResource {
    dhcp_profile_id: string;
    ipv4_dhcp_server: IPv4DhcpServerDto;
}

export interface Crl extends ManagedResource {
    details: X509Crl;
    pem_encoded: string;
}

export interface HostNodeAggregateInfoDto extends ManagedResource {
    discovered_node: DiscoveredNodeDto;
    host_node: HostNodeDto;
    transport_node: TransportNodeDto;
    status: NodeStatusDto;
}

export interface Certificate extends ManagedResource {
    details: X509Certificate[];
    pem_encoded: string;
    used_by: NodeIdServicesMap[];
}

export interface IpBlockSubnetDto extends ManagedResource {
    size: number;
    allocation_ranges: IpPoolRangeDto[];
    cidr: string;
    block_id: string;
}

export interface UserDto extends ManagedResource {
}

export interface UserProfileDto extends UserDto {
    role: string;
    name: string;
    coolStuff: string;
}

export interface AllocationIpAddressDto extends ManagedResource {
    allocation_id: string;
}

export interface LoadBalancerClientSslProfileDto extends ManagedResource {
    prefer_server_ciphers: boolean;
    ciphers: string[];
    protocols: string[];
    session_cache_enabled: boolean;
    session_cache_timeout: number;
}

export interface InterfaceNeighborProperties extends ManagedResource {
    ifindex: number;
    neighbors: NeighborProperties[];
    name: string;
    mac: string;
}

export interface IpfixSwitchingProfileDto extends BaseSwitchingProfile {
    enabled: boolean;
}

export interface NSServiceGroupDto extends ManagedResource {
    service_type: string;
    default_service: boolean;
    members: ResourceReference[];
}

export interface InfraComponentDto extends ManagedResource {
    downCount: number;
    typeName: string;
    totalCount: number;
}

export interface IpDiscoverySwitchingProfile extends BaseSwitchingProfile {
    vm_tools_enabled: boolean;
    arp_snooping_enabled: boolean;
    dhcp_snooping_enabled: boolean;
}

export interface BaseHostSwitchProfileDto extends ManagedResource {
    required_capabilities: string[];
}

export interface IpfixConfigDto extends ManagedResource {
    applied_tos: ResourceReference[];
}

export interface NSGroupUIResourceDto extends ManagedResource {
    membership_criteria: NSGroupExpressionDtoUnion[];
    member_count: number;
}

export interface IPPrefixListDto extends ManagedResource {
    logical_router_id: string;
    prefixes: PrefixConfigDto[];
}

export interface LogicalRouterUpLinkPortDto extends LogicalRouterPortDto {
    linked_logical_switch_port_id: ResourceReference;
    edge_cluster_member_index: number[];
    subnets: IPSubnetDto[];
    urpf_mode: string;
}

export interface TransportNodeDto extends ManagedResource {
    host_switch_spec: HostSwitchSpecDtoUnion;
    maintenance_mode: string;
    transport_zone_endpoints: TransportZoneEndPointDto[];
    host_switches: HostSwitchDto[];
    node_id: string;
}

export interface LoadBalancerHttpProfileDto extends LoadBalancerApplicationProfileDto {
    ntlm: boolean;
    request_header_size: number;
    http_redirect_to: string;
    http_redirect_to_https: boolean;
    idle_timeout: number;
    x_forwarded_for: string;
}

export interface IpPoolDto extends ManagedResource {
    subnets: IpPoolSubnetDto[];
    pool_usage: PoolUsageDto;
}

export interface BridgeClusterDto extends ManagedResource {
    cluster_profile_bindings: ClusterProfileTypeIdEntryDto[];
    bridge_nodes: BridgeClusterNodeDto[];
}

export interface Csr extends ManagedResource {
    subject: Principal;
    pem_encoded: string;
    algorithm: string;
    key_size: number;
}

export interface ClusterNodeConfig extends ManagedResource {
    controller_role: ControllerClusterRoleConfig;
    manager_role: ManagementClusterRoleConfig;
    appliance_mgmt_listen_addr: string;
    external_id: string;
}

export interface LoadBalancerPoolDto extends ManagedResource {
    members: PoolMemberDto[];
    active_monitor_ids: string[];
    snat_translation: LoadBalancerSnatTranslationDtoUnion;
    algorithm: string;
}

export interface PortMirroringSessionDto extends ManagedResource {
    snap_length: number;
    mirror_sources: MirrorSourceDtoUnion[];
    mirror_destination: MirrorDestinationDtoUnion;
    direction: string;
}

export interface LoadBalancerFastUdpProfileDto extends LoadBalancerApplicationProfileDto {
    flow_mirroring_enabled: boolean;
    idle_timeout: number;
}

export interface MetadataProxyAggregateInfoDto extends MetadataProxyDto {
    edge_cluster_reference: AggregateInfoReferenceDto;
    binding_count: number;
    edge_cluster_members: AggregateInfoReferenceDto[];
}

export interface DneKeyManagerDto extends ManagedResource {
    port: number;
    host: string;
    certificate: string;
}

export interface LoadBalancerTcpMonitorDto extends LoadBalancerMonitorDto {
    receive: string;
    send: string;
}

export interface IpfixCollectorConfigDto extends ManagedResource {
    collectors: IpfixCollectorDto[];
}

export interface ClusterProfileDto extends ManagedResource {
}

export interface LoadBalancerSourceIpPersistenceProfileDto extends LoadBalancerPersistenceProfileDto {
    purge: string;
    persistence_mirroring_enabled: boolean;
    timeout: number;
}

export interface DhcpProfileAggregateInfoDto extends DhcpProfileDto {
    edge_cluster_reference: AggregateInfoReferenceDto;
    logical_dhcp_server_count: number;
}

export interface RevisionedResource extends Resource {
    _revision: number;
}

export interface BpduFilterDto {
    white_list: string[];
    enabled: boolean;
}

export interface DhcpFilterDto {
    server_block_enabled: boolean;
    client_block_enabled: boolean;
}

export interface RateLimitsDto {
    tx_broadcast: number;
    tx_multicast: number;
    rx_multicast: number;
    rx_broadcast: number;
    enabled: boolean;
}

export interface HostNodeLoginCredentialDto {
    password: string;
    thumbprint: string;
    username: string;
}

export interface ResourceReference {
    target_display_name: string;
    is_valid: boolean;
    target_type: string;
    target_id: string;
}

export interface IPv4DhcpServerDto {
    domain_name: string;
    options: DhcpOptionsDto;
    gateway_ip: string;
    dhcp_server_ip: string;
    dns_nameservers: string[];
}

export interface AggregateInfoReferenceDto {
    name: string;
    id: string;
    type: string;
}

export interface LoginCredential {
    credential_type: string;
}

export interface KeyValuePair {
    value: string;
    key: string;
}

export interface NodeStatusDto {
    lcp_connectivity_status: string;
    mpa_connectivity_status: string;
    maintenance_mode: string;
    last_sync_time: number;
    external_id: string;
    mpa_connectivity_status_details: string;
    lcp_connectivity_status_details: ControlConnStatusDto[];
    inventory_sync_paused: boolean;
    last_heartbeat_timestamp: number;
    system_status: NodeStatusPropertiesDto;
    inventory_sync_reenable_time: number;
    software_version: string;
    host_node_deployment_status: string;
}

export interface StaticRouteNextHopDto {
    blackhole_action: string;
    administrative_distance: number;
    bfd_enabled: boolean;
    logical_router_port_id: ResourceReference;
    ip_address: string;
}

export interface VrfAddressFamilyDto {
    import_route_targets: string[];
    maximum_routes: number;
    type: string;
    export_route_targets: string[];
}

export interface EdgeNodeDeploymentConfigDto {
    vm_deployment_config: DeploymentConfigDtoUnion;
    form_factor: string;
    node_user_settings: NodeUserSettingsDto;
}

export interface Dscp {
    mode: string;
    priority: number;
}

export interface QosBaseRateShaper {
    resource_type: string;
    enabled: boolean;
}

export interface IpfixDfwTemplateParametersDto {
    flow_start: boolean;
    protocol_identifier: boolean;
    packet_delta_count: boolean;
    destination_address: boolean;
    octet_delta_count: boolean;
    rule_id: boolean;
    source_icmp_type: boolean;
    flow_direction: boolean;
    flow_end: boolean;
    source_address: boolean;
    icmp_code: boolean;
    source_transport_port: boolean;
    destination_transport_port: boolean;
    firewall_event: boolean;
    vif_uuid: boolean;
}

export interface DneRuleDto extends EmbeddedResource {
    rule_tag: string;
    key_policy_identifier: string;
    comments: string;
    sources: ResourceReference[];
    logged: boolean;
    destinations: ResourceReference[];
    applied_tos: ResourceReference[];
    action: string;
    key_policy_name: string;
    disabled: boolean;
    services: DneServiceDto[];
    ip_protocol: string;
}

export interface FirewallRuleDto extends EmbeddedResource {
    notes: string;
    destinations_excluded: boolean;
    sources: ResourceReference[];
    destinations: ResourceReference[];
    services: FirewallServiceDto[];
    ip_protocol: string;
    rule_tag: string;
    logged: boolean;
    applied_tos: ResourceReference[];
    action: string;
    sources_excluded: boolean;
    disabled: boolean;
    direction: string;
}

export interface LogicalPortAttachmentDto {
    attachment_type: string;
    context: AttachmentContextDtoUnion;
    id: string;
}

export interface MacLearningSpecDto {
    limit: number;
    aging_time: number;
    unicast_flooding_allowed: boolean;
    limit_policy: string;
    enabled: boolean;
}

export interface ComputeCollectionDto extends DiscoveredResource {
    origin_properties: KeyValuePair[];
    external_id: string;
    origin_id: string;
    origin_type: string;
}

export interface ComputeCollectionStatusDto {
    num_nodes_uninstall_in_progress: number;
    num_nodes_uninstall_successful: number;
    num_nodes_not_available: number;
    last_sync_time: number;
    num_nodes_pending_upgrade: number;
    deployment_status: string;
    num_nodes_upgrade_in_progress: number;
    num_nodes_not_prepared: number;
    num_nodes_install_successful: number;
    num_nodes_install_failed: number;
    num_nodes_install_in_progress: number;
    num_nodes_uninstall_failed: number;
}

export interface BfdConfigParametersDto {
    transmit_interval: number;
    receive_interval: number;
    declare_dead_multiple: number;
}

export interface BgpNeighborAddressFamilyDto {
    in_filter_routemap_id: string;
    out_filter_ipprefixlist_id: string;
    in_filter_ipprefixlist_id: string;
    out_filter_routemap_id: string;
    type: string;
    enabled: boolean;
}

export interface BgpRouteAggregationDto {
    prefix: string;
    summary_only: boolean;
}

export interface DhcpOptionsDto {
    option121: DhcpOption121Dto;
    others: GenericDhcpOptionDto[];
}

export interface LagDto {
    mode: string;
    load_balance_algorithm: string;
    number_of_uplinks: number;
    uplinks: UplinkDto[];
    name: string;
    timeout_type: string;
    id: string;
}

export interface TeamingPolicyDto {
    active_list: UplinkDto[];
    standby_list: UplinkDto[];
    policy: string;
}

export interface RedistributionRuleDto {
    sources: string[];
    destination: string;
    description: string;
    display_name: string;
    route_map_id: string;
}

export interface AdvertiseRuleDto {
    description: string;
    networks: string[];
    display_name: string;
}

export interface ServiceBindingDto {
    service_id: ResourceReference;
}

export interface IPSubnetDto {
    ip_addresses: string[];
    prefix_length: number;
}

export interface NSGroupExpressionDto {
    resource_type: string;
}

export interface NSGroupSimpleExpressionDto extends NSGroupExpressionDto {
    op: string;
    target_resource: ResourceReference;
    target_type: string;
    value: string;
    target_property: string;
}

export interface RouteMapSequenceDto {
    match_criteria: RouteMapSequenceMatchDto;
    set_criteria: RouteMapSequenceSetDto;
    action: string;
}

export interface VtepRangeDto extends Resource {
    start: number;
    end: number;
}

export interface VtepPoolUsageDto {
    total_ids: number;
    free_ids: number;
    allocated_ids: number;
}

export interface NSServiceElement {
    resource_type: string;
}

export interface DeploymentSpecDto {
    fabric_module_version: string;
    versioned_deployment_specs: VersionedDeploymentSpecDto[];
}

export interface IpTtlPropagateDto {
    enabled: boolean;
    packet_type: string;
}

export interface IpfixCollectorDto {
    collector_port: number;
    collector_ip_address: string;
}

export interface ServerSslProfileBindingDto {
    ssl_profile_id: string;
    server_auth_ca_ids: string[];
    authentication_depth: number;
    server_auth: string;
    client_certificate_id: string;
    server_auth_crl_ids: string[];
}

export interface ClientSslProfileBindingDto {
    ssl_profile_id: string;
    client_auth: string;
    authentication_depth: number;
    client_auth_ca_ids: string[];
    client_auth_crl_ids: string[];
    sni_certificate_ids: string[];
    default_certificate_id: string;
}

export interface RoleDto {
    role: string;
}

export interface ComputeManagerStatusDto {
    connection_status_details: string;
    connection_status: string;
    last_sync_time: number;
    version: string;
}

export interface ClientTypeCollectionConfigurationDto {
    client_type: string;
    data_type_configurations: DataTypeCollectionConfigurationDto[];
}

export interface LogicalRouterConfigDto {
    external_transit_networks: string[];
    internal_transit_network: string;
    ha_vip_configs: HaVipConfigDto[];
}

export interface FeatureStackCollectionConfigurationListDto {
    results: FeatureStackCollectionConfigurationDto[];
}

export interface IpPoolRangeDto extends Resource {
    start: string;
    end: string;
}

export interface MacRangeDto {
    start: string;
    end: string;
}

export interface VniRangeDto extends Resource {
    start: number;
    end: number;
}

export interface EdgeClusterMemberDto {
    member_index: number;
    description: string;
    transport_node_id: string;
    display_name: string;
}

export interface ClusterProfileTypeIdEntryDto {
    profile_id: string;
    resource_type: string;
}

export interface X509Crl {
    crl_entries: X509CrlEntry[];
    version: string;
    next_update: string;
    issuer: string;
}

export interface DiscoveredNodeDto extends DiscoveredResource {
    ip_addresses: string[];
    parent_compute_collection: string;
    origin_properties: KeyValuePair[];
    external_id: string;
    origin_id: string;
}

export interface X509Certificate {
    issuer_cn: string;
    public_key_length: number;
    signature: string;
    dsa_public_key_p: string;
    not_before: number;
    subject: string;
    serial_number: string;
    dsa_public_key_q: string;
    public_key_algo: string;
    version: string;
    issuer: string;
    is_ca: boolean;
    subject_cn: string;
    not_after: number;
    dsa_public_key_y: string;
    is_valid: boolean;
    rsa_public_key_exponent: string;
    signature_algorithm: string;
    dsa_public_key_g: string;
    rsa_public_key_modulus: string;
}

export interface NodeIdServicesMap {
    service_types: string[];
    node_id: string;
}

export interface NeighborProperties {
    ifindex: number;
    link_aggregation_status: boolean;
    capabilities: string;
    system_name: string;
    link_aggregation_port_id: string;
    oid: string;
    mac: string;
    mgmt_addr: string;
    name: string;
    system_desc: string;
    port_desc: string;
    enabled_capabilities: string;
    system_port_number: number;
    link_aggregation_capable: boolean;
}

export interface PrefixConfigDto {
    action: string;
    le: number;
    ge: number;
    network: string;
}

export interface HostSwitchSpecDto {
    resource_type: string;
}

export interface TransportZoneEndPointDto {
    transport_zone_id: string;
    transport_zone_profile_ids: TransportZoneProfileTypeIdEntryDto[];
}

export interface HostSwitchDto {
    host_switch_profile_ids: HostSwitchProfileTypeIdEntryDto[];
    host_switch_name: string;
    pnics: PnicDto[];
    static_ip_pool_id: string;
}

export interface IpPoolSubnetDto extends Resource {
    allocation_ranges: IpPoolRangeDto[];
    cidr: string;
    gateway_ip: string;
    dns_suffix: string;
    dns_nameservers: string[];
}

export interface PoolUsageDto {
    total_ids: number;
    free_ids: number;
    allocated_ids: number;
}

export interface BridgeClusterNodeDto {
    ha_mac: string;
    transport_node_id: string;
}

export interface Principal {
    attributes: KeyValue[];
}

export interface ControllerClusterRoleConfig extends ClusterRoleConfig {
    control_cluster_listen_addr: ServiceEndpoint;
    control_plane_listen_addr: ServiceEndpoint;
    host_msg_client_info: MsgClientInfo;
    mpa_msg_client_info: MsgClientInfo;
}

export interface ManagementClusterRoleConfig extends ClusterRoleConfig {
    mgmt_cluster_listen_addr: ServiceEndpoint;
    mpa_msg_client_info: MsgClientInfo;
    api_listen_addr: ServiceEndpoint;
    mgmt_plane_listen_addr: ServiceEndpoint;
}

export interface PoolMemberDto {
    port: string;
    admin_state: string;
    ip_address: string;
    display_name: string;
    backup_member: boolean;
}

export interface LoadBalancerSnatTranslationDto {
    type: string;
}

export interface MirrorSourceDto {
    resource_type: string;
}

export interface MirrorDestinationDto {
    resource_type: string;
}

export interface VerifiableAsymmetricLoginCredential extends LoginCredential {
    asymmetric_credential: string;
    credential_key: string;
    credential_verifier: string;
}

export interface UsernamePasswordLoginCredential extends LoginCredential {
    password: string;
    thumbprint: string;
    username: string;
}

export interface ControlConnStatusDto {
    control_node_ip: string;
    failure_status: string;
    status: string;
}

export interface NodeStatusPropertiesDto extends Resource {
    mem_used: number;
    system_time: number;
    file_systems: NodeFileSystemPropertiesDto[];
    load_average: number[];
    swap_total: number;
    mem_cache: number;
    cpu_cores: number;
    source: string;
    mem_total: number;
    swap_used: number;
    uptime: number;
}

export interface DeploymentConfigDto {
    placement_type: string;
}

export interface NodeUserSettingsDto {
    cli_password: string;
    root_password: string;
    cli_username: string;
}

export interface EgressRateShaper extends QosBaseRateShaper {
    average_bandwidth_mbps: number;
    peak_bandwidth_mbps: number;
    burst_size_bytes: number;
}

export interface IngressRateShaper extends QosBaseRateShaper {
    average_bandwidth_mbps: number;
    peak_bandwidth_mbps: number;
    burst_size_bytes: number;
}

export interface IngressBroadcastRateShaper extends QosBaseRateShaper {
    burst_size_bytes: number;
    peak_bandwidth_kbps: number;
    average_bandwidth_kbps: number;
}

export interface DneServiceDto extends ResourceReference {
    service: NSServiceElementUnion;
}

export interface OwnerResourceLink extends ResourceLink {
}

export interface EmbeddedResource extends RevisionedResource {
    resource_type: string;
    description: string;
    id: string;
    display_name: string;
    _owner: OwnerResourceLink;
}

export interface FirewallServiceDto extends ResourceReference {
    service: NSServiceElementUnion;
}

export interface AttachmentContextDto {
    allocate_addresses: string;
    resource_type: string;
}

export interface DiscoveredResource extends Resource {
    resource_type: string;
    description: string;
    display_name: string;
    tags: Tag[];
    _last_sync_time: number;
}

export interface DhcpOption121Dto {
    static_routes: ClasslessStaticRouteDto[];
}

export interface GenericDhcpOptionDto {
    code: number;
    values: string[];
}

export interface UplinkDto {
    uplink_type: string;
    uplink_name: string;
}

export interface NSGroupComplexExpressionDto extends NSGroupExpressionDto {
    expressions: NSGroupExpressionDtoUnion[];
}

export interface NSGroupTagExpressionDto extends NSGroupExpressionDto {
    scope: string;
    target_type: string;
    tag: string;
    scope_op: string;
    tag_op: string;
}

export interface RouteMapSequenceMatchDto {
    ip_prefix_lists: string[];
}

export interface RouteMapSequenceSetDto {
    multi_exit_discriminator: number;
    weight: number;
    community: string;
    as_path_prepend: string;
}

export interface IGMPTypeNSService extends NSServiceElement {
}

export interface EtherTypeNSService extends NSServiceElement {
    ether_type: number;
}

export interface IPProtocolNSService extends NSServiceElement {
    protocol_number: number;
}

export interface ICMPTypeNSService extends NSServiceElement {
    icmp_type: number;
    protocol: string;
    icmp_code: number;
}

export interface L4PortSetNSService extends NSServiceElement {
    destination_ports: string[];
    l4_protocol: string;
    source_ports: string[];
}

export interface ALGTypeNSService extends NSServiceElement {
    destination_ports: string[];
    source_ports: string[];
    alg: string;
}

export interface VersionedDeploymentSpecDto {
    service_vm_ovf_url: string[];
    package_stores: PackageStoreDto[];
    host_version: string;
    host_type: string;
}

export interface DataTypeCollectionConfigurationDto {
    collection_frequency: number;
    data_type: string;
}

export interface HaVipConfigDto {
    redundant_uplink_port_ids: string[];
    enabled: boolean;
    ha_vip_subnets: VIPSubnetDto[];
}

export interface X509CrlEntry {
    revocation_date: string;
    serial_number: string;
}

export interface PreconfiguredHostSwitchSpecDto extends HostSwitchSpecDto {
    host_switches: PreconfiguredHostSwitchDto[];
}

export interface StandardHostSwitchSpecDto extends HostSwitchSpecDto {
    host_switches: StandardHostSwitchDto[];
}

export interface HostSwitchProfileTypeIdEntryDto {
    value: string;
    key: string;
}

export interface PnicDto {
    device_name: string;
    uplink_name: string;
}

export interface KeyValue {
    value: string;
    key: string;
}

export interface ServiceEndpoint {
    fqdn: string;
    port: number;
    certificate_sha256_thumbprint: string;
    certificate: string;
    ip_address: string;
}

export interface MsgClientInfo {
    account_name: string;
    certificate: string;
    shared_secret: string;
}

export interface ClusterRoleConfig {
    type: string;
}

export interface LoadBalancerSnatAutoMapDto extends LoadBalancerSnatTranslationDto {
}

export interface LoadBalancerSnatIpPoolDto extends LoadBalancerSnatTranslationDto {
    ip_addresses: LoadBalancerSnatIpElementDto[];
    port_overload: number;
}

export interface PnicMirrorSourceDto extends MirrorSourceDto {
    source_pnics: string[];
    encapsulated: boolean;
    node_id: string;
}

export interface LogicalPortMirrorSourceDto extends MirrorSourceDto {
    port_ids: string[];
}

export interface LogicalPortMirrorDestinationDto extends MirrorDestinationDto {
    port_ids: string[];
}

export interface NodeFileSystemPropertiesDto {
    file_system: string;
    total: number;
    used: number;
    type: string;
    mount: string;
}

export interface VsphereDeploymentConfigDto extends DeploymentConfigDto {
    vc_id: string;
    management_network_id: string;
    compute_id: string;
    storage_id: string;
    data_network_ids: string[];
    host_id: string;
}

export interface VifAttachmentContextDto extends AttachmentContextDto {
    parent_vif_id: string;
    traffic_tag: number;
    app_id: string;
    vif_type: string;
}

export interface VirtualNetworkInterface extends DiscoveredResource {
    device_key: string;
    device_name: string;
    ip_address_info: IpAddressInfo[];
    vm_local_id_on_host: string;
    mac_address: string;
    owner_vm_id: string;
    external_id: string;
    lport_attachment_id: string;
    host_id: string;
}

export interface ComputeCollectionInfo extends DiscoveredResource {
    obj_update_type: string;
    cm_local_id: string;
    origin_properties: KeyValuePair[];
    external_id: string;
    origin_id: string;
    origin_type: string;
}

export interface DiscoveredNodeInfo extends DiscoveredResource {
    obj_update_type: string;
    cm_local_id: string;
    ip_addresses: string[];
    parent_compute_collection: string;
    origin_properties: KeyValuePair[];
    external_id: string;
    origin_id: string;
    origin_type: string;
}

export interface VirtualMachine extends DiscoveredResource {
    compute_ids: string[];
    external_id: string;
    type: string;
    power_state: string;
    host_id: string;
    local_id_on_host: string;
}

export interface ClasslessStaticRouteDto {
    next_hop: string;
    network: string;
}

export interface PackageStoreDto {
    bulletin_ids: string[];
    package_url: string;
}

export interface VIPSubnetDto {
    prefix_length: number;
    active_vip_addresses: string[];
}

export interface PreconfiguredHostSwitchDto {
    endpoints: PreconfiguredEndpointDto[];
    host_switch_id: string;
}

export interface StandardHostSwitchDto {
    host_switch_profile_ids: HostSwitchProfileTypeIdEntryDto[];
    host_switch_name: string;
    pnics: PnicDto[];
    ip_assignment_spec: IpAssignmentSpecDtoUnion;
}

export interface LoadBalancerSnatIpElementDto {
    ip_address: string;
    prefix_length: number;
}

export interface IpAddressInfo {
    ip_addresses: string[];
    source: string;
}

export interface PreconfiguredEndpointDto {
    device_name: string;
}

export interface IpAssignmentSpecDto {
    resource_type: string;
}

export interface StaticIpListSpecDto extends IpAssignmentSpecDto {
    default_gateway: string;
    subnet_mask: string;
    ip_list: string[];
}

export interface StaticIpPoolSpecDto extends IpAssignmentSpecDto {
    ip_pool_id: string;
}

export interface AssignedByDhcpDto extends IpAssignmentSpecDto {
}

export type ManagedResourceUnion = ServiceProfileDto | DneSectionDto | SwitchSecuritySwitchingProfileDto | CustomerDto | NodeDto | HostNodeDto | VersionListDto | DhcpProfileDto | LoadBalancerCookiePersistenceProfileDto | LoadBalancerServiceDto | LogicalDhcpServerAggregateInfoDto | ComputeManagerInfo | IpBlockDto | LoadBalancerApplicationProfileDto | LoadBalancerServerSslProfileDto | HostAggregateInfoDto | StaticRouteDto | VrfConfigAggregateInfoDto | LogicalSwitchDto | MetadataProxyDto | EdgeHighAvailabilityProfileDto | PublicCloudGatewayNodeDto | QosSwitchingProfile | IpfixDfwConfigDto | NodeAggregateInfoDto | TransportZoneDto | LoadBalancerHttpMonitorDto | LogicalServiceDto | DneSectionRuleListDto | RedistributionConfigDto | BridgeHighAvailabilityClusterProfileDto | FirewallSectionRuleListDto | DneKeyPolicyDto | LogicalPortDto | LldpHostSwitchProfileDto | MacManagementSwitchingProfileDto | LoadBalancerMonitorDto | LoadBalancerUdpMonitorDto | DneGlobalConfigDto | ComputeCollectionAggregateInfoDto | VrfConfigDto | BgpNeighborDto | BgpConfigDto | LoadBalancerPersistenceProfileDto | IpAllocationBaseDto | BaseSwitchingProfile | AcceptableComponentVersionDto | UplinkHostSwitchProfileDto | RedistributionRuleListDto | AdvertiseRuleListDto | LogicalRouterLinkPortOnTIER0Dto | NSGroupDto | LogicalRouterLinkPortOnTIER1Dto | RouteMapDto | ExcludeListDto | VtepPoolDto | CrlObjectData | LogicalRouterDownLinkPortDto | NSServiceDto | EdgeNodeDto | RoutingConfigDto | ComputeManagerDto | FabricModuleDto | DneKeyPolicyOverrideDto | ActionableResourceDto | DhcpRelayServiceDto | MplsConfigDto | IpfixSwitchConfigDto | IpfixHostSwitchProfileDto | LoadBalancerVirtualServerDto | SpoofGuardSwitchingProfileDto | LoadBalancerFastTcpProfileDto | AdvertisementConfigDto | UpgradeCoordinatorStateDto | PrincipalIdentity | LoadBalancerIcmpMonitorDto | IPSetDto | StaticHopBfdPeerDto | TrustObjectData | RoleBindingDto | ComputeManagerAggregateInfoDto | FeatureStackCollectionConfigurationDto | TransportZoneProfileDto | LoadBalancerHttpsMonitorDto | BfdHealthMonitoringProfileDto | LogicalRouterPortDto | IpfixObsPointConfigDto | LogicalRouterDto | NatRuleDto | GlobalCollectionConfigurationDto | MACSetDto | FirewallSectionDto | DhcpIpPoolDto | DhcpStaticBindingDto | DhcpRelayProfileDto | LoadBalancerPassiveMonitorDto | MacPoolDto | PortMirroringSwitchingProfile | VniPoolDto | BridgeEndpointDto | EdgeClusterDto | LogicalDhcpServerDto | Crl | HostNodeAggregateInfoDto | Certificate | IpBlockSubnetDto | UserDto | UserProfileDto | AllocationIpAddressDto | LoadBalancerClientSslProfileDto | InterfaceNeighborProperties | IpfixSwitchingProfileDto | NSServiceGroupDto | InfraComponentDto | IpDiscoverySwitchingProfile | BaseHostSwitchProfileDto | IpfixConfigDto | NSGroupUIResourceDto | IPPrefixListDto | LogicalRouterUpLinkPortDto | TransportNodeDto | LoadBalancerHttpProfileDto | IpPoolDto | BridgeClusterDto | Csr | ClusterNodeConfig | LoadBalancerPoolDto | PortMirroringSessionDto | LoadBalancerFastUdpProfileDto | MetadataProxyAggregateInfoDto | DneKeyManagerDto | LoadBalancerTcpMonitorDto | IpfixCollectorConfigDto | ClusterProfileDto | LoadBalancerSourceIpPersistenceProfileDto | DhcpProfileAggregateInfoDto;

export type LoginCredentialUnion = VerifiableAsymmetricLoginCredential | UsernamePasswordLoginCredential;

export type QosBaseRateShaperUnion = EgressRateShaper | IngressRateShaper | IngressBroadcastRateShaper;

export type NSGroupExpressionDtoUnion = NSGroupComplexExpressionDto | NSGroupSimpleExpressionDto | NSGroupTagExpressionDto;

export type NSServiceElementUnion = IGMPTypeNSService | EtherTypeNSService | IPProtocolNSService | ICMPTypeNSService | L4PortSetNSService | ALGTypeNSService;

export type HostSwitchSpecDtoUnion = PreconfiguredHostSwitchSpecDto | StandardHostSwitchSpecDto;

export type LoadBalancerSnatTranslationDtoUnion = LoadBalancerSnatAutoMapDto | LoadBalancerSnatIpPoolDto;

export type MirrorSourceDtoUnion = PnicMirrorSourceDto | LogicalPortMirrorSourceDto;

export type MirrorDestinationDtoUnion = LogicalPortMirrorDestinationDto;

export type DeploymentConfigDtoUnion = VsphereDeploymentConfigDto;

export type EmbeddedResourceUnion = DneRuleDto | FirewallRuleDto;

export type AttachmentContextDtoUnion = VifAttachmentContextDto;

export type DiscoveredResourceUnion = VirtualNetworkInterface | ComputeCollectionInfo | DiscoveredNodeInfo | ComputeCollectionDto | VirtualMachine | DiscoveredNodeDto;

export type IpAssignmentSpecDtoUnion = StaticIpListSpecDto | StaticIpPoolSpecDto | AssignedByDhcpDto;
