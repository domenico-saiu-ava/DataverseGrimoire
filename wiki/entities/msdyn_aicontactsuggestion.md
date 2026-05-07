---
logical: "msdyn_aicontactsuggestion"
display: "Teams Contact Suggestion by AI"
entitySetName: "msdyn_aicontactsuggestions"
primaryId: "msdyn_aicontactsuggestionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_aicontactsuggestionId`, `msdyn_name`, `msdyn_sourcerecord`, `msdyn_sourcerecordIdType`, `msdyn_suggestionresponse`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aicontactsuggestion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_aicontactsuggestion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aicontactsuggestion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aicontactsuggestion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aicontactsuggestion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_account_msdyn_aicontactsuggestion_sourcerecord` | [account](account.md) | `msdyn_sourcerecord` | `msdyn_sourcerecord_account` |
| `msdyn_incident_msdyn_aicontactsuggestion_sourcerecord` | [incident](incident.md) | `msdyn_sourcerecord` | `msdyn_sourcerecord_Incident_incident` |
| `owner_msdyn_aicontactsuggestion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aicontactsuggestion` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aicontactsuggestion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aicontactsuggestion_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aicontactsuggestion_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aicontactsuggestion_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aicontactsuggestion_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aicontactsuggestion_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aicontactsuggestion_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_aicontactsuggestion.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_aicontactsuggestion.md) on 2026-05-06.