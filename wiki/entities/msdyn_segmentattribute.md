---
logical: "msdyn_segmentattribute"
display: "Segment property"
entitySetName: "msdyn_segmentattributes"
primaryId: "msdyn_segmentattributeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Segment property

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_segmentattribute` |
| Display name | Segment property |
| Display (plural) | Segment properties |
| Schema name | `msdyn_segmentattribute` |
| Entity set (Web API) | `msdyn_segmentattributes` |
| Primary id attribute | `msdyn_segmentattributeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_segmentattributes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_segmentattributes(<guid>)
POST /api/data/v9.2/msdyn_segmentattributes
PATCH /api/data/v9.2/msdyn_segmentattributes(<guid>)
DELETE /api/data/v9.2/msdyn_segmentattributes(<guid>)
```

## Attributes

Writable: **13** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_aggregatedprimaryentityattributelist`, `msdyn_aggregatedrelatedentityattributelist`, `msdyn_attributemapping`, `msdyn_name`, `msdyn_objecttype`, `msdyn_segmentattributeId`, `msdyn_segmentpriorityorder`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_segmentattribute_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_segmentattribute_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_segmentattribute_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_segmentattribute_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_segmentattribute` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_segmentattribute_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_segmentattribute_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_segmentattribute_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_segmentattribute_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_segmentattribute_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_segmentattribute_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_segmentattribute_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_segmentattribute_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_segmentattribute.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_segmentattribute.md) on 2026-05-06.