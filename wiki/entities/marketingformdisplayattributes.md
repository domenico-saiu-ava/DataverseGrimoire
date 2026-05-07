---
logical: "marketingformdisplayattributes"
display: "Marketing Form Display Attributes"
entitySetName: "marketingformdisplayattributesset"
primaryId: "marketingformdisplayattributesid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Marketing Form Display Attributes

Setting to allow customized form for In-app Marketing Form

## Identity

| Property | Value |
| --- | --- |
| Logical name | `marketingformdisplayattributes` |
| Display name | Marketing Form Display Attributes |
| Display (plural) | Marketing Form Display Attributes Set |
| Schema name | `marketingformdisplayattributes` |
| Entity set (Web API) | `marketingformdisplayattributesset` |
| Primary id attribute | `marketingformdisplayattributesid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/marketingformdisplayattributesset?$select=name&$top=10
GET /api/data/v9.2/marketingformdisplayattributesset(<guid>)
POST /api/data/v9.2/marketingformdisplayattributesset
PATCH /api/data/v9.2/marketingformdisplayattributesset(<guid>)
DELETE /api/data/v9.2/marketingformdisplayattributesset(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`DisplayAttributeList`, `EntityLogicalName`, `ImportSequenceNumber`, `marketingformdisplayattributesId`, `Name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_marketingformdisplayattributes_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_marketingformdisplayattributes_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_marketingformdisplayattributes_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_marketingformdisplayattributes_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_marketingformdisplayattributes` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `marketingformdisplayattributes_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `marketingformdisplayattributes_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `marketingformdisplayattributes_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `marketingformdisplayattributes_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `marketingformdisplayattributes_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `marketingformdisplayattributes_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `marketingformdisplayattributes_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `marketingformdisplayattributes_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [marketingformdisplayattributes.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/marketingformdisplayattributes.md) on 2026-05-06.