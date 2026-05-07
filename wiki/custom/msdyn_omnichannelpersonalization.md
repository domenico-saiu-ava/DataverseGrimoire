---
logical: "msdyn_omnichannelpersonalization"
display: "Personalizzazione multicanale"
entitySetName: "msdyn_omnichannelpersonalizations"
primaryId: "msdyn_omnichannelpersonalizationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Personalizzazione multicanale

Archivia le informazioni di personalizzazione delle dashboard Agente/supervisore multicanale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_omnichannelpersonalization` |
| Display name | Personalizzazione multicanale |
| Display (plural) | Personalizzazioni multicanale |
| Schema name | `msdyn_omnichannelpersonalization` |
| Entity set (Web API) | `msdyn_omnichannelpersonalizations` |
| Primary id attribute | `msdyn_omnichannelpersonalizationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_omnichannelpersonalizations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_omnichannelpersonalizations(<guid>)
POST /api/data/v9.2/msdyn_omnichannelpersonalizations
PATCH /api/data/v9.2/msdyn_omnichannelpersonalizations(<guid>)
DELETE /api/data/v9.2/msdyn_omnichannelpersonalizations(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_omnichannelpersonalizationid`, `msdyn_personalizationcontextkey`, `msdyn_personalizationvalue`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_omnichannelpersonalization_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_omnichannelpersonalization_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_omnichannelpersonalization_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_omnichannelpersonalization_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_omnichannelpersonalization` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_omnichannelpersonalization` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_omnichannelpersonalization` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_omnichannelpersonalization` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_omnichannelpersonalization_SyncErrors` | [msdyn_omnichannelpersonalization](msdyn_omnichannelpersonalization.md) | `regardingobjectid` | `regardingobjectid_msdyn_omnichannelpersonalization` |
| `msdyn_omnichannelpersonalization_AsyncOperations` | [msdyn_omnichannelpersonalization](msdyn_omnichannelpersonalization.md) | `regardingobjectid` | `regardingobjectid_msdyn_omnichannelpersonalization` |
| `msdyn_omnichannelpersonalization_MailboxTrackingFolders` | [msdyn_omnichannelpersonalization](msdyn_omnichannelpersonalization.md) | `regardingobjectid` | `regardingobjectid_msdyn_omnichannelpersonalization` |
| `msdyn_omnichannelpersonalization_UserEntityInstanceDatas` | [msdyn_omnichannelpersonalization](msdyn_omnichannelpersonalization.md) | `objectid` | `objectid_msdyn_omnichannelpersonalization` |
| `msdyn_omnichannelpersonalization_ProcessSession` | [msdyn_omnichannelpersonalization](msdyn_omnichannelpersonalization.md) | `regardingobjectid` | `regardingobjectid_msdyn_omnichannelpersonalization` |
| `msdyn_omnichannelpersonalization_BulkDeleteFailures` | [msdyn_omnichannelpersonalization](msdyn_omnichannelpersonalization.md) | `regardingobjectid` | `regardingobjectid_msdyn_omnichannelpersonalization` |
| `msdyn_omnichannelpersonalization_PrincipalObjectAttributeAccesses` | [msdyn_omnichannelpersonalization](msdyn_omnichannelpersonalization.md) | `objectid` | `objectid_msdyn_omnichannelpersonalization` |


## Source

Generated from [msdyn_omnichannelpersonalization (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_omnichannelpersonalization')) on 2026-05-07.