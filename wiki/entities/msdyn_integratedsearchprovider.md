---
logical: "msdyn_integratedsearchprovider"
display: "Integrated search provider"
entitySetName: "msdyn_integratedsearchproviders"
primaryId: "msdyn_integratedsearchproviderid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Integrated search provider

Ingest and search files, documents, or articles from data sources outside of your current Dynamics 365 organization with a unified ranking.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_integratedsearchprovider` |
| Display name | Integrated search provider |
| Display (plural) | Integrated search providers |
| Schema name | `msdyn_integratedsearchprovider` |
| Entity set (Web API) | `msdyn_integratedsearchproviders` |
| Primary id attribute | `msdyn_integratedsearchproviderid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_integratedsearchproviders?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_integratedsearchproviders(<guid>)
POST /api/data/v9.2/msdyn_integratedsearchproviders
PATCH /api/data/v9.2/msdyn_integratedsearchproviders(<guid>)
DELETE /api/data/v9.2/msdyn_integratedsearchproviders(<guid>)
```

## Attributes

Writable: **26** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `msdyn_allowedlanguages`, `msdyn_articlepropertiesmapping`, `msdyn_authenticationtype`, `msdyn_clientid`, `msdyn_clientsecret`, `msdyn_datasourcetype`, `msdyn_description`, `msdyn_htmlmetatags`, `msdyn_includedsitemapurls`, `msdyn_integratedsearchproviderId`, `msdyn_isfieldmappingoptionselected`, `msdyn_lastfetchtime`, `msdyn_lookbackperiod`, `msdyn_name`, `msdyn_refreshschedule`, `msdyn_resourceid`, `msdyn_rooturl`, `msdyn_tenantid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_htmlsample`, `msdyn_htmlsample_Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_integratedsearchprovider` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_integratedsearchprovider_msdyn_htmlsample` | [fileattachment](fileattachment.md) | `msdyn_htmlsample` | `msdyn_htmlsample` |
| `lk_msdyn_integratedsearchprovider_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_integratedsearchprovider_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_integratedsearchprovider_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_integratedsearchprovider_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_integratedsearchprovider` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_integratedsearchprovider` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_integratedsearchprovider` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_integratedsearchprovider_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_integratedsearchprovider_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_integratedsearchprovider_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_integratedsearchprovider_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_integratedsearchprovider_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_integratedsearchprovider_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_integratedsearchprovider_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_integratedsearchprovider_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_integratedsearchprovider_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_knowledgearticle_integratedsearchprovider` | _n/a_ | `msdyn_integratedsearchproviderid` | _n/a_ |


## Source

Generated from [msdyn_integratedsearchprovider.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_integratedsearchprovider.md) on 2026-05-06.