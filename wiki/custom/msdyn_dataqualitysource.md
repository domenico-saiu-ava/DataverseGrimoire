---
logical: "msdyn_dataqualitysource"
display: "Origine qualità dati"
entitySetName: "msdyn_dataqualitysources"
primaryId: "msdyn_dataqualitysourceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Origine qualità dati

Origini a cui fa riferimento l'Agente di qualità dati di vendita

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataqualitysource` |
| Display name | Origine qualità dati |
| Display (plural) | Origini qualità dati |
| Schema name | `msdyn_dataqualitysource` |
| Entity set (Web API) | `msdyn_dataqualitysources` |
| Primary id attribute | `msdyn_dataqualitysourceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataqualitysources?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataqualitysources(<guid>)
POST /api/data/v9.2/msdyn_dataqualitysources
PATCH /api/data/v9.2/msdyn_dataqualitysources(<guid>)
DELETE /api/data/v9.2/msdyn_dataqualitysources(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_conversationindex`, `msdyn_dataqualitysourceid`, `msdyn_name`, `msdyn_originalconversationid`, `msdyn_originalsourceid`, `msdyn_regardingid`, `msdyn_regardingtype`, `msdyn_sourceitemid`, `msdyn_timestamp`, `msdyn_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataqualitysource_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataqualitysource_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataqualitysource_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataqualitysource_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dataqualitysource` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dataqualitysource` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dataqualitysource` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dataqualitysource` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataqualitysource_SyncErrors` | [msdyn_dataqualitysource](msdyn_dataqualitysource.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataqualitysource` |
| `msdyn_dataqualitysource_AsyncOperations` | [msdyn_dataqualitysource](msdyn_dataqualitysource.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataqualitysource` |
| `msdyn_dataqualitysource_MailboxTrackingFolders` | [msdyn_dataqualitysource](msdyn_dataqualitysource.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataqualitysource` |
| `msdyn_dataqualitysource_UserEntityInstanceDatas` | [msdyn_dataqualitysource](msdyn_dataqualitysource.md) | `objectid` | `objectid_msdyn_dataqualitysource` |
| `msdyn_dataqualitysource_ProcessSession` | [msdyn_dataqualitysource](msdyn_dataqualitysource.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataqualitysource` |
| `msdyn_dataqualitysource_BulkDeleteFailures` | [msdyn_dataqualitysource](msdyn_dataqualitysource.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataqualitysource` |
| `msdyn_dataqualitysource_PrincipalObjectAttributeAccesses` | [msdyn_dataqualitysource](msdyn_dataqualitysource.md) | `objectid` | `objectid_msdyn_dataqualitysource` |
| `msdyn_dataqualitysuggestion_sourceid_msdyn_dataqualitysource` | [msdyn_dataqualitysource](msdyn_dataqualitysource.md) | `msdyn_sourceid` | `msdyn_sourceid` |


## Source

Generated from [msdyn_dataqualitysource (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataqualitysource')) on 2026-05-07.