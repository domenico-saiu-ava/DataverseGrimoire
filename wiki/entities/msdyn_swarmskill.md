---
logical: "msdyn_swarmskill"
display: "Swarm skill"
entitySetName: "msdyn_swarmskills"
primaryId: "msdyn_swarmskillid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Swarm skill

Stores the skills required for the swarm

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_swarmskill` |
| Display name | Swarm skill |
| Display (plural) | Swarm skills |
| Schema name | `msdyn_swarmskill` |
| Entity set (Web API) | `msdyn_swarmskills` |
| Primary id attribute | `msdyn_swarmskillid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_swarmskills?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_swarmskills(<guid>)
POST /api/data/v9.2/msdyn_swarmskills
PATCH /api/data/v9.2/msdyn_swarmskills(<guid>)
DELETE /api/data/v9.2/msdyn_swarmskills(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_numberofinvites`, `msdyn_skillid`, `msdyn_suggestiontype`, `msdyn_swarmid`, `msdyn_swarmskillId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_swarmskill` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_swarmskill_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_swarmskill_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_swarmskill_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_swarmskill_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_characteristic_msdyn_swarmskill_Skillid` | [characteristic](characteristic.md) | `msdyn_skillid` | `msdyn_skillid` |
| `msdyn_msdyn_swarm_msdyn_swarmskill_swarmid` | [msdyn_swarm](msdyn_swarm.md) | `msdyn_swarmid` | `msdyn_swarmid` |
| `owner_msdyn_swarmskill` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_swarmskill` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_swarmskill` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_swarmskill_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarmskill_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarmskill_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_swarmskill_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_swarmskill_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarmskill_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_swarmskill_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_swarmskill_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_swarmskill.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_swarmskill.md) on 2026-05-06.