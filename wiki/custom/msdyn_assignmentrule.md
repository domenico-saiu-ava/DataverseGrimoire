---
logical: "msdyn_assignmentrule"
display: "Regola di assegnazione"
entitySetName: "msdyn_assignmentrules"
primaryId: "msdyn_assignmentruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regola di assegnazione

Definisce i criteri in base a quali entità vengono inoltrate a utenti o a team di vendita

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_assignmentrule` |
| Display name | Regola di assegnazione |
| Display (plural) | assignmentrules |
| Schema name | `msdyn_assignmentrule` |
| Entity set (Web API) | `msdyn_assignmentrules` |
| Primary id attribute | `msdyn_assignmentruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_assignmentrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_assignmentrules(<guid>)
POST /api/data/v9.2/msdyn_assignmentrules
PATCH /api/data/v9.2/msdyn_assignmentrules(<guid>)
DELETE /api/data/v9.2/msdyn_assignmentrules(<guid>)
```

## Attributes

Writable: **30** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_SpecificSellersOrTeams`, `msdyn_assignmentruleid`, `msdyn_assignmentwindow`, `msdyn_attributefilter`, `msdyn_description`, `msdyn_distributeto`, `msdyn_distributewithavailability`, `msdyn_distributewithcapacity`, `msdyn_distributewithrecordcreation`, `msdyn_distributiontype`, `msdyn_entityfilter`, `msdyn_evaluateentitymatchindataverse`, `msdyn_evaluateownermatchindataverse`, `msdyn_evaluationorder`, `msdyn_matchedrecords`, `msdyn_matchtype`, `msdyn_name`, `msdyn_objecttype`, `msdyn_objecttypecode`, `msdyn_recordcreationwindow`, `msdyn_segmentid`, `msdyn_sellerfilter`, `msdyn_triggertype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_assignmentrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_assignmentrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_assignmentrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_assignmentrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_assignmentrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_assignmentrule` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_assignmentrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_assignmentrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_segment_msdyn_assignmentrule_segment` | [msdyn_segment](msdyn_segment.md) | `msdyn_segmentid` | `msdyn_segmentid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_assignmentrule_SyncErrors` | [msdyn_assignmentrule](msdyn_assignmentrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_assignmentrule` |
| `msdyn_assignmentrule_AsyncOperations` | [msdyn_assignmentrule](msdyn_assignmentrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_assignmentrule` |
| `msdyn_assignmentrule_MailboxTrackingFolders` | [msdyn_assignmentrule](msdyn_assignmentrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_assignmentrule` |
| `msdyn_assignmentrule_UserEntityInstanceDatas` | [msdyn_assignmentrule](msdyn_assignmentrule.md) | `objectid` | `objectid_msdyn_assignmentrule` |
| `msdyn_assignmentrule_ProcessSession` | [msdyn_assignmentrule](msdyn_assignmentrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_assignmentrule` |
| `msdyn_assignmentrule_BulkDeleteFailures` | [msdyn_assignmentrule](msdyn_assignmentrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_assignmentrule` |
| `msdyn_assignmentrule_PrincipalObjectAttributeAccesses` | [msdyn_assignmentrule](msdyn_assignmentrule.md) | `objectid` | `objectid_msdyn_assignmentrule` |
| `msdyn_assignmentrule_connections1` | [msdyn_assignmentrule](msdyn_assignmentrule.md) | `record1id` | `record1id_msdyn_assignmentrule` |
| `msdyn_assignmentrule_connections2` | [msdyn_assignmentrule](msdyn_assignmentrule.md) | `record2id` | `record2id_msdyn_assignmentrule` |
| `msdyn_msdyn_assignmentrule_msdyn_salesroutingrun_assignmentrule` | [msdyn_assignmentrule](msdyn_assignmentrule.md) | `msdyn_assignmentruleid` | `msdyn_assignmentruleid` |
| `msdyn_assignmentrule_suggestionassignmentrule_lookup` | [msdyn_assignmentrule](msdyn_assignmentrule.md) | `msdyn_assignmentruleid` | `msdyn_assignmentruleid` |


## Source

Generated from [msdyn_assignmentrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_assignmentrule')) on 2026-05-07.