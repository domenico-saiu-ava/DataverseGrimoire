---
logical: "cai_segment"
display: "Segmento"
entitySetName: "cai_segments"
primaryId: "cai_segmentid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Segmento

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_segment` |
| Display name | Segmento |
| Display (plural) | Segmenti |
| Schema name | `cai_segment` |
| Entity set (Web API) | `cai_segments` |
| Primary id attribute | `cai_segmentid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_segments?$select=cai_name&$top=10
GET /api/data/v9.2/cai_segments(<guid>)
POST /api/data/v9.2/cai_segments
PATCH /api/data/v9.2/cai_segments(<guid>)
DELETE /api/data/v9.2/cai_segments(<guid>)
```

## Attributes

Writable: **9** · Read-only: **8**

### Writable

`cai_code`, `cai_name`, `cai_segmentid`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_segment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_segment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_segment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_segment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_segment` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_segment_DuplicateMatchingRecord` | [cai_segment](cai_segment.md) | `duplicaterecordid` | `duplicaterecordid_cai_segment` |
| `cai_segment_DuplicateBaseRecord` | [cai_segment](cai_segment.md) | `baserecordid` | `baserecordid_cai_segment` |
| `cai_queueitem_customersegmentid_cai_segment` | [cai_segment](cai_segment.md) | `cai_customersegmentid` | `cai_customersegmentid` |
| `cai_lead_segmentid_cai_segment` | [cai_segment](cai_segment.md) | `cai_segmentid` | `cai_segmentid` |
| `cai_contact_segmentid_cai_segment` | [cai_segment](cai_segment.md) | `cai_segmentid` | `cai_segmentid` |
| `cai_segment_SyncErrors` | [cai_segment](cai_segment.md) | `regardingobjectid` | `regardingobjectid_cai_segment` |
| `cai_segment_AsyncOperations` | [cai_segment](cai_segment.md) | `regardingobjectid` | `regardingobjectid_cai_segment` |
| `cai_segment_MailboxTrackingFolders` | [cai_segment](cai_segment.md) | `regardingobjectid` | `regardingobjectid_cai_segment` |
| `cai_segment_UserEntityInstanceDatas` | [cai_segment](cai_segment.md) | `objectid` | `objectid_cai_segment` |
| `cai_segment_ProcessSession` | [cai_segment](cai_segment.md) | `regardingobjectid` | `regardingobjectid_cai_segment` |
| `cai_segment_BulkDeleteFailures` | [cai_segment](cai_segment.md) | `regardingobjectid` | `regardingobjectid_cai_segment` |
| `cai_segment_PrincipalObjectAttributeAccesses` | [cai_segment](cai_segment.md) | `objectid` | `objectid_cai_segment` |
| `cai_account_segmentid_cai_segment` | [cai_segment](cai_segment.md) | `cai_segmentid` | `cai_segmentid` |


## Source

Generated from [cai_segment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_segment')) on 2026-05-07.