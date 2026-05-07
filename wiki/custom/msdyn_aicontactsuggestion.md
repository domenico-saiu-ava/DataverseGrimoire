---
logical: "msdyn_aicontactsuggestion"
display: "Teams Contact Suggestion by AI"
entitySetName: "msdyn_aicontactsuggestions"
primaryId: "msdyn_aicontactsuggestionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Teams Contact Suggestion by AI

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aicontactsuggestion` |
| Display name | Teams Contact Suggestion by AI |
| Display (plural) | Teams Contact Suggestion by AI |
| Schema name | `msdyn_aicontactsuggestion` |
| Entity set (Web API) | `msdyn_aicontactsuggestions` |
| Primary id attribute | `msdyn_aicontactsuggestionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aicontactsuggestions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aicontactsuggestions(<guid>)
POST /api/data/v9.2/msdyn_aicontactsuggestions
PATCH /api/data/v9.2/msdyn_aicontactsuggestions(<guid>)
DELETE /api/data/v9.2/msdyn_aicontactsuggestions(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_aicontactsuggestionid`, `msdyn_name`, `msdyn_sourcerecord`, `msdyn_suggestionresponse`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aicontactsuggestion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aicontactsuggestion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aicontactsuggestion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aicontactsuggestion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aicontactsuggestion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aicontactsuggestion` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aicontactsuggestion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aicontactsuggestion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_account_msdyn_aicontactsuggestion_sourcerecord` | [account](account.md) | `msdyn_sourcerecord` | `msdyn_sourcerecord_account` |
| `msdyn_incident_msdyn_aicontactsuggestion_sourcerecord` | [incident](incident.md) | `msdyn_sourcerecord` | `msdyn_sourcerecord_Incident_incident` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aicontactsuggestion_SyncErrors` | [msdyn_aicontactsuggestion](msdyn_aicontactsuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_aicontactsuggestion` |
| `msdyn_aicontactsuggestion_AsyncOperations` | [msdyn_aicontactsuggestion](msdyn_aicontactsuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_aicontactsuggestion` |
| `msdyn_aicontactsuggestion_MailboxTrackingFolders` | [msdyn_aicontactsuggestion](msdyn_aicontactsuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_aicontactsuggestion` |
| `msdyn_aicontactsuggestion_UserEntityInstanceDatas` | [msdyn_aicontactsuggestion](msdyn_aicontactsuggestion.md) | `objectid` | `objectid_msdyn_aicontactsuggestion` |
| `msdyn_aicontactsuggestion_ProcessSession` | [msdyn_aicontactsuggestion](msdyn_aicontactsuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_aicontactsuggestion` |
| `msdyn_aicontactsuggestion_BulkDeleteFailures` | [msdyn_aicontactsuggestion](msdyn_aicontactsuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_aicontactsuggestion` |
| `msdyn_aicontactsuggestion_PrincipalObjectAttributeAccesses` | [msdyn_aicontactsuggestion](msdyn_aicontactsuggestion.md) | `objectid` | `objectid_msdyn_aicontactsuggestion` |


## Source

Generated from [msdyn_aicontactsuggestion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aicontactsuggestion')) on 2026-05-07.