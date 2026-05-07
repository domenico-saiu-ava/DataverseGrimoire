---
logical: "msdyn_opportunitykpiitem"
display: "Opportunity KPI Item"
entitySetName: "msdyn_opportunitykpiitems"
primaryId: "msdyn_opportunitykpiitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Opportunity KPI Item

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_opportunitykpiitem` |
| Display name | Opportunity KPI Item |
| Display (plural) | Opportunity KPI Items |
| Schema name | `msdyn_opportunitykpiitem` |
| Entity set (Web API) | `msdyn_opportunitykpiitems` |
| Primary id attribute | `msdyn_opportunitykpiitemid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_opportunitykpiitems?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_opportunitykpiitems(<guid>)
POST /api/data/v9.2/msdyn_opportunitykpiitems
PATCH /api/data/v9.2/msdyn_opportunitykpiitems(<guid>)
DELETE /api/data/v9.2/msdyn_opportunitykpiitems(<guid>)
```

## Attributes

Writable: **42** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_acilastupdatetimestamp`, `msdyn_averagefirstresponsetimebytheminhrs`, `msdyn_averagefirstresponsetimebyusinhrs`, `msdyn_computationaccuracy`, `msdyn_date`, `msdyn_emailattachmentopens`, `msdyn_emaillinksclicked`, `msdyn_emailsreceived`, `msdyn_emailssent`, `msdyn_facetimewithcustomer`, `msdyn_lastactivitybyteam`, `msdyn_lastactivitydirection`, `msdyn_lastactivityid`, `msdyn_lastactivitytype`, `msdyn_liemailssent`, `msdyn_meetingsreceived`, `msdyn_meetingssent`, `msdyn_name`, `msdyn_nextactivitybyteam`, `msdyn_nextactivitydirection`, `msdyn_nextactivityid`, `msdyn_nextactivitytype`, `msdyn_openedemails`, `msdyn_opportunityid`, `msdyn_opportunitykpiitemId`, `msdyn_phonecallsmade`, `msdyn_phonecallsreceived`, `msdyn_relationshiphealthscorestate`, `msdyn_relationshiphealthscorevalue`, `msdyn_relationshiphealthtrend`, `msdyn_responseratebythem`, `msdyn_responseratebyus`, `msdyn_timespentbycustomer`, `msdyn_timespentbycustomer_calculated`, `msdyn_timespentbyteam`, `msdyn_timespentbyteam_calculated`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_opportunitykpiitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_opportunitykpiitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_opportunitykpiitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_opportunitykpiitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_opportunity_msdyn_opportunitykpiitem_opportunityid` | [opportunity](opportunity.md) | `msdyn_opportunityid` | `msdyn_opportunityid` |
| `organization_msdyn_opportunitykpiitem` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_opportunitykpiitem_opportunity_opportunitykpiid` | _n/a_ | `msdyn_opportunitykpiid` | _n/a_ |
| `msdyn_opportunitykpiitem_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunitykpiitem_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunitykpiitem_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunitykpiitem_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_opportunitykpiitem_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunitykpiitem_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_opportunitykpiitem.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_opportunitykpiitem.md) on 2026-05-06.