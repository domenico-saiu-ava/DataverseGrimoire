---
logical: "msdyn_rawinsightentitylink"
display: "msdyn_rawinsightentitylink"
entitySetName: "msdyn_rawinsightentitylinks"
primaryId: "msdyn_rawinsightentitylinkid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# msdyn_rawinsightentitylink

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_rawinsightentitylink` |
| Display name | msdyn_rawinsightentitylink |
| Display (plural) | msdyn_rawinsightentitylinks |
| Schema name | `msdyn_rawinsightentitylink` |
| Entity set (Web API) | `msdyn_rawinsightentitylinks` |
| Primary id attribute | `msdyn_rawinsightentitylinkid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_rawinsightentitylinks?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_rawinsightentitylinks(<guid>)
POST /api/data/v9.2/msdyn_rawinsightentitylinks
PATCH /api/data/v9.2/msdyn_rawinsightentitylinks(<guid>)
DELETE /api/data/v9.2/msdyn_rawinsightentitylinks(<guid>)
```

## Attributes

Writable: **21** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_crmactivityid`, `msdyn_externalcrmorgid`, `msdyn_insightindex`, `msdyn_insightname`, `msdyn_name`, `msdyn_processingretrycount`, `msdyn_processingstatus`, `msdyn_rawinsightentitylinkconfirmedby`, `msdyn_rawinsightentitylinkId`, `msdyn_rawinsightsourcegroupid`, `msdyn_rawinsightsourceid`, `msdyn_rawinsightsourcetype`, `msdyn_regardingentityid`, `msdyn_regardingentitytype`, `msdyn_relevancescore`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_rawinsightentitylink_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_rawinsightentitylink_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_rawinsightentitylink_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_rawinsightentitylink_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_rawinsightentitylink` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_rawinsightentitylink_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_rawinsightentitylink_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_rawinsightentitylink_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_rawinsightentitylink_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_rawinsightentitylink_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_rawinsightentitylink_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_rawinsightentitylink_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_rawinsightentitylink_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_rawinsightentitylink.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_rawinsightentitylink.md) on 2026-05-06.