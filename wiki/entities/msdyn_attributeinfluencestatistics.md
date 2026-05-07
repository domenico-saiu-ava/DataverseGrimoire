---
logical: "msdyn_attributeinfluencestatistics"
display: "Attribute Influence Statistics"
entitySetName: "msdyn_attributeinfluencestatisticses"
primaryId: "msdyn_attributeinfluencestatisticsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Attribute Influence Statistics

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_attributeinfluencestatistics` |
| Display name | Attribute Influence Statistics |
| Display (plural) | msdyn_attributeinfluencestatistics_set |
| Schema name | `msdyn_attributeinfluencestatistics` |
| Entity set (Web API) | `msdyn_attributeinfluencestatisticses` |
| Primary id attribute | `msdyn_attributeinfluencestatisticsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_attributeinfluencestatisticses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_attributeinfluencestatisticses(<guid>)
POST /api/data/v9.2/msdyn_attributeinfluencestatisticses
PATCH /api/data/v9.2/msdyn_attributeinfluencestatisticses(<guid>)
DELETE /api/data/v9.2/msdyn_attributeinfluencestatisticses(<guid>)
```

## Attributes

Writable: **20** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_attributeinfluencestatisticsId`, `msdyn_attributename`, `msdyn_entityname`, `msdyn_IgnoreIfBlank`, `msdyn_Importance`, `msdyn_IsCrmAttribute`, `msdyn_IsRecommended`, `msdyn_isvalid`, `msdyn_modelid`, `msdyn_name`, `msdyn_notselectedreason`, `msdyn_predictioniD`, `msdyn_statistics`, `msdyn_submodelid`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_attributeinfluencestatistics_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_attributeinfluencestatistics_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_attributeinfluencestatistics_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_attributeinfluencestatistics_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_attributeinfluencestatistics` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_attributeinfluencestatistics_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_attributeinfluencestatistics_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_attributeinfluencestatistics_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_attributeinfluencestatistics_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_attributeinfluencestatistics_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_attributeinfluencestatistics_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_attributeinfluencestatistics_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_attributeinfluencestatistics_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_attributeinfluencestatistics.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_attributeinfluencestatistics.md) on 2026-05-06.