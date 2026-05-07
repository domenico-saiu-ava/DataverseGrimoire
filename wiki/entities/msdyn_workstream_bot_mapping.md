---
logical: "msdyn_workstream_bot_mapping"
display: "Work Stream Bot Mapping"
entitySetName: "msdyn_workstream_bot_mappings"
primaryId: "msdyn_workstream_bot_mappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Work Stream Bot Mapping

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_workstream_bot_mapping` |
| Display name | Work Stream Bot Mapping |
| Display (plural) | Work Stream Bot Mappings |
| Schema name | `msdyn_workstream_bot_mapping` |
| Entity set (Web API) | `msdyn_workstream_bot_mappings` |
| Primary id attribute | `msdyn_workstream_bot_mappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_workstream_bot_mappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_workstream_bot_mappings(<guid>)
POST /api/data/v9.2/msdyn_workstream_bot_mappings
PATCH /api/data/v9.2/msdyn_workstream_bot_mappings(<guid>)
DELETE /api/data/v9.2/msdyn_workstream_bot_mappings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_botuserid`, `msdyn_name`, `msdyn_workstream_bot_mappingId`, `msdyn_workstreamid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_workstream_bot_mapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_workstream_bot_mapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_workstream_bot_mapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_workstream_bot_mapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_workstream_bot_mapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_liveworkstream_msdyn_workstream_bot` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_workstreamid` | `msdyn_workstreamid` |
| `msdyn_systemuser_msdyn_workstream_bot_mapping` | [systemuser](systemuser.md) | `msdyn_botuserid` | `msdyn_botuserid` |
| `owner_msdyn_workstream_bot_mapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_workstream_bot_mapping` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_workstream_bot_mapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_workstream_bot_mapping_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_workstream_bot_mapping_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_workstream_bot_mapping_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_workstream_bot_mapping_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_workstream_bot_mapping_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_workstream_bot_mapping_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_workstream_bot_mapping.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_workstream_bot_mapping.md) on 2026-05-06.