---
logical: "msdynmkt_preferencecenterlink"
display: "Preference center link"
entitySetName: "msdynmkt_preferencecenterlinks"
primaryId: "msdynmkt_preferencecenterlinkid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Preference center link

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_preferencecenterlink` |
| Display name | Preference center link |
| Display (plural) | Preference center links |
| Schema name | `msdynmkt_preferencecenterlink` |
| Entity set (Web API) | `msdynmkt_preferencecenterlinks` |
| Primary id attribute | `msdynmkt_preferencecenterlinkid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_preferencecenterlinks?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_preferencecenterlinks(<guid>)
POST /api/data/v9.2/msdynmkt_preferencecenterlinks
PATCH /api/data/v9.2/msdynmkt_preferencecenterlinks(<guid>)
DELETE /api/data/v9.2/msdynmkt_preferencecenterlinks(<guid>)
```

## Attributes

Writable: **13** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdynmkt_contactpoint`, `msdynmkt_contactpointtype`, `msdynmkt_name`, `msdynmkt_preferencecenterlinkId`, `msdynmkt_targetentityid`, `msdynmkt_targetentityname`, `msdynmkt_trackingcontext`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_preferencecenterlink_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_preferencecenterlink_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_preferencecenterlink_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_preferencecenterlink_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdynmkt_preferencecenterlink` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_preferencecenterlink_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_preferencecenterlink_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_preferencecenterlink_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_preferencecenterlink_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_preferencecenterlink_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_preferencecenterlink_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_preferencecenterlink_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_preferencecenterlink_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_preferencecenterlink.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_preferencecenterlink.md) on 2026-05-06.