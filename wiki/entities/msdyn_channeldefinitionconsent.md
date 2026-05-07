---
logical: "msdyn_channeldefinitionconsent"
display: "Channel Definition Consent"
entitySetName: "msdyn_channeldefinitionconsents"
primaryId: "msdyn_channeldefinitionconsentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Channel Definition Consent

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channeldefinitionconsent` |
| Display name | Channel Definition Consent |
| Display (plural) | Channel Definition Consents |
| Schema name | `msdyn_channeldefinitionconsent` |
| Entity set (Web API) | `msdyn_channeldefinitionconsents` |
| Primary id attribute | `msdyn_channeldefinitionconsentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channeldefinitionconsents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channeldefinitionconsents(<guid>)
POST /api/data/v9.2/msdyn_channeldefinitionconsents
PATCH /api/data/v9.2/msdyn_channeldefinitionconsents(<guid>)
DELETE /api/data/v9.2/msdyn_channeldefinitionconsents(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_channeldefinitionconsentId`, `msdyn_channeldefinitionid`, `msdyn_GenericConsentGiven`, `msdyn_name`, `msdyn_SpecialConsentGiven`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_channeldefinitionconsent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_channeldefinitionconsent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channeldefinitionconsent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channeldefinitionconsent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channeldefinitionconsent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_channeldefinitionconsent_ChannelDefinitionId` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `msdyn_channeldefinitionid` | `msdyn_channeldefinitionid` |
| `owner_msdyn_channeldefinitionconsent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_channeldefinitionconsent` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_channeldefinitionconsent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channeldefinitionconsent_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channeldefinitionconsent_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channeldefinitionconsent_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_channeldefinitionconsent_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_channeldefinitionconsent_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channeldefinitionconsent_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_channeldefinitionconsent_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channeldefinitionconsent_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_channeldefinitionconsent.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_channeldefinitionconsent.md) on 2026-05-06.