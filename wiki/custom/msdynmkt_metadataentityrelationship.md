---
logical: "msdynmkt_metadataentityrelationship"
display: "Relazione entità metadati"
entitySetName: "msdynmkt_metadataentityrelationships"
primaryId: "msdynmkt_metadataentityrelationshipid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Relazione entità metadati

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_metadataentityrelationship` |
| Display name | Relazione entità metadati |
| Display (plural) | Relazioni entità metadati |
| Schema name | `msdynmkt_metadataentityrelationship` |
| Entity set (Web API) | `msdynmkt_metadataentityrelationships` |
| Primary id attribute | `msdynmkt_metadataentityrelationshipid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_metadataentityrelationships?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_metadataentityrelationships(<guid>)
POST /api/data/v9.2/msdynmkt_metadataentityrelationships
PATCH /api/data/v9.2/msdynmkt_metadataentityrelationships(<guid>)
DELETE /api/data/v9.2/msdynmkt_metadataentityrelationships(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynmkt_hastomanyrelationship`, `msdynmkt_hastoonerelationship`, `msdynmkt_metadataentityrelationshipid`, `msdynmkt_name`, `msdynmkt_primaryentity`, `msdynmkt_relatedentity`, `msdynmkt_sourcetype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_metadataentityrelationship_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_metadataentityrelationship_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_metadataentityrelationship_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_metadataentityrelationship_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynmkt_metadataentityrelationship` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynmkt_metadataentityrelationship` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynmkt_metadataentityrelationship` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynmkt_metadataentityrelationship` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_metadataentityrelationship_SyncErrors` | [msdynmkt_metadataentityrelationship](msdynmkt_metadataentityrelationship.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_metadataentityrelationship` |
| `msdynmkt_metadataentityrelationship_DuplicateMatchingRecord` | [msdynmkt_metadataentityrelationship](msdynmkt_metadataentityrelationship.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_metadataentityrelationship` |
| `msdynmkt_metadataentityrelationship_DuplicateBaseRecord` | [msdynmkt_metadataentityrelationship](msdynmkt_metadataentityrelationship.md) | `baserecordid` | `baserecordid_msdynmkt_metadataentityrelationship` |
| `msdynmkt_metadataentityrelationship_AsyncOperations` | [msdynmkt_metadataentityrelationship](msdynmkt_metadataentityrelationship.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_metadataentityrelationship` |
| `msdynmkt_metadataentityrelationship_MailboxTrackingFolders` | [msdynmkt_metadataentityrelationship](msdynmkt_metadataentityrelationship.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_metadataentityrelationship` |
| `msdynmkt_metadataentityrelationship_UserEntityInstanceDatas` | [msdynmkt_metadataentityrelationship](msdynmkt_metadataentityrelationship.md) | `objectid` | `objectid_msdynmkt_metadataentityrelationship` |
| `msdynmkt_metadataentityrelationship_ProcessSession` | [msdynmkt_metadataentityrelationship](msdynmkt_metadataentityrelationship.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_metadataentityrelationship` |
| `msdynmkt_metadataentityrelationship_BulkDeleteFailures` | [msdynmkt_metadataentityrelationship](msdynmkt_metadataentityrelationship.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_metadataentityrelationship` |
| `msdynmkt_metadataentityrelationship_PrincipalObjectAttributeAccesses` | [msdynmkt_metadataentityrelationship](msdynmkt_metadataentityrelationship.md) | `objectid` | `objectid_msdynmkt_metadataentityrelationship` |


## Source

Generated from [msdynmkt_metadataentityrelationship (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_metadataentityrelationship')) on 2026-05-07.