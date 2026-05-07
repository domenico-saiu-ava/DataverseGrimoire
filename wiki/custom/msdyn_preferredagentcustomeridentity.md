---
logical: "msdyn_preferredagentcustomeridentity"
display: "ID cliente dell'agente preferito"
entitySetName: "msdyn_preferredagentcustomeridentities"
primaryId: "msdyn_preferredagentcustomeridentityid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# ID cliente dell'agente preferito

Utilizzata per archiviare la tabella utilizzata per identificare il cliente e la tabella associata corrispondente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_preferredagentcustomeridentity` |
| Display name | ID cliente dell'agente preferito |
| Display (plural) | ID cliente dell'agente preferito |
| Schema name | `msdyn_preferredagentcustomeridentity` |
| Entity set (Web API) | `msdyn_preferredagentcustomeridentities` |
| Primary id attribute | `msdyn_preferredagentcustomeridentityid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_preferredagentcustomeridentities?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_preferredagentcustomeridentities(<guid>)
POST /api/data/v9.2/msdyn_preferredagentcustomeridentities
PATCH /api/data/v9.2/msdyn_preferredagentcustomeridentities(<guid>)
DELETE /api/data/v9.2/msdyn_preferredagentcustomeridentities(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_associatedfieldname`, `msdyn_entityname`, `msdyn_name`, `msdyn_preferredagentcustomeridentityid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_preferredagentcustomeridentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_preferredagentcustomeridentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_preferredagentcustomeridentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_preferredagentcustomeridentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_preferredagentcustomeridentity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_preferredagentcustomeridentity` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_preferredagentcustomeridentity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_preferredagentcustomeridentity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_preferredagentcustomeridentity_SyncErrors` | [msdyn_preferredagentcustomeridentity](msdyn_preferredagentcustomeridentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_preferredagentcustomeridentity` |
| `msdyn_preferredagentcustomeridentity_DuplicateMatchingRecord` | [msdyn_preferredagentcustomeridentity](msdyn_preferredagentcustomeridentity.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_preferredagentcustomeridentity` |
| `msdyn_preferredagentcustomeridentity_DuplicateBaseRecord` | [msdyn_preferredagentcustomeridentity](msdyn_preferredagentcustomeridentity.md) | `baserecordid` | `baserecordid_msdyn_preferredagentcustomeridentity` |
| `msdyn_preferredagentcustomeridentity_AsyncOperations` | [msdyn_preferredagentcustomeridentity](msdyn_preferredagentcustomeridentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_preferredagentcustomeridentity` |
| `msdyn_preferredagentcustomeridentity_MailboxTrackingFolders` | [msdyn_preferredagentcustomeridentity](msdyn_preferredagentcustomeridentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_preferredagentcustomeridentity` |
| `msdyn_preferredagentcustomeridentity_UserEntityInstanceDatas` | [msdyn_preferredagentcustomeridentity](msdyn_preferredagentcustomeridentity.md) | `objectid` | `objectid_msdyn_preferredagentcustomeridentity` |
| `msdyn_preferredagentcustomeridentity_ProcessSession` | [msdyn_preferredagentcustomeridentity](msdyn_preferredagentcustomeridentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_preferredagentcustomeridentity` |
| `msdyn_preferredagentcustomeridentity_BulkDeleteFailures` | [msdyn_preferredagentcustomeridentity](msdyn_preferredagentcustomeridentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_preferredagentcustomeridentity` |
| `msdyn_preferredagentcustomeridentity_PrincipalObjectAttributeAccesses` | [msdyn_preferredagentcustomeridentity](msdyn_preferredagentcustomeridentity.md) | `objectid` | `objectid_msdyn_preferredagentcustomeridentity` |


## Source

Generated from [msdyn_preferredagentcustomeridentity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_preferredagentcustomeridentity')) on 2026-05-07.