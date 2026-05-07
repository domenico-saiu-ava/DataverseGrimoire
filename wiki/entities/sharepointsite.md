---
logical: "sharepointsite"
display: "SharePoint Site"
entitySetName: "sharepointsites"
primaryId: "sharepointsiteid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# SharePoint Site

SharePoint site from where documents can be managed in Microsoft Dynamics 365.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sharepointsite` |
| Display name | SharePoint Site |
| Display (plural) | SharePoint Sites |
| Schema name | `SharePointSite` |
| Entity set (Web API) | `sharepointsites` |
| Primary id attribute | `sharepointsiteid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/sharepointsites?$select=name&$top=10
GET /api/data/v9.2/sharepointsites(<guid>)
POST /api/data/v9.2/sharepointsites
PATCH /api/data/v9.2/sharepointsites(<guid>)
DELETE /api/data/v9.2/sharepointsites(<guid>)
```

## Attributes

Writable: **24** · Read-only: **15**

### Writable

`AbsoluteURL`, `Description`, `FolderStructureEntity`, `ImportSequenceNumber`, `IsDefault`, `IsGridPresent`, `IsPowerBISite`, `LastValidated`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ParentSite`, `ParentSiteObjectTypeCode`, `RelativeUrl`, `ServiceType`, `SharePointSiteId`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `UserId`, `UTCConversionTimeZoneCode`, `ValidationStatus`, `ValidationStatusErrorCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SiteCollectionId`, `TransactionCurrencyId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_sharepointsites` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_sharepointsitebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sharepointsitebase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sharepointsitebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sharepointsitebase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_sharepointsite` | [owner](owner.md) | `ownerid` | `ownerid` |
| `sharepointsite_parentsite_sharepointsite` | [sharepointsite](sharepointsite.md) | `parentsite` | `parentsite` |
| `team_sharepointsite` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_SharePointSite` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_sharepointsite` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sharepointdocumentlocation_parent_sharepointsite` | _n/a_ | `parentsiteorlocation` | _n/a_ |
| `SharePointSite_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SharePointSite_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `SharePointSite_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `sharepointsite_parentsite_sharepointsite` | _n/a_ | `parentsite` | _n/a_ |
| `sharepointsite_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `SharePointSite_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SharePointSite_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [sharepointsite.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sharepointsite.md) on 2026-05-06.