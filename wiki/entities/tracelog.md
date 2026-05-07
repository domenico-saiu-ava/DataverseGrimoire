---
logical: "tracelog"
display: "Trace"
entitySetName: "tracelogs"
primaryId: "tracelogid"
primaryName: "text"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Trace

A trace log.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `tracelog` |
| Display name | Trace |
| Display (plural) | Traces |
| Schema name | `TraceLog` |
| Entity set (Web API) | `tracelogs` |
| Primary id attribute | `tracelogid` |
| Primary name attribute | `text` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/tracelogs?$select=text&$top=10
GET /api/data/v9.2/tracelogs(<guid>)
POST /api/data/v9.2/tracelogs
PATCH /api/data/v9.2/tracelogs(<guid>)
DELETE /api/data/v9.2/tracelogs(<guid>)
```

## Attributes

Writable: **19** · Read-only: **12**

### Writable

`CanBeDeleted`, `CollationLevel`, `ErrorDetails`, `ErrorTypeDisplay`, `IsUnique`, `Level`, `MachineName`, `ParentTraceLogId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `Text`, `TimeZoneRuleVersionNumber`, `TraceActionXml`, `TraceCode`, `TraceDetailXml`, `TraceLogId`, `TraceParameterXml`, `TraceStatus`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `RegardingObjectOwnerId`, `RegardingObjectOwnerIdType`, `RegardingObjectOwningBusinessUnit`, `TraceParameterHash`, `TraceRegardingId`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_tracelog_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_tracelog_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_tracelog_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_tracelog_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_tracelog` | [organization](organization.md) | `organizationid` | `organizationid` |
| `tracelog_EmailServerProfile` | [emailserverprofile](emailserverprofile.md) | `regardingobjectid` | `regardingobjectid_emailserverprofile` |
| `tracelog_Mailbox` | [mailbox](mailbox.md) | `regardingobjectid` | `regardingobjectid_mailbox` |
| `tracelog_parent_tracelog` | [tracelog](tracelog.md) | `parenttracelogid` | `parenttracelogid` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `tracelog_parent_tracelog` | _n/a_ | `parenttracelogid` | _n/a_ |


## Source

Generated from [tracelog.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/tracelog.md) on 2026-05-06.