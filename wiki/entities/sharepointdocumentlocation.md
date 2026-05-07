---
logical: "sharepointdocumentlocation"
display: "Document Location"
entitySetName: "sharepointdocumentlocations"
primaryId: "sharepointdocumentlocationid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Document Location

Document libraries or folders on a SharePoint server from where documents can be managed in Microsoft Dynamics 365.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sharepointdocumentlocation` |
| Display name | Document Location |
| Display (plural) | Document Locations |
| Schema name | `SharePointDocumentLocation` |
| Entity set (Web API) | `sharepointdocumentlocations` |
| Primary id attribute | `sharepointdocumentlocationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/sharepointdocumentlocations?$select=name&$top=10
GET /api/data/v9.2/sharepointdocumentlocations(<guid>)
POST /api/data/v9.2/sharepointdocumentlocations
PATCH /api/data/v9.2/sharepointdocumentlocations(<guid>)
DELETE /api/data/v9.2/sharepointdocumentlocations(<guid>)
```

## Attributes

Writable: **20** · Read-only: **15**

### Writable

`AbsoluteURL`, `Description`, `ImportSequenceNumber`, `LocationType`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ParentSiteOrLocation`, `ParentSiteOrLocationTypeCode`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RelativeUrl`, `ServiceType`, `SharePointDocumentLocationId`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `UserId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SiteCollectionId`, `TransactionCurrencyId`, `VersionNumber`

## Relationships

### Many-to-One (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Account_SharepointDocumentLocation` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account` |
| `adx_portalcomment_SharePointDocumentLocations` | [adx_portalcomment](adx_portalcomment.md) | `regardingobjectid` | `regardingobjectid_adx_portalcomment` |
| `business_unit_sharepointdocumentlocation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `KbArticle_SharepointDocumentLocation` | [kbarticle](kbarticle.md) | `regardingobjectid` | `regardingobjectid_kbarticle` |
| `knowledgearticle_SharePointDocumentLocations` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle` |
| `lk_sharepointdocumentlocationbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sharepointdocumentlocationbase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sharepointdocumentlocationbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sharepointdocumentlocationbase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_knowledgearticletemplate_SharePointDocumentLocations` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticletemplate` |
| `mspp_website_SharePointDocumentLocations` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website` |
| `owner_sharepointdocumentlocation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `sharepointdocumentlocation_parent_sharepointdocumentlocation` | [sharepointdocumentlocation](sharepointdocumentlocation.md) | `parentsiteorlocation` | `parentsiteorlocation_sharepointdocumentlocation` |
| `sharepointdocumentlocation_parent_sharepointsite` | [sharepointsite](sharepointsite.md) | `parentsiteorlocation` | `parentsiteorlocation_sharepointsite` |
| `team_sharepointdocumentlocation` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_SharePointDocumentLocation` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_sharepointdocumentlocation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `SharePointDocumentLocation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SharePointDocumentLocation_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `SharePointDocumentLocation_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `sharepointdocumentlocation_parent_sharepointdocumentlocation` | _n/a_ | `parentsiteorlocation` | _n/a_ |
| `sharepointdocumentlocation_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `SharePointDocumentLocation_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SharePointDocumentLocation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [sharepointdocumentlocation.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sharepointdocumentlocation.md) on 2026-05-06.