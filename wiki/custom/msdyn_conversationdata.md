---
logical: "msdyn_conversationdata"
display: "Dati di conversazione (deprecata)"
entitySetName: "msdyn_conversationsdata"
primaryId: "msdyn_conversationdataid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Dati di conversazione (deprecata)

Entità primaria per una conversazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationdata` |
| Display name | Dati di conversazione (deprecata) |
| Display (plural) | Dati conversazioni (deprecata) |
| Schema name | `msdyn_conversationdata` |
| Entity set (Web API) | `msdyn_conversationsdata` |
| Primary id attribute | `msdyn_conversationdataid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationsdata?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationsdata(<guid>)
POST /api/data/v9.2/msdyn_conversationsdata
PATCH /api/data/v9.2/msdyn_conversationsdata(<guid>)
DELETE /api/data/v9.2/msdyn_conversationsdata(<guid>)
```

## Attributes

Writable: **30** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_accountid`, `msdyn_additionaldata`, `msdyn_channel`, `msdyn_contactid`, `msdyn_conversationdataid`, `msdyn_conversationid`, `msdyn_conversationtimestamp`, `msdyn_customattribute1`, `msdyn_customattribute2`, `msdyn_customattribute3`, `msdyn_customattribute4`, `msdyn_customattribute5`, `msdyn_customercity`, `msdyn_customercountry`, `msdyn_customerstate`, `msdyn_customerzip`, `msdyn_externalcorrelationid`, `msdyn_name`, `msdyn_primaryrelatedentityname`, `msdyn_primaryrelatedentityrecordid`, `msdyn_providerid`, `msdyn_providername`, `msdyn_region`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_conversationdata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationdata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationdata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationdata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_conversationdata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_conversationdata` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_conversationdata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_conversationdata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationdata_SyncErrors` | [msdyn_conversationdata](msdyn_conversationdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationdata` |
| `msdyn_conversationdata_DuplicateMatchingRecord` | [msdyn_conversationdata](msdyn_conversationdata.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_conversationdata` |
| `msdyn_conversationdata_DuplicateBaseRecord` | [msdyn_conversationdata](msdyn_conversationdata.md) | `baserecordid` | `baserecordid_msdyn_conversationdata` |
| `msdyn_conversationdata_AsyncOperations` | [msdyn_conversationdata](msdyn_conversationdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationdata` |
| `msdyn_conversationdata_MailboxTrackingFolders` | [msdyn_conversationdata](msdyn_conversationdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationdata` |
| `msdyn_conversationdata_UserEntityInstanceDatas` | [msdyn_conversationdata](msdyn_conversationdata.md) | `objectid` | `objectid_msdyn_conversationdata` |
| `msdyn_conversationdata_ProcessSession` | [msdyn_conversationdata](msdyn_conversationdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationdata` |
| `msdyn_conversationdata_BulkDeleteFailures` | [msdyn_conversationdata](msdyn_conversationdata.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationdata` |
| `msdyn_conversationdata_PrincipalObjectAttributeAccesses` | [msdyn_conversationdata](msdyn_conversationdata.md) | `objectid` | `objectid_msdyn_conversationdata` |


## Source

Generated from [msdyn_conversationdata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationdata')) on 2026-05-07.