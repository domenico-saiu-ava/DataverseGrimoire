---
logical: "msdyn_channelcapability"
display: "Channel Capability"
entitySetName: "msdyn_channelcapabilities"
primaryId: "msdyn_channelcapabilityid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Channel Capability

The capability that a channel can enable, such as co-browse, screen sharing.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channelcapability` |
| Display name | Channel Capability |
| Display (plural) | Channel Capabilites |
| Schema name | `msdyn_channelcapability` |
| Entity set (Web API) | `msdyn_channelcapabilities` |
| Primary id attribute | `msdyn_channelcapabilityid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channelcapabilities?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channelcapabilities(<guid>)
POST /api/data/v9.2/msdyn_channelcapabilities
PATCH /api/data/v9.2/msdyn_channelcapabilities(<guid>)
DELETE /api/data/v9.2/msdyn_channelcapabilities(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_channelcapabilityId`, `msdyn_ConversationAction`, `msdyn_EscalationChannelMode`, `msdyn_name`, `msdyn_Provider`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_channelcapability_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channelcapability_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channelcapability_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channelcapability_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_conversationaction_msdyn_channelcapability_ConversationAction` | [msdyn_conversationaction](msdyn_conversationaction.md) | `msdyn_conversationaction` | `msdyn_ConversationAction` |
| `msdyn_msdyn_provider_msdyn_channelcapability_Provider` | [msdyn_provider](msdyn_provider.md) | `msdyn_provider` | `msdyn_Provider` |
| `organization_msdyn_channelcapability` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelcapability_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelcapability_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelcapability_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_channelcapability_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_channelcapability_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelcapability_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_channelcapability_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelcapability_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_channelcapability.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_channelcapability.md) on 2026-05-06.